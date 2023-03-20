import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export enum FactType {
  STUDENT = "STUDENT",
  STAFF = "STAFF",
}

export interface FactAndFigureAttrs {
  count: number;
  description: Translate;
  type: FactType;
}

export interface FactAndFigureDoc extends Document {
  count: number;
  description: Translate;
  type: FactType;
}

export interface FactAndFigureModel extends Model<FactAndFigureDoc> {
  build(attrs: FactAndFigureAttrs): FactAndFigureDoc;
}

const factAndFigureSchema = new Schema(
  {
    count: {
      type: Number,
      require: true,
    },
    description: translateSchema,

    type: {
      type: String,
      default: FactType.STUDENT,
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

factAndFigureSchema.statics.build = (attrs: FactAndFigureAttrs) => {
  return new FactAndFigure(attrs);
};

export const FactAndFigure = model<FactAndFigureDoc, FactAndFigureModel>(
  "facts-and-figures",
  factAndFigureSchema
);
