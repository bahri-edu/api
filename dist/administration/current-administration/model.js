"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAdministration = exports.CurrentPositionTypeEnum = void 0;
const mongoose_1 = require("mongoose");
var CurrentPositionTypeEnum;
(function (CurrentPositionTypeEnum) {
    CurrentPositionTypeEnum[CurrentPositionTypeEnum["VICE_CHANCELLOR"] = 0] = "VICE_CHANCELLOR";
    CurrentPositionTypeEnum[CurrentPositionTypeEnum["DEPUTY_VICE_CHANCELLOR"] = 1] = "DEPUTY_VICE_CHANCELLOR";
    CurrentPositionTypeEnum[CurrentPositionTypeEnum["PRINCIPAL"] = 2] = "PRINCIPAL";
    CurrentPositionTypeEnum[CurrentPositionTypeEnum["SECRETARY_OF_SCIENTIFIC_AFFAIRS"] = 3] = "SECRETARY_OF_SCIENTIFIC_AFFAIRS";
})(CurrentPositionTypeEnum = exports.CurrentPositionTypeEnum || (exports.CurrentPositionTypeEnum = {}));
const currentAdministrationSchema = new mongoose_1.Schema({
    nameAr: {
        type: String,
        require: true,
    },
    nameEn: {
        type: String,
        require: true,
    },
    birthdate: {
        type: String,
        require: true,
    },
    degreeAr: {
        type: String,
        require: true,
    },
    degreeEn: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    positionAr: {
        type: String,
        require: true,
    },
    positionEn: {
        type: String,
        require: true,
    },
    qualificationAr: [
        {
            type: String,
            require: true,
        },
    ],
    qualificationEn: [
        {
            type: String,
            require: true,
        },
    ],
    socials: [
        {
            type: String,
            require: true,
        },
    ],
    positionType: {
        type: Number,
        require: true,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
    timestamps: true,
});
currentAdministrationSchema.statics.build = (attrs) => {
    return new exports.CurrentAdministration(attrs);
};
exports.CurrentAdministration = (0, mongoose_1.model)("CurrentAdministration", currentAdministrationSchema);
//# sourceMappingURL=model.js.map