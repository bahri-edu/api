import { body } from "express-validator";
import mongoose from "mongoose";

export interface SortDocData {
  id: string;
  seqNo: number;
}

export interface Translate {
  en: string;
  ar: string;
}

export const translateSchema = new mongoose.Schema({
  en: {
    type: String,
    require: true,
  },
  ar: {
    type: String,
    require: true,
  },
});

export function BulkArray(sorts: SortDocData[]) {
  let bulkArr = [];

  for (const i of sorts) {
    bulkArr.push({
      updateOne: {
        filter: { _id: new mongoose.Types.ObjectId(i.id) },
        update: { seqNo: i.seqNo },
      },
    });
  }

  return bulkArr;
}

export const sortValidator = [
  body("sort").isArray().withMessage("sort must be array"),
  body("sort.*.id").notEmpty().withMessage("sort id require"),
  body("sort.*.seqNo").notEmpty().withMessage("sort seqNo require"),
];
