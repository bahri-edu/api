import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../helpers/db.helper";

interface Social {
  icon: string;
  url: string;
}

export interface ContactAttrs {
  location: Translate;
  phone: string[];
  email: string;
  fax: string;
  socials: Social[];
}

export interface ContactDoc extends Document {
  location: Translate;
  phone: string[];
  email: string;
  fax: string;
  socials: Social[];
}

export interface ContactModel extends Model<ContactDoc> {
  build(attrs: ContactAttrs): ContactDoc;
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

const contactSchema = new Schema(
  {
    location: translateSchema,
    phone: [
      {
        type: String,
        default: [],
      },
    ],
    email: {
      type: String,
      require: true,
    },
    fax: {
      type: String,
      require: true,
    },
    socials: [socialSchema],
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

contactSchema.statics.build = (attrs: ContactAttrs) => {
  return new Contact(attrs);
};

export const Contact = model<ContactDoc, ContactModel>(
  "Contact",
  contactSchema
);
