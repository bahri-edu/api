import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export interface VisionMissionAttrs {
  title: Translate;
  description: Translate;
  icon: string;
  seqNo: number;
}

export interface VisionMissionDoc extends Document {
  title: Translate;
  description: Translate;
  icon: string;
  seqNo: number;
}

export interface VisionMissionModel extends Model<VisionMissionDoc> {
  build(attrs: VisionMissionAttrs): VisionMissionDoc;
}

const visionMissionSchema = new Schema(
  {
    title: translateSchema,
    description: translateSchema,
    icon: {
      type: String,
      require: true,
    },
    seqNo: {
      type: Number,
      require: true,
      default: 99,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

visionMissionSchema.statics.build = (attrs: VisionMissionAttrs) => {
  return new VisionMission(attrs);
};

export const VisionMission = model<VisionMissionDoc, VisionMissionModel>(
  "vision-mission",
  visionMissionSchema
);
