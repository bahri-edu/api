import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers";

export interface EServiceAttrs {
  title: Translate;
  icon: string;
  seqNo: number;
}

export interface EServiceDoc extends Document {
  title: Translate;
  icon: string;
  seqNo: number;
}

export interface EServiceModel extends Model<EServiceDoc> {
  build(attrs: EServiceAttrs): EServiceDoc;
}

const eServiceSchema = new Schema(
  {
    title: translateSchema,
    icon: {
      type: String,
      require: true,
    },
    seqNo: {
      type: Number,
      default: 999,
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

eServiceSchema.statics.build = (attrs: EServiceAttrs) => {
  return new EService(attrs);
};

export const EService = model<EServiceDoc, EServiceModel>(
  "EService",
  eServiceSchema
);
