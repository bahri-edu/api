import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../../helpers";

export interface ViceChancellorMessageAttrs {
  title: Translate;
  descriptions: Translate[];
}

export interface ViceChancellorMessageDoc extends Document {
  title: Translate;
  descriptions: Translate[];
}

export interface ViceChancellorMessageModel
  extends Model<ViceChancellorMessageDoc> {
  build(attrs: ViceChancellorMessageAttrs): ViceChancellorMessageDoc;
}

const viceChancellorMessageSchema = new Schema(
  {
    title: translateSchema,
    descriptions: [translateSchema],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.title._id;
        ret.descriptions.map((desc: any) => delete desc._id);
      },
    },
    timestamps: true,
  }
);

viceChancellorMessageSchema.statics.build = (
  attrs: ViceChancellorMessageAttrs
) => {
  return new ViceChancellorMessage(attrs);
};

export const ViceChancellorMessage = model<
  ViceChancellorMessageDoc,
  ViceChancellorMessageModel
>("ViceChancellorMessage", viceChancellorMessageSchema);
