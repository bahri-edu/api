import { body, check } from "express-validator";

export const newsValidator = [
  body("title.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require"),
  body("title.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require"),

  body("description.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require"),
  body("description.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require"),
];

export const newsUpdateValidator = [
  check("title.ar")
    .if(body("title.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require"),
  check("title.en")
    .if(body("title.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require"),

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
