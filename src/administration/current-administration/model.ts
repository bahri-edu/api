import { Document, Model, model, Schema } from "mongoose";

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
  nameAr: string;
  nameEn: string;
  birthdate: string;
  degreeAr: string;
  degreeEn: string;
  email: string;
  phone: string;
  positionAr: string;
  positionEn: string;
  qualificationAr: string[];
  qualificationEn: string[];
  socials: Social[];
  positionType: CurrentPositionTypeEnum;
}

export interface CurrentAdministrationDoc extends Document {
  nameAr: string;
  nameEn: string;
  birthdate: string;
  degreeAr: string;
  degreeEn: string;
  email: string;
  phone: string;
  positionAr: string;
  positionEn: string;
  qualificationAr: string[];
  qualificationEn: string[];
  socials: string[];
  positionType: CurrentPositionTypeEnum;
}

export interface CurrentAdministrationModel
  extends Model<CurrentAdministrationDoc> {
  build(attrs: CurrentAdministrationAttrs): CurrentAdministrationDoc;
}

const currentAdministrationSchema = new Schema(
  {
    nameAr: {
      type: String,
      require: true,
    },
    nameEn: {
      type: String,
      require: true,
    },
    birthdate: {
      type: String,
      require: true,
    },
    degreeAr: {
      type: String,
      require: true,
    },
    degreeEn: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    positionAr: {
      type: String,
      require: true,
    },
    positionEn: {
      type: String,
      require: true,
    },
    qualificationAr: [
      {
        type: String,
        require: true,
      },
    ],

    qualificationEn: [
      {
        type: String,
        require: true,
      },
    ],
    socials: [
      {
        type: String,
        require: true,
      },
    ],
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
