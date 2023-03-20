import { body, check } from "express-validator";

export const factAndFigureValidator = [
  body("count")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" count require")
    .isNumeric()
    .withMessage(" count must be number"),
  body("description.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require")
    .isString()
    .withMessage("arabic description must be string"),
  body("description.en")
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

  check("description.ar")
    .if(body("description.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require"),
  check("description.en")
    .if(body("description.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require"),
];
