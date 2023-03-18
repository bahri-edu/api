import { body, check } from "express-validator";

export const relatedSiteValidator = [
  body("text.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english text require"),

  body("text.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic text require"),

  body("url")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("url require"),
];

export const relatedSiteUpdateValidator = [
  check("text.en")
    .if(body("text.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english text require"),
  check("text.ar")
    .if(body("text.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  text require"),

  check("url")
    .if(body("url").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("url require"),
];
