import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

enum DeanshipTypeEnum {
  DEANSHIPOFSCIENTIFICRESEARCH = "deanship-of-scientific-research",
  DEANSHIPOFSTUDENTAFFAIRS = "deanship-of-student-affairs",
  DEANSHIPOFLIBRARIES = "deanship-of-libraries",
}

interface Social {
  icon: string;
  url: string;
}

export interface DeanshipAdministrationAttrs {
  possison: Translate;
  name: Translate;
  degree: Translate;
  email: string;
  phone: string;
  image?: string;
  socials?: Social[];
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipAdministrationDoc extends Document {
  possison: Translate;
  name: Translate;
  degree: Translate;
  email: string;
  phone: string;
  image?: string;
  socials?: Social[];
  deanshipType: DeanshipTypeEnum;
  seqNo: number;
}

export interface DeanshipAdministrationModel
  extends Model<DeanshipAdministrationDoc> {
  build(attrs: DeanshipAdministrationAttrs): DeanshipAdministrationDoc;
}

const socialSchema = new Schema({
  icon: {
    type: String,
  },
  url: {
    type: String,
  },
});

const deanshipAdministrationSchema = new Schema(
  {
    possison: translateSchema,
    name: translateSchema,
    degree: translateSchema,
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    socials: [socialSchema],
    deanshipType: {
      type: String,
      default: DeanshipTypeEnum.DEANSHIPOFLIBRARIES,
    },
    seqNo: {
      type: Number,
      require: true,
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

deanshipAdministrationSchema.statics.build = (
  attrs: DeanshipAdministrationAttrs
) => {
  return new DeanshipAdministration(attrs);
};

export const DeanshipAdministration = model<
  DeanshipAdministrationDoc,
  DeanshipAdministrationModel
>("DeanshipAdministration", deanshipAdministrationSchema);
