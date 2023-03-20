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

  body("location.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic location require"),
  body("location.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english location require"),
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

  check("location.ar")
    .if(body("location.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic location require"),
  check("location.en")
    .if(body("location.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english location require"),

  check("code")
    .if(body("code").exists())
    .trim()
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("college code  require"),
];
