import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { CurrentAdministration } from "./model";
import {
  currentAdministrationUpdateValidator,
  currentAdministrationValidator,
} from "./validator";

const router: Router = Router();

/**
 * ---------------------------------------------------------
 * get all
 * ---------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    const currentAdministration = await CurrentAdministration.find();

    res.status(200).json(currentAdministration);
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

    const currentAdministration = await CurrentAdministration.findById(id);

    if (!currentAdministration) throw new NotFoundError();

    res.status(200).json(currentAdministration);
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
  currentAdministrationValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const currentAdministration = await CurrentAdministration.build(
        req.body
      ).save();
      return res.status(201).json(currentAdministration);
    } catch (error) {
      console.log(error);
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
  currentAdministrationUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const currentAdministration =
        await CurrentAdministration.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (!currentAdministration) throw new NotFoundError();
      return res.status(200).json(currentAdministration);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

/**
 * ---------------------------------------------------------
 * delete one
 * ---------------------------------------------------------
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const currentAdministration = await CurrentAdministration.findByIdAndDelete(
      id
    );

    if (!currentAdministration) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as currentAdministrationRouter };
