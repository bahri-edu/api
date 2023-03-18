import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { ViceChancellorMessage } from "./model";
import {
  viceChancellorMessageUpdateValidator,
  viceChancellorMessageValidator,
} from "./validator";

const router: Router = Router();

/**
 * ---------------------------------------------------------
 * get all
 * ---------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    const viceChancellorMessage = await ViceChancellorMessage.find();

    res.status(200).json(viceChancellorMessage);
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

    const viceChancellorMessage = await ViceChancellorMessage.findById(id);

    if (!viceChancellorMessage) throw new NotFoundError();

    res.status(200).json(viceChancellorMessage);
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
  viceChancellorMessageValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const viceChancellorMessage = await ViceChancellorMessage.build(
        req.body
      ).save();
      return res.status(201).json(viceChancellorMessage);
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
  viceChancellorMessageUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const viceChancellorMessage =
        await ViceChancellorMessage.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (!viceChancellorMessage) throw new NotFoundError();
      return res.status(200).json(viceChancellorMessage);
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

    const viceChancellorMessage = await ViceChancellorMessage.findByIdAndDelete(
      id
    );

    if (!viceChancellorMessage) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as viceChancellorMessageRouter };
