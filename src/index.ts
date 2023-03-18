import mongoose from "mongoose";
import { app, port } from "./app";
import "express-async-errors";

const dbUser = "yaseenomer";
const dbPass = "oqwB6M37QrPPLCsr";

// const mongoDbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.k23nnlx.mongodb.net/?retryWrites=true&w=majority`;
const mongoDbUrl = `mongodb+srv://${dbUser}:${dbPass}@yaseen-cluster.xotylcw.mongodb.net/?retryWrites=true&w=majority`;
(async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log("connecting success to mongo db");
    app.listen(port, () => {
      console.log(`category-api listening at http://localhost:${port}`);
    });
  } catch (error: any) {
    throw new Error(error);
  }
})();
