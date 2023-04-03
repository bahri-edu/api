import { Document, Model, model, Schema } from "mongoose";
import {
  stringToSlug,
  Translate,
  translateSchema,
  translateSchemaOption,
} from "../../helpers";

export interface Info {
  title: Translate;
  icon: string;
  description: Translate;
}

export interface Staff {
  name: Translate;
  position: Translate;
  email: string;
  phone: string;
}

export interface UniversityAdministrationAttrs {
  unit: Translate;
  introduction: Translate;
  info: Info[];
  staffTitle: Translate;
  staff: Staff[];
}

export interface UniversityAdministrationDoc extends Document {
  unit: Translate;
  introduction: Translate;
  slug: string;
  staffTitle: Translate;
  info: Info[];
  staff: Staff[];
}

export interface UniversityAdministrationModel
  extends Model<UniversityAdministrationDoc> {
  build(attrs: UniversityAdministrationAttrs): UniversityAdministrationDoc;
}

const infoSchema = new Schema({
  title: translateSchema,
  description: translateSchema,
  icon: {
    type: String,
  },
});

const staffSchema = new Schema({
  name: translateSchema,
  position: translateSchema,
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const universityAdministrationSchema = new Schema(
  {
    unit: translateSchema,
    introduction: translateSchema,
    slug: {
      type: String,
    },
    staffTitle: translateSchemaOption,
    info: [infoSchema],
    staff: [staffSchema],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.unit._id;
        delete ret.introduction._id;
      },
    },
    timestamps: true,
  }
);

universityAdministrationSchema.statics.build = (
  attrs: UniversityAdministrationAttrs
) => {
  return new UniversityAdministration(attrs);
};

universityAdministrationSchema.pre("findOneAndUpdate", async function () {
  const unit = this.get("unit");
  const slug = stringToSlug(unit.en);
  this.set("slug", slug);
});

universityAdministrationSchema.pre("save", async function () {
  if (this.isModified("unit")) {
    const unit = this.get("unit");
    const slug = stringToSlug(unit.en);
    this.set("slug", slug);
  }
});

export const UniversityAdministration = model<
  UniversityAdministrationDoc,
  UniversityAdministrationModel
>("UniversityAdministration", universityAdministrationSchema);
