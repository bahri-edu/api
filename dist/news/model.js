"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = exports.NewsEnum = void 0;
const mongoose_1 = require("mongoose");
var NewsEnum;
(function (NewsEnum) {
    NewsEnum["ACADEMIC"] = "ACADEMIC";
    NewsEnum["GENERAL"] = "GENERAL";
})(NewsEnum = exports.NewsEnum || (exports.NewsEnum = {}));
const newsSchema = new mongoose_1.Schema({
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
    type: {
        type: String,
        default: NewsEnum.GENERAL,
    },
    images: [{ type: String, default: [] }],
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
newsSchema.statics.build = (attrs) => {
    return new exports.News(attrs);
};
exports.News = (0, mongoose_1.model)("News", newsSchema);
//# sourceMappingURL=model.js.map