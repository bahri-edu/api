import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers/db.helper";

export interface RelatedSiteAttrs {
  text: Translate;
  url: string;
  seqNo: number;
}

export interface RelatedSiteDoc extends Document {
  text: Translate;
  url: string;
  seqNo: number;
}

export interface RelatedSiteModel extends Model<RelatedSiteDoc> {
  build(attrs: RelatedSiteAttrs): RelatedSiteDoc;
}

const relatedSiteSchema = new Schema(
  {
    text: translateSchema,
    url: {
      type: String,
      required: true,
    },
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
      },
    },
    timestamps: true,
  }
);

relatedSiteSchema.statics.build = (attrs: RelatedSiteAttrs) => {
  return new RelatedSite(attrs);
};

export const RelatedSite = model<RelatedSiteDoc, RelatedSiteModel>(
  "RelatedSite",
  relatedSiteSchema
);
