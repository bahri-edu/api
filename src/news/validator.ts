import { body, check } from "express-validator";

export const newsValidator = [
  body("titleAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require")
    .isString()
    .withMessage("arabic title must be string"),
  body("titleEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require")
    .isString()
    .withMessage("english title must be string"),

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
    .withMessage("english description require")
    .isString()
    .withMessage("arabic description must be string"),
];

export const newsUpdateValidator = [
  check("titleAr")
    .if(body("titleAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require")
    .isString()
    .withMessage("arabic title must be string"),
  check("titleEn")
    .if(body("titleEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require")
    .isString()
    .withMessage("english title must be string"),

  check("descriptionAr")
    .if(body("descriptionAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require")
    .isString()
    .withMessage("arabic description must be string"),

  check("descriptionEn")
    .if(body("descriptionEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require")
    .isString()
    .withMessage("arabic description must be string"),
];
