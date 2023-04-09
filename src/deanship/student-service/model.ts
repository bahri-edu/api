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

interface DeanshipStudentServiceAttrs {
  title: Translate;
  icon?: string;
  url?: string;
  description?: Translate;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipStudentServiceDoc extends Document {
  title: Translate;
  icon?: string;
  url?: string;
  description: Translate;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipStudentServiceModel
  extends Model<DeanshipStudentServiceDoc> {
  build(attrs: DeanshipStudentServiceAttrs): DeanshipStudentServiceDoc;
}

const deanshipStudentServiceSchema = new Schema(
  {
    title: translateSchema,
    description: translateSchemaOption,
    icon: {
      type: String,
    },
    url: {
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

deanshipStudentServiceSchema.statics.build = (
  attrs: DeanshipStudentServiceAttrs
) => {
  return new DeanshipStudentService(attrs);
};

export const DeanshipStudentService = model<
  DeanshipStudentServiceDoc,
  DeanshipStudentServiceModel
>("DeanshipStudentService", deanshipStudentServiceSchema);
