import { body, check } from "express-validator";

export const eServiceValidator = [
  body("titleAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require"),
  body("titleEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require"),
  body("icon")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("icon require"),
];

export const eServiceUpdateValidator = [
  check("titleAr")
    .if(body("titleAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require"),
  check("titleEn")
    .if(body("titleEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require"),
  check("icon")
    .if(body("icon").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" icon require"),
];
