"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collegeUpdateValidator = exports.collegeValidator = void 0;
const express_validator_1 = require("express-validator");
exports.collegeValidator = [
    (0, express_validator_1.body)("nameAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require")
        .isString()
        .withMessage("arabic name must be string"),
    (0, express_validator_1.body)("nameEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.body)("code")
        .trim()
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("college code  require")
        .isString()
        .withMessage("college code  must be string"),
];
exports.collegeUpdateValidator = [
    (0, express_validator_1.check)("nameAr")
        .if((0, express_validator_1.body)("nameAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require")
        .isString()
        .withMessage("arabic name must be string"),
    (0, express_validator_1.check)("nameEn")
        .if((0, express_validator_1.body)("nameEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.check)("code")
        .if((0, express_validator_1.body)("code").exists())
        .trim()
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("college code  require")
        .isString()
        .withMessage("college code  must be string"),
];
//# sourceMappingURL=validator.js.map