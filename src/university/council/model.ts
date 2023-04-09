import mongoose, { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export enum CouncilTypeEnum {
  UNIVERSITYCOUNCIL = "university-council",
  DEANSCOUNCIL = "deans-council",
  PROFESSORSCOUNCIL = "professors-council",
}

interface CouncilDescriptionList {
  title: Translate;
  description: Translate;
}
interface CouncilDescription {
  ar: string;
  en: string;
  lists?: CouncilDescriptionList[];
}

interface CouncilAttrs {
  title: Translate;
  descriptions: CouncilDescription[];
  councilType: CouncilTypeEnum;
  image?: string;
}

export interface CouncilDoc extends Document {
  title: Translate;
  descriptions: CouncilDescription[];
  image?: string;
}

export interface CouncilModel extends Model<CouncilDoc> {
  build(attrs: CouncilAttrs): CouncilDoc;
}

const councilDescriptionListSchema = new Schema({
  title: translateSchema,
  description: translateSchema,
});

const councilDescriptionSchema = new Schema({
  ar: {
    type: String,
    require: true,
  },

  en: {
    type: String,
    require: true,
  },
  lists: [councilDescriptionListSchema],
});

const councilSchema = new Schema(
  {
    title: translateSchema,
    descriptions: [councilDescriptionSchema],
    councilType: {
      type: String,
      default: CouncilTypeEnum.UNIVERSITYCOUNCIL,
    },
    image: {
      type: String,
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

mongoose.set("strictQuery", false);

export const Council = model<CouncilDoc, CouncilModel>(
  "Council",
  councilSchema
);
