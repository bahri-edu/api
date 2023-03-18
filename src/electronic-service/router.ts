import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray } from "../helpers/db.helper";
import { EService } from "./model";
import { eServiceUpdateValidator, eServiceValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const historicalBackgrounds = await EService.find().sort({ seqNo: 1 });

    res.status(200).json(historicalBackgrounds);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const eService = await EService.findById(id);

    if (!eService) throw new NotFoundError();

    res.status(200).json(eService);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  eServiceValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const eService = await EService.build(req.body).save();
      return res.status(201).json(eService);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  eServiceUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const eService = await EService.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!eService) throw new NotFoundError();
      return res.status(200).json(eService);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.post("/sort", async (req: Request, res: Response) => {
  try {
    const { sort } = req.body;

    const bulkArr = BulkArray(sort);

    EService.bulkWrite(bulkArr);

    return res.status(200).json({ message: "sort successful" });
  } catch (error) {
    throw new InternalServerError();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const eService = await EService.findByIdAndDelete(id);

    if (!eService) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as eServiceRouter };
