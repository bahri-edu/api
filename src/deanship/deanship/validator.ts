import { body, check } from "express-validator";

export const deanshipValidator = [
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
];

export const deanshipUpdateValidator = [
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
];
