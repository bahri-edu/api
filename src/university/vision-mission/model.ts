import { Document, Model, model, Schema } from "mongoose";

export interface VisionMissionAttrs {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  seqNo: number;
}

export interface VisionMissionDoc extends Document {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  seqNo: number;
}

export interface VisionMissionModel extends Model<VisionMissionDoc> {
  build(attrs: VisionMissionAttrs): VisionMissionDoc;
}

const visionMissionSchema = new Schema(
  {
    titleAr: {
      type: String,
      require: true,
    },
    titleEn: {
      type: String,
      require: true,
    },
    descriptionAr: {
      type: String,
      require: true,
    },
    descriptionEn: {
      type: String,
      require: true,
    },
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
