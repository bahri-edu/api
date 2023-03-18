import { Document, Model, model, Schema} from "mongoose"



export interface CollegeAttrs {
    nameAr: string
    nameEn: string
    code: string
    location?: string
}


export interface CollegeDoc extends Document {
    nameAr: string
    nameEn: string
    code: string
    location?: string
}

export interface CollegeModel extends Model<CollegeDoc> {
    build(attrs: CollegeAttrs): CollegeDoc
}

const collegeSchema = new Schema({
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

},
{
    toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
        },
      },
      timestamps: true
})

collegeSchema.statics.build = (attrs: CollegeAttrs) => {
    return new College(attrs)
}

export const College = model<CollegeDoc, CollegeModel>("College", collegeSchema)