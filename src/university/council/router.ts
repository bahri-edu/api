import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { Council } from "./model";
import { councilValidator, councilUpdateValidator } from "./validator";

const router: Router = Router();

/**
 * ---------------------------------------------------------
 * get all
 * ---------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    const council = await Council.find();

    res.status(200).json(council);
  } catch (error) {
    throw new InternalServerError();
  }
});

/**
 * ---------------------------------------------------------
 * get one by id
 * ---------------------------------------------------------
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const council = await Council.findById(id);

    if (!council) throw new NotFoundError();

    res.status(200).json(council);
  } catch (error) {
    throw new NotFoundError();
  }
});

/**
 * ---------------------------------------------------------
 * create new one
 * ---------------------------------------------------------
 */
router.post(
  "/",
  councilValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const council = await Council.build(req.body).save();
      return res.status(201).json(council);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

/**
 * ---------------------------------------------------------
 * update one
 * ---------------------------------------------------------
 */
router.put(
  "/:id",
  councilUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const council = await Council.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!council) throw new NotFoundError();
      return res.status(200).json(council);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

/**
 * ---------------------------------------------------------
 * delete ne
 * ---------------------------------------------------------
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const council = await Council.findByIdAndDelete(id);

    if (!council) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as councilRouter };
