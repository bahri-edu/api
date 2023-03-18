import { Document, Model, model, Schema } from "mongoose";

export interface EServiceAttrs {
  titleAr: string;
  titleEn: string;
  icon: string;
  seqNo: number;
}

export interface EServiceDoc extends Document {
  titleAr: string;
  titleEn: string;
  icon: string;
  seqNo: number;
}

export interface EServiceModel extends Model<EServiceDoc> {
  build(attrs: EServiceAttrs): EServiceDoc;
}

const eServiceSchema = new Schema(
  {
    titleAr: {
      type: String,
      require: true,
    },
    titleEn: {
      type: String,
      require: true,
    },
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
