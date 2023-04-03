import { body, check } from "express-validator";

export const universityAdministrationValidator = [
  body("unit.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic unit require"),
  body("unit.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english unit require"),

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
];

export const universityAdministrationUpdateValidator = [
  check("unit.ar")
    .if(body("unit.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic unit require"),
  check("unit.en")
    .if(body("unit.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english unit require"),

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
];
