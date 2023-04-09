import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema, translateSchemaOption } from "../helpers";

enum DeanshipTypeEnum {
  DEANSHIPOFSCIENTIFICRESEARCH = "deanship-of-scientific-research",
  DEANSHIPOFSTUDENTAFFAIRS = "deanship-of-student-affairs",
  DEANSHIPOFLIBRARIES = "deanship-of-libraries",
}

interface Social {
  icon: string;
  url: string;
}

interface StaffAttrs {
  possison: Translate;
  name: Translate;
  awardsAndgrants: Translate[];
  educationAndExperience: Translate[];
  internationalConferencesAndCourses: Translate[];
  workshops: Translate[];
  qualifications: Translate[];
  socials: Social[];
  phone: string;
  email: string;
  collegeId: string;
}

export interface StaffDoc extends Document {
  possison: Translate;
  name: Translate;
  awardsAndgrants: Translate[];
  educationAndExperience: Translate[];
  internationalConferencesAndCourses: Translate[];
  workshops: Translate[];
  qualifications: Translate[];
  socials: Social[];
  phone: string;
  email: string;
  collegeId: string;
}

export interface StaffModel extends Model<StaffDoc> {
  build(attrs: StaffAttrs): StaffDoc;
}
const socialSchema = new Schema({
  icon: {
    type: String,
  },
  url: {
    type: String,
  },
});

const staffSchema = new Schema(
  {
    possison: translateSchema,
    name: translateSchema,
    awardsAndgrants: [translateSchema],
    educationAndExperience: [translateSchema],
    internationalConferencesAndCourses: [translateSchema],
    workshops: [translateSchema],
    qualifications: [translateSchema],
    socials: [socialSchema],
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    collegeId: {
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

staffSchema.statics.build = (attrs: StaffAttrs) => {
  return new Staff(attrs);
};

export const Staff = model<StaffDoc, StaffModel>("Staff", staffSchema);
