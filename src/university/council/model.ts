import { Document, Model, model, Schema } from "mongoose";

export interface CouncilAttrs {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export interface CouncilDoc extends Document {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export interface CouncilModel extends Model<CouncilDoc> {
  build(attrs: CouncilAttrs): CouncilDoc;
}

const councilSchema = new Schema(
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
    image: {
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

councilSchema.statics.build = (attrs: CouncilAttrs) => {
  return new Council(attrs);
};

export const Council = model<CouncilDoc, CouncilModel>(
  "Council",
  councilSchema
);
