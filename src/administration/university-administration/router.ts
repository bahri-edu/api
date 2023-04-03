import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { UniversityAdministration } from "./model";
import {
  universityAdministrationUpdateValidator,
  universityAdministrationValidator,
} from "./validator";

const router: Router = Router();

/**
 * ---------------------------------------------------------
 * get all
 * ---------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    const universityAdministration = await UniversityAdministration.find();

    res.status(200).json(universityAdministration);
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

    const universityAdministration = await UniversityAdministration.findById(
      id
    );

    if (!universityAdministration) throw new NotFoundError();

    res.status(200).json(universityAdministration);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.get("/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const universityAdministration = await UniversityAdministration.findOne({
      slug,
    });

    if (!universityAdministration) throw new NotFoundError();

    res.status(200).json(universityAdministration);
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
  universityAdministrationValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const universityAdministration = await UniversityAdministration.build(
        req.body
      ).save();
      return res.status(201).json(universityAdministration);
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
  universityAdministrationUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const universityAdministration =
        await UniversityAdministration.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (!universityAdministration) throw new NotFoundError();
      return res.status(200).json(universityAdministration);
    } catch (error) {
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

    const universityAdministration =
      await UniversityAdministration.findByIdAndDelete(id);

    if (!universityAdministration) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

export { router as universityAdministrationRouter };
