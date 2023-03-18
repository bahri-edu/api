"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EService = void 0;
const mongoose_1 = require("mongoose");
const eServiceSchema = new mongoose_1.Schema({
    titleAr: {
        type: String,
        require: true,
    },
    titleEn: {
        type: String,
        require: true,
    },
    icon: {
        type: String,
        require: true,
    },
    seqNo: {
        type: Number,
        default: 999,
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
eServiceSchema.statics.build = (attrs) => {
    return new exports.EService(attrs);
};
exports.EService = (0, mongoose_1.model)("EService", eServiceSchema);
//# sourceMappingURL=model.js.map