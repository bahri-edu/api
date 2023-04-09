import { body, check } from "express-validator";

export const deanshipAdministrationValidator = [
  body("possison.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic possison require"),

  body("possison.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english possison require"),

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
];

export const deanshipAdministrationUpdateValidator = [
  check("possison.ar")
    .if(body("possison.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic possison require"),
  check("possison.en")
    .if(body("possison.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english possison require"),

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
];
