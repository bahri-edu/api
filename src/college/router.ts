import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { College } from "./model";
import { collegeUpdateValidator, collegeValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const colleges = await College.find();

    res.status(200).json(colleges);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const college = await College.findById(id);

    if (!college) throw new NotFoundError();

    res.status(200).json(college);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  collegeValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const college = await College.build(req.body).save();
      return res.status(201).json(college);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  collegeUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const college = await College.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!college) throw new NotFoundError();
      return res.status(201).json(college);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const college = await College.findByIdAndDelete(id);

    if (!college) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as collegeRouter };
