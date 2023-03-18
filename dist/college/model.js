"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const mongoose_1 = require("mongoose");
const collegeSchema = new mongoose_1.Schema({
    nameAr: {
        type: String,
        require: true,
    },
    nameEn: {
        type: String,
        require: true,
    },
    code: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        type: String,
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
    timestamps: true
});
collegeSchema.statics.build = (attrs) => {
    return new exports.College(attrs);
};
exports.College = (0, mongoose_1.model)("College", collegeSchema);
//# sourceMappingURL=model.js.map