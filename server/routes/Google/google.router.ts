import { Request, Response } from "express";
import express from "express";
import pool from "../../modules/pool";

const router: express.Router = express.Router();

// const { google } = require("googleapis");
// const token = require("../token.json");
// const credentials = require("../credentials.json");

router.post(
  "/user",
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(res);
    res.sendStatus(201);
  }
);

// async function main(YOUR_DOCUMENT_ID) {
//   const auth = await authorize();
//   const docs = google.docs({
//     version: "v1",
//     auth,
//   });
//   await docs.documents.create({
//     auth,
//     documentId: YOUR_DOCUMENT_ID,
//     requestBody: {
//       requests: [
//         {
//           insertText: {
//             location: {
//               index: 1,
//             },
//             text: "hello!\n",
//           },
//         },
//       ],
//     },
//   });
// }

// main("YOUR_DOCUMENT_ID");

module.exports = router;
