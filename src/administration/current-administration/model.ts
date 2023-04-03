import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export enum CurrentPositionTypeEnum {
  VICE_CHANCELLOR,
  DEPUTY_VICE_CHANCELLOR,
  PRINCIPAL,
  SECRETARY_OF_SCIENTIFIC_AFFAIRS,
}

type Social = {
  icon: string;
  url: string;
};

export interface CurrentAdministrationAttrs {
  name: Translate;
  imageUrl: string;
  birthdate: string;
  degree: Translate;
  email: string;
  phone: string;
  position: Translate;
  qualifications: Translate[];
  socials: Social[];
  positionType: CurrentPositionTypeEnum;
}

export interface CurrentAdministrationDoc extends Document {
  name: Translate;
  imageUrl: string;
  birthdate: string;
  degree: Translate;
  email: string;
  phone: string;
  position: Translate;
  qualifications: Translate[];
  socials: Social[];
  positionType: CurrentPositionTypeEnum;
}

export interface CurrentAdministrationModel
  extends Model<CurrentAdministrationDoc> {
  build(attrs: CurrentAdministrationAttrs): CurrentAdministrationDoc;
}

const socialSchema = new Schema({
  icon: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

const currentAdministrationSchema = new Schema(
  {
    name: translateSchema,
    birthdate: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    degree: translateSchema,
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    position: translateSchema,
    qualifications: [translateSchema],
    socials: [socialSchema],
    positionType: {
      type: Number,
      require: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.name._id;
        delete ret.degree._id;
        delete ret.position._id;
        ret.qualifications.map((qual: any) => delete qual._id);
        ret.socials.map((qual: any) => delete qual._id);
      },
    },
    timestamps: true,
  }
);

currentAdministrationSchema.statics.build = (
  attrs: CurrentAdministrationAttrs
) => {
  return new CurrentAdministration(attrs);
};

export const CurrentAdministration = model<
  CurrentAdministrationDoc,
  CurrentAdministrationModel
>("CurrentAdministration", currentAdministrationSchema);
