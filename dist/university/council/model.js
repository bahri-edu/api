"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Council = void 0;
const mongoose_1 = require("mongoose");
const councilSchema = new mongoose_1.Schema({
    titleAr: {
        type: String,
        require: true,
    },
    titleEn: {
        type: String,
        require: true,
    },
    descriptionAr: {
        type: String,
        require: true,
    },
    descriptionEn: {
        type: String,
        require: true,
    },
    image: {
        type: String,
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
councilSchema.statics.build = (attrs) => {
    return new exports.Council(attrs);
};
exports.Council = (0, mongoose_1.model)("Council", councilSchema);
//# sourceMappingURL=model.js.map