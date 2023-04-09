import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray, sortValidator } from "../../helpers";
import { Deanship } from "./model";
import { deanshipUpdateValidator, deanshipValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  const { deanshipType } = req.query;
  try {
    const deanships = await Deanship.find({
      ...(deanshipType && { deanshipType }),
    }).sort({ seqNo: 1 });

    res.status(200).json(deanships);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanship = await Deanship.findById(id);

    if (!deanship) throw new NotFoundError();

    res.status(200).json(deanship);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  deanshipValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const deanship = await Deanship.build(req.body).save();
      return res.status(201).json(deanship);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  deanshipUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const deanship = await Deanship.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!deanship) throw new NotFoundError();

      return res.status(200).json(deanship);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanship = await Deanship.findByIdAndDelete(id);

    if (!deanship) throw new NotFoundError();

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

      Deanship.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as deanshipRouter };
