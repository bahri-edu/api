import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export interface LogoAttrs {
  title: Translate;
  description: Translate;
  seqNo: number;
}

export interface LogoDoc extends Document {
  title: Translate;
  description: Translate;
  seqNo: number;
}

export interface LogoModel extends Model<LogoDoc> {
  build(attrs: LogoAttrs): LogoDoc;
}

const logoSchema = new Schema(
  {
    title: translateSchema,
    description: translateSchema,
    seqNo: {
      type: Number,
      default: 99,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.title._id;
        delete ret.description._id;
      },
    },
    timestamps: true,
  }
);

logoSchema.statics.build = (attrs: LogoAttrs) => {
  return new Logo(attrs);
};

export const Logo = model<LogoDoc, LogoModel>("logo", logoSchema);
