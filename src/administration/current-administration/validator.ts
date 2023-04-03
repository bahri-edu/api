import { body, check } from "express-validator";
import { isDate } from "util/types";

export const currentAdministrationValidator = [
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
  body("birthdate")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" birthdate require"),

  body("degree.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  degree require"),

  body("degree.en")
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

  body("position.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arbic position require"),

  body("position.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english position require"),

  body("qualifications").isArray().withMessage("qualification must be array"),

  body("qualifications.*.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  qualification require"),

  body("qualifications.*.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english qualification require"),

  // body("socials.icon")
  //   .notEmpty({
  //     ignore_whitespace: true,
  //   })
  //   .withMessage("socials require")
  //   .isArray()
  //   .withMessage("socials must be array"),

  body("positionType")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("type require"),
];

export const currentAdministrationUpdateValidator = [
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

  check("birthdate")
    .if(body("birthdate").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage(" birthdate require"),
  check("degree.ar")
    .if(body("degree.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  degree require"),

  check("degree.en")
    .if(body("degree.en").exists())
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

  check("position.ar")
    .if(body("position.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arbic position require"),

  check("position.en")
    .if(body("position.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english position require"),

  check("qualifications.*.ar")
    .if(body("qualifications.*.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  qualification require"),

  check("qualifications.*.en")
    .if(body("qualifications.*.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english qualification require"),

  check("socials")
    .if(body("socials").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("socials require")
    .isArray()
    .withMessage("socials must be array"),

  check("positionType")
    .if(body("positionType").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("positionType require"),
];
