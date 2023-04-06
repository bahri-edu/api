import { body, check } from "express-validator";

export const councilValidator = [
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
  body("descriptions").isArray().withMessage("descriptions must be arry"),

  body("descriptions.*.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic description require"),

  body("descriptions.*.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english description require"),
];

export const councilUpdateValidator = [
  check("title.ar")
    .if(body("title.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic title require"),
  //uuuu
  check("title.en")
    .if(body("title.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english title require"),
  check("councilType")
    .if(body("councilType").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("councilType require"),

  check("descriptions")
    .if(body("descriptions").exists())
    .isArray()
    .withMessage("descriptions must be array"),

  check("descriptions.*.ar")
    .if(body("descriptions.*.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("descriptions must be array"),

  check("descriptions.*.en")
    .if(body("descriptions.*.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english descriptions require"),
];
