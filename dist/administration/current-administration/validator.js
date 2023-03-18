"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentAdministrationUpdateValidator = exports.currentAdministrationValidator = void 0;
const express_validator_1 = require("express-validator");
exports.currentAdministrationValidator = [
    (0, express_validator_1.body)("nameAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require"),
    (0, express_validator_1.body)("nameEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.body)("birthdate")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage(" birthdate require"),
    (0, express_validator_1.body)("degreeAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic  degree require"),
    (0, express_validator_1.body)("degreeEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english  degree require"),
    (0, express_validator_1.body)("email")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("email require")
        .isEmail()
        .withMessage("enter valid email"),
    (0, express_validator_1.body)("phone")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("phone require"),
    (0, express_validator_1.body)("positionAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arbic position require"),
    (0, express_validator_1.body)("positionEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english position require"),
    (0, express_validator_1.body)("qualificationAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic  qualification require")
        .isArray()
        .withMessage("qualification must be array"),
    (0, express_validator_1.body)("qualificationEn")
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
    (0, express_validator_1.body)("type")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("type require"),
];
exports.currentAdministrationUpdateValidator = [
    (0, express_validator_1.check)("nameAr")
        .if((0, express_validator_1.body)("nameAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require"),
    (0, express_validator_1.check)("nameEn")
        .if((0, express_validator_1.body)("nameEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.check)("birthdate")
        .if((0, express_validator_1.body)("birthdate").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage(" birthdate require"),
    (0, express_validator_1.check)("degreeAr")
        .if((0, express_validator_1.body)("degreeAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic  degree require"),
    (0, express_validator_1.check)("degreeEn")
        .if((0, express_validator_1.body)("degreeEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english  degree require"),
    (0, express_validator_1.check)("email")
        .if((0, express_validator_1.body)("email").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("email require")
        .isEmail()
        .withMessage("enter valid email"),
    (0, express_validator_1.check)("phone")
        .if((0, express_validator_1.body)("phone").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("phone require"),
    (0, express_validator_1.check)("positionAr")
        .if((0, express_validator_1.body)("positionAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arbic position require"),
    (0, express_validator_1.check)("positionEn")
        .if((0, express_validator_1.body)("positionEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english position require"),
    (0, express_validator_1.check)("qualificationAr")
        .if((0, express_validator_1.body)("qualificationAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic  qualification require")
        .isArray()
        .withMessage("qualification must be array"),
    (0, express_validator_1.check)("qualificationEn")
        .if((0, express_validator_1.body)("qualificationEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english qualification require")
        .isArray()
        .withMessage("qualification must be array"),
    (0, express_validator_1.check)("socials")
        .if((0, express_validator_1.body)("socials").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("socials require")
        .isArray()
        .withMessage("socials must be array"),
    (0, express_validator_1.check)("type")
        .if((0, express_validator_1.body)("type").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("type require"),
];
//# sourceMappingURL=validator.js.map