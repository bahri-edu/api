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

interface DeanshipDepartmentAttrs {
  title: Translate;
  icon?: string;
  url?: string;
  description?: Translate;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipDepartmentDoc extends Document {
  title: Translate;
  icon?: string;
  url?: string;
  description: Translate;
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipDepartmentModel extends Model<DeanshipDepartmentDoc> {
  build(attrs: DeanshipDepartmentAttrs): DeanshipDepartmentDoc;
}

const deanshipDepartmentSchema = new Schema(
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

deanshipDepartmentSchema.statics.build = (attrs: DeanshipDepartmentAttrs) => {
  return new DeanshipDepartment(attrs);
};

export const DeanshipDepartment = model<
  DeanshipDepartmentDoc,
  DeanshipDepartmentModel
>("DeanshipDepartment", deanshipDepartmentSchema);
