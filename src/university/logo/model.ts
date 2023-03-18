import { Document, Model, model, Schema } from "mongoose";

export interface LogoAttrs {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface LogoDoc extends Document {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface LogoModel extends Model<LogoDoc> {
  build(attrs: LogoAttrs): LogoDoc;
}

const logoSchema = new Schema(
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

logoSchema.statics.build = (attrs: LogoAttrs) => {
  return new Logo(attrs);
};

export const Logo = model<LogoDoc, LogoModel>("logo", logoSchema);
