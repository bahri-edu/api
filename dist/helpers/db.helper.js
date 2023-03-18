"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkArray = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function BulkArray(sorts) {
    let bulkArr = [];
    for (const i of sorts) {
        bulkArr.push({
            updateOne: {
                filter: { _id: new mongoose_1.default.Types.ObjectId(i.id) },
                update: { seqNo: i.seqNo },
            },
        });
    }
    return bulkArr;
}
exports.BulkArray = BulkArray;
//# sourceMappingURL=db.helper.js.map