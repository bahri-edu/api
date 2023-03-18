import { body, check } from "express-validator";

export const contactValidator = [
  body("location.en")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english location require"),

  body("location.ar")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic location require"),

  body("email")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("email require")
    .isEmail()
    .withMessage("Enter valid email"),

  body("fax")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("fax require"),

  body("phone")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("phone require")
    .isArray()
    .withMessage("phone must be array"),

  body("socials")
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("socials require")
    .isArray()
    .withMessage("socials must be array"),
];

export const contactUpdateValidator = [
  check("location.en")
    .if(body("location.en").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("english location require"),
  check("location.ar")
    .if(body("location.ar").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("arabic  location require"),

  check("email")
    .if(body("email").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("email require")
    .isEmail()
    .withMessage("email must be valid email"),

  check("fax")
    .if(body("fax").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("fax require"),

  check("phone")
    .if(body("phone").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("phone require")
    .isArray()
    .withMessage("phone must be array"),

  check("socials")
    .if(body("socials").exists())
    .notEmpty({
      ignore_whitespace: true,
    })
    .withMessage("socials require")
    .isArray()
    .withMessage("socials must be array"),
];
