import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import e, { Router, Request, Response } from "express";
import { BulkArray, sortValidator } from "../../helpers";
import { UploadFile } from "./model";
import { uploadFileValidator, uploadFileUpdateValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const uploadFiles = await UploadFile.find().sort({ seqNo: 1 });

    res.status(200).json(uploadFiles);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const uploadFile = await UploadFile.findById(id);

    if (!uploadFile) throw new NotFoundError();

    res.status(200).json(uploadFile);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  uploadFileValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const uploadFile = await UploadFile.build(req.body).save();
      return res.status(201).json(uploadFile);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  uploadFileUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const uploadFile = await UploadFile.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!uploadFile) throw new NotFoundError();
      return res.status(200).json(uploadFile);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const uploadFile = await UploadFile.findByIdAndDelete(id);

    if (!uploadFile) throw new NotFoundError();

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

      UploadFile.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as uploadFileRouter };
