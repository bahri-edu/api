import { body, check } from "express-validator";

export const uploadFileValidator = [
  body("title.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  body("title.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
  body("url")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("url  require"),
];

export const uploadFileUpdateValidator = [
  check("title.ar")
    .if(body("title.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  check("title.en")
    .if(body("title.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
  check("url")
    .if(body("url").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("url require"),
];
