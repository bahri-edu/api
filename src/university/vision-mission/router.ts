import {
  InternalServerError,
  NotFoundError,
  validationMiddleware,
} from "@meemsd/common";
import { Router, Request, Response } from "express";
import { BulkArray, sortValidator } from "../../helpers";
import { VisionMission } from "./model";
import {
  visionMissionSortValidator,
  visionMissionUpdateValidator,
  visionMissionValidator,
} from "./validator";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const visionMissions = await VisionMission.find().sort({ seqNo: 1 });

    res.status(200).json(visionMissions);
  } catch (error) {
    throw new InternalServerError();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const visionMission = await VisionMission.findById(id);

    if (!visionMission) throw new NotFoundError();

    res.status(200).json(visionMission);
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/",
  visionMissionValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const visionMission = await VisionMission.build(req.body).save();
      return res.status(201).json(visionMission);
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

router.put(
  "/:id",
  visionMissionUpdateValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const visionMission = await VisionMission.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      if (!visionMission) throw new NotFoundError();
      return res.status(200).json(visionMission);
    } catch (error) {
      console.log(error);
      throw new InternalServerError(JSON.stringify(error));
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const visionMission = await VisionMission.findByIdAndDelete(id);

    if (!visionMission) throw new NotFoundError();

    res.status(200).json({ message: "dlete succssful" });
  } catch (error) {
    throw new NotFoundError();
  }
});

router.post(
  "/sort",
  sortValidator,
  validationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { sort } = req.body;

      const bulkArr = BulkArray(sort);

      VisionMission.bulkWrite(bulkArr);

      return res.status(200).json({ message: "sort successful" });
    } catch (error) {
      throw new InternalServerError();
    }
  }
);

export { router as visionMissionRouter };
