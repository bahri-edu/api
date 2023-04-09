import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { Staff } from "./model";
import { staffUpdateValidator, staffValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  const { collegeId } = req.query;
  try {
    const staffs = await Staff.find({
      ...(collegeId && { collegeId }),
    });

    res.status(200).json(staffs);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findById(id);

    if (!staff) throw new NotFoundError();

    res.status(200).json(staff);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  staffValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const staff = await Staff.build(req.body).save();
      return res.status(201).json(staff);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  staffUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const staff = await Staff.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!staff) throw new NotFoundError();

      return res.status(200).json(staff);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findByIdAndDelete(id);

    if (!staff) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as staffRouter };
