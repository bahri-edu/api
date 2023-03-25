import { body, check } from "express-validator";

export const collegeValidator = [
  body("name.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  body("name.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),

  body("introduction.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic introduction require"),
  body("introduction.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english introduction require"),
  body("code")
    .trim()
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("college code  require"),
];

export const collegeUpdateValidator = [
  check("name.ar")
    .if(body("name.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  check("name.en")
    .if(body("name.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),

  check("introduction.ar")
    .if(body("introduction.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic introduction require"),
  check("introduction.en")
    .if(body("introduction.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english introduction require"),

  check("code")
    .if(body("code").exists())
    .trim()
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("college code  require"),
];
