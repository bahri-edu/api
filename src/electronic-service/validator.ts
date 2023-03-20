import { body, check } from "express-validator";

export const eServiceValidator = [
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
  body("icon")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("icon require"),
];

export const eServiceUpdateValidator = [
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
  check("icon")
    .if(body("icon").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" icon require"),
];
