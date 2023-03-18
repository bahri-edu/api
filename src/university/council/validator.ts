import { body, check } from "express-validator";

export const councilValidator = [
  body("titleAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require")
    .isString()
    .withMessage("arabic name must be string"),
  body("titleEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
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

export const councilUpdateValidator = [
  check("titleAr")
    .if(body("titleAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  check("titleEn")
    .if(body("titleEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
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
