import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { HistoricalBackground } from "./model";
import {
  historicalBackgroundUpdateValidator,
  historicalBackgroundValidator,
} from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const historicalBackgrounds = await HistoricalBackground.find();

    res.status(200).json(historicalBackgrounds);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const historicalBackground = await HistoricalBackground.findById(id);

    if (!historicalBackground) throw new NotFoundError();

    res.status(200).json(historicalBackground);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  historicalBackgroundValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const historicalBackground = await HistoricalBackground.build(
        req.body
      ).save();
      return res.status(201).json(historicalBackground);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  historicalBackgroundUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const historicalBackground = await HistoricalBackground.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      if (!historicalBackground) throw new NotFoundError();
      return res.status(200).json(historicalBackground);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const historicalBackground = await HistoricalBackground.findByIdAndDelete(
      id
    );

    if (!historicalBackground) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as historicalBackgroundRouter };
