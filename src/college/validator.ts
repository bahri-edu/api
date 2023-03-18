import { body, check } from "express-validator";

export const collegeValidator = [
  body("nameAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require")
    .isString()
    .withMessage("arabic name must be string"),
  body("nameEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
  body("code")
    .trim()
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("college code  require")
    .isString()
    .withMessage("college code  must be string"),
];

export const collegeUpdateValidator = [
  check("nameAr")
    .if(body("nameAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require")
    .isString()
    .withMessage("arabic name must be string"),
  check("nameEn")
    .if(body("nameEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),

  check("code")
    .if(body("code").exists())
    .trim()
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("college code  require")
    .isString()
    .withMessage("college code  must be string"),
];
