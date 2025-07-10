import express from "express"
import { testImportingTsFileExtension } from "./test.js";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  testImportingTsFileExtension();
  console.log("Server is running on port 3000");
});
