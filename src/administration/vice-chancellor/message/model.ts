import { Document, Model, model, Schema } from "mongoose";

export interface ViceChancellorMessageAttrs {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ViceChancellorMessageDoc extends Document {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ViceChancellorMessageModel
  extends Model<ViceChancellorMessageDoc> {
  build(attrs: ViceChancellorMessageAttrs): ViceChancellorMessageDoc;
}

const viceChancellorMessageSchema = new Schema(
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

viceChancellorMessageSchema.statics.build = (
  attrs: ViceChancellorMessageAttrs
) => {
  return new ViceChancellorMessage(attrs);
};

export const ViceChancellorMessage = model<
  ViceChancellorMessageDoc,
  ViceChancellorMessageModel
>("ViceChancellorMessage", viceChancellorMessageSchema);
