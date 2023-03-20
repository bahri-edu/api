import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export interface HistoricalBackgroundAttrs {
  title: Translate;
  description: Translate;
}

export interface HistoricalBackgroundDoc extends Document {
  title: Translate;
  description: Translate;
}

export interface HistoricalBackgroundModel
  extends Model<HistoricalBackgroundDoc> {
  build(attrs: HistoricalBackgroundAttrs): HistoricalBackgroundDoc;
}

const historicalBackgroundSchema = new Schema(
  {
    title: translateSchema,
    description: translateSchema,
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
