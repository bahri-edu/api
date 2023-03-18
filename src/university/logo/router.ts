import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { Logo } from "./model";
import { logoUpdateValidator, logoValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const logos = await Logo.find();

    res.status(200).json(logos);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const logo = await Logo.findById(id);

    if (!logo) throw new NotFoundError();

    res.status(200).json(logo);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  logoValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const logo = await Logo.build(req.body).save();
      return res.status(201).json(logo);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  logoUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const logo = await Logo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!logo) throw new NotFoundError();
      return res.status(200).json(logo);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const logo = await Logo.findByIdAndDelete(id);

    if (!logo) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as logoRouter };
