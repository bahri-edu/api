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

export const translateSchemaOption = new mongoose.Schema({
  en: {
    type: String,
  },
  ar: {
    type: String,
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

export function stringToSlug(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}
