import { body, check } from "express-validator";
import { isDate } from "util/types";

export const currentAdministrationValidator = [
  body("nameAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  body("nameEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),
  body("birthdate")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" birthdate require"),

  body("degreeAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  degree require"),

  body("degreeEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english  degree require"),
  body("email")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("email require")
    .isEmail()
    .withMessage("enter valid email"),

  body("phone")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("phone require"),

  body("positionAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arbic position require"),

  body("positionEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english position require"),

  body("qualificationAr")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  qualification require")
    .isArray()
    .withMessage("qualification must be array"),

  body("qualificationEn")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english qualification require")
    .isArray()
    .withMessage("qualification must be array"),

  // body("socials.icon")
  //   .notEmpty({
  //     ignore_whitespace: true,
  //   })
  //   .withMessage("socials require")
  //   .isArray()
  //   .withMessage("socials must be array"),

  body("type")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("type require"),
];

export const currentAdministrationUpdateValidator = [
  check("nameAr")
    .if(body("nameAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic name require"),
  check("nameEn")
    .if(body("nameEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english name require"),

  check("birthdate")
    .if(body("birthdate").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" birthdate require"),
  check("degreeAr")
    .if(body("degreeAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  degree require"),

  check("degreeEn")
    .if(body("degreeEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english  degree require"),

  check("email")
    .if(body("email").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("email require")
    .isEmail()
    .withMessage("enter valid email"),

  check("phone")
    .if(body("phone").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("phone require"),

  check("positionAr")
    .if(body("positionAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arbic position require"),

  check("positionEn")
    .if(body("positionEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english position require"),

  check("qualificationAr")
    .if(body("qualificationAr").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  qualification require")
    .isArray()
    .withMessage("qualification must be array"),

  check("qualificationEn")
    .if(body("qualificationEn").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english qualification require")
    .isArray()
    .withMessage("qualification must be array"),

  check("socials")
    .if(body("socials").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("socials require")
    .isArray()
    .withMessage("socials must be array"),

  check("type")
    .if(body("type").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("type require"),
];
