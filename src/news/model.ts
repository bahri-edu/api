import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers";

export enum NewsEnum {
  ACADEMIC = "ACADEMIC",
  GENERAL = "GENERAL",
  CAREERS = "CAREERS",
}

export interface NewsAttrs {
  title: Translate;
  description: Translate;
  images?: string[];
  type: NewsEnum;
}

export interface NewsDoc extends Document {
  title: Translate;
  description: Translate;
  images?: string[];
  type: NewsEnum;
}

export interface NewsModel extends Model<NewsDoc> {
  build(attrs: NewsAttrs): NewsDoc;
}

const newsSchema = new Schema(
  {
    title: translateSchema,
    description: translateSchema,
    type: {
      type: String,
      default: NewsEnum.GENERAL,
    },
    images: [{ type: String, default: [] }],
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

newsSchema.statics.build = (attrs: NewsAttrs) => {
  return new News(attrs);
};

export const News = model<NewsDoc, NewsModel>("News", newsSchema);
