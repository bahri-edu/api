import { Document, Model, model, Schema } from "mongoose";
import {
  Translate,
  translateSchema,
  translateSchemaOption,
} from "../../helpers";

enum DeanshipTypeEnum {
  DEANSHIPOFSCIENTIFICRESEARCH = "deanship-of-scientific-research",
  DEANSHIPOFSTUDENTAFFAIRS = "deanship-of-student-affairs",
  DEANSHIPOFLIBRARIES = "deanship-of-libraries",
}

export interface DeanshipAttrs {
  title: Translate;
  descriptions: Translate[];
  icon?: string;
  image?: string;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipDoc extends Document {
  title: Translate;
  descriptions: Translate[];
  icon?: string;
  image?: string;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipModel extends Model<DeanshipDoc> {
  build(attrs: DeanshipAttrs): DeanshipDoc;
}

const deanshipSchema = new Schema(
  {
    title: translateSchema,
    descriptions: [translateSchemaOption],
    icon: {
      type: String,
    },
    image: {
      type: String,
    },
    deanshipType: {
      type: String,
      default: DeanshipTypeEnum.DEANSHIPOFSTUDENTAFFAIRS,
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

deanshipSchema.statics.build = (attrs: DeanshipAttrs) => {
  return new Deanship(attrs);
};

export const Deanship = model<DeanshipDoc, DeanshipModel>(
  "Deanship",
  deanshipSchema
);
