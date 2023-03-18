import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { News } from "./model";
import { newsUpdateValidator, newsValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const { limit, type } = req.query;

    const colleges = await News.find({ ...(type && { type }) })

      .sort({ createdAt: -1 })
      .limit(+limit);

    res.status(200).json(colleges);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const college = await News.findById(id);

    if (!college) throw new NotFoundError();

    res.status(200).json(college);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  newsValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const college = await News.build(req.body).save();
      return res.status(201).json(college);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.put(
  "/:id",
  newsUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const college = await News.findByIdAndUpdate(id, req.body, { new: true });
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

    const college = await News.findByIdAndDelete(id);

    if (!college) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as newsRouter };
