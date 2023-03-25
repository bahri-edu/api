import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers";

export interface CollegeInfo {
  vision: Translate;
  academicQualification: Translate;
  bachelorProgram: Translate;
  registrationStep: Translate;
  collegeDepartment: Translate[];
}

export interface Counter {
  student: number;
  department: number;
  staff: number;
}

export interface CollegeAttrs {
  name: Translate;
  image: string;
  code: string;
  introduction: Translate;
  info: CollegeInfo;
  counter: Counter;
}

export interface CollegeDoc extends Document {
  name: Translate;
  image: string;
  code: string;
  introduction: Translate;
  info: CollegeInfo;
  counter: Counter;
}

export interface CollegeModel extends Model<CollegeDoc> {
  build(attrs: CollegeAttrs): CollegeDoc;
}

const collegeInfoSchema = new Schema({
  vision: translateSchema,
  academicQualification: translateSchema,
  bachelorProgram: translateSchema,
  registrationStep: translateSchema,
  collegeDepartment: [translateSchema],
});

const collegeCounterSchema = new Schema({
  student: {
    type: Number,
    default: 0,
  },
  department: {
    type: Number,
    default: 0,
  },
  staff: {
    type: Number,
    default: 0,
  },
});

const collegeSchema = new Schema(
  {
    name: translateSchema,
    introduction: translateSchema,
    info: collegeInfoSchema,
    counter: collegeCounterSchema,
    code: {
      type: String,
      require: true,
      unique: true,
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

collegeSchema.statics.build = (attrs: CollegeAttrs) => {
  return new College(attrs);
};

export const College = model<CollegeDoc, CollegeModel>(
  "College",
  collegeSchema
);
