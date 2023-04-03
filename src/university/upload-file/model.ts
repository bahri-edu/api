import { Document, Model, model, Schema } from "mongoose";
import { Translate, translateSchema } from "../../helpers";

export interface UploadFileAttrs {
  title: Translate;
  url: string;
  seqNo: number;
}

export interface UploadFileDoc extends Document {
  title: Translate;
  url: string;
  seqNo: number;
}

export interface UploadFileModel extends Model<UploadFileDoc> {
  build(attrs: UploadFileAttrs): UploadFileDoc;
}

const uploadFileSchema = new Schema(
  {
    title: translateSchema,
    url: {
      type: String,
      require: true,
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
        delete ret.title._id;
      },
    },
    timestamps: true,
  }
);

uploadFileSchema.statics.build = (attrs: UploadFileAttrs) => {
  return new UploadFile(attrs);
};

export const UploadFile = model<UploadFileDoc, UploadFileModel>(
  "UploadFile",
  uploadFileSchema
);
