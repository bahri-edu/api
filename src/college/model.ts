import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers";

export interface CollegeAttrs {
  name: Translate;
  code: string;
  location: Translate;
}

export interface CollegeDoc extends Document {
  name: Translate;
  code: string;
  location: Translate;
}

export interface CollegeModel extends Model<CollegeDoc> {
  build(attrs: CollegeAttrs): CollegeDoc;
}

const collegeSchema = new Schema(
  {
    name: translateSchema,
    location: translateSchema,
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
