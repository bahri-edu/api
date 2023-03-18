import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { Contact } from "./model";
import { contactUpdateValidator, contactValidator } from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const { limit, type } = req.query;

    const contac = await Contact.find({ ...(type && { type }) })

      .sort({ createdAt: -1 })
      .limit(+limit);

    res.status(200).json(contac);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const contac = await Contact.findById(id);

    if (!contac) throw new NotFoundError();

    res.status(200).json(contac);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  contactValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const contac = await Contact.build(req.body).save();
      return res.status(201).json(contac);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.put(
  "/:id",
  contactUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const contac = await Contact.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!contac) throw new NotFoundError();
      return res.status(201).json(contac);
    } catch (error) {
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const contac = await Contact.findByIdAndDelete(id);

    if (!contac) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as contactRouter };
