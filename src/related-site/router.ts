import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray } from "../helpers/db.helper";
import { sortValidator } from "../helpers";
import { RelatedSite } from "./model";
import { relatedSiteValidator, relatedSiteUpdateValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const { limit, type } = req.query;

    const relatedSite = await RelatedSite.find().sort({ seqNo: 1 });
    res.status(200).json(relatedSite);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const relatedSite = await RelatedSite.findById(id);

    if (!relatedSite) throw new NotFoundError();

    res.status(200).json(relatedSite);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  relatedSiteValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const relatedSite = await RelatedSite.build(req.body).save();
      return res.status(201).json(relatedSite);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.put(
  "/:id",
  relatedSiteUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const relatedSite = await RelatedSite.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!relatedSite) throw new NotFoundError();
      return res.status(201).json(relatedSite);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const relatedSite = await RelatedSite.findByIdAndDelete(id);

    if (!relatedSite) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/sort",
  sortValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { sort } = req.body;

      const bulkArr = BulkArray(sort);

      RelatedSite.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as relatedSiteRouter };
