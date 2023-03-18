import { Document, Model, model, Schema } from "mongoose";

export interface HistoricalBackgroundAttrs {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface HistoricalBackgroundDoc extends Document {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface HistoricalBackgroundModel
  extends Model<HistoricalBackgroundDoc> {
  build(attrs: HistoricalBackgroundAttrs): HistoricalBackgroundDoc;
}

const historicalBackgroundSchema = new Schema(
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

historicalBackgroundSchema.statics.build = (
  attrs: HistoricalBackgroundAttrs
) => {
  return new HistoricalBackground(attrs);
};

export const HistoricalBackground = model<
  HistoricalBackgroundDoc,
  HistoricalBackgroundModel
>("historical-background", historicalBackgroundSchema);
