import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { FactAndFigure } from "./model";
import {
  factAndFigureUpdateValidator,
  factAndFigureValidator,
} from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const factAndFigures = await FactAndFigure.find();

    res.status(200).json(factAndFigures);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const factAndFigure = await FactAndFigure.findById(id);

    if (!factAndFigure) throw new NotFoundError();

    res.status(200).json(factAndFigure);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  factAndFigureValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const factAndFigure = await FactAndFigure.build(req.body).save();
      return res.status(201).json(factAndFigure);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  factAndFigureUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const factAndFigure = await FactAndFigure.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      if (!factAndFigure) throw new NotFoundError();
      return res.status(200).json(factAndFigure);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const factAndFigure = await FactAndFigure.findByIdAndDelete(id);

    if (!factAndFigure) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as factAndFigureRouter };
