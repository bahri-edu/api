import { body, check } from "express-validator";

export const factAndFigureValidator = [
  body("count")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" count require")
    .isNumeric()
    .withMessage(" count must be number"),
  body("descriptionAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require")
    .isString()
    .withMessage("arabic description must be string"),
  body("descriptionEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require"),
];

export const factAndFigureUpdateValidator = [
  check("count")
    .if(body("count").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("count require")
    .isNumeric()
    .withMessage("count must be number"),

  check("descriptionAr")
    .if(body("descriptionAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require"),
  check("descriptionEn")
    .if(body("descriptionEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require"),
];
