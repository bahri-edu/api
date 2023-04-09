import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray, sortValidator } from "../../helpers";
import { DeanshipStudentService } from "./model";
import {
  deanshipStudentServiceUpdateValidator,
  deanshipStudentServiceValidator,
} from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  const { deanshipType } = req.query;
  try {
    const deanshipStudentServices = await DeanshipStudentService.find({
      ...(deanshipType && { deanshipType }),
    }).sort({ seqNo: 1 });

    res.status(200).json(deanshipStudentServices);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanshipStudentService = await DeanshipStudentService.findById(id);

    if (!deanshipStudentService) throw new NotFoundError();

    res.status(200).json(deanshipStudentService);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  deanshipStudentServiceValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const deanshipStudentService = await DeanshipStudentService.build(
        req.body
      ).save();
      return res.status(201).json(deanshipStudentService);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  deanshipStudentServiceUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const deanshipStudentService =
        await DeanshipStudentService.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (!deanshipStudentService) throw new NotFoundError();

      return res.status(200).json(deanshipStudentService);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deanshipStudentService =
      await DeanshipStudentService.findByIdAndDelete(id);

    if (!deanshipStudentService) throw new NotFoundError();

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

      DeanshipStudentService.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as deanshipStudentServiceRouter };
