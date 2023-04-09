import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray, sortValidator } from "../../helpers";
import { DeanshipAdministration } from "./model";
import {
  deanshipAdministrationUpdateValidator,
  deanshipAdministrationValidator,
} from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  const { deanshipType } = req.query;
  try {
    const deanshipAdministrations = await DeanshipAdministration.find({
      ...(deanshipType && { deanshipType }),
    }).sort({ seqNo: 1 });

    res.status(200).json(deanshipAdministrations);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanshipAdministration = await DeanshipAdministration.findById(id);

    if (!deanshipAdministration) throw new NotFoundError();

    res.status(200).json(deanshipAdministration);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  deanshipAdministrationValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const deanshipAdministration = await DeanshipAdministration.build(
        req.body
      ).save();
      return res.status(201).json(deanshipAdministration);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  deanshipAdministrationUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const deanshipAdministration =
        await DeanshipAdministration.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (!deanshipAdministration) throw new NotFoundError();

      return res.status(200).json(deanshipAdministration);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanshipAdministration =
      await DeanshipAdministration.findByIdAndDelete(id);

    if (!deanshipAdministration) throw new NotFoundError();

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

      DeanshipAdministration.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as deanshipAdministrationRouter };
