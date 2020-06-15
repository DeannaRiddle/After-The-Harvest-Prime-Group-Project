import { Request, Response } from "express";
import express from "express";
import pool from "../../modules/pool";
import { mainModule } from "process";
// import { authorize } from "passport";
const { google } = require("googleapis");
import axios from "axios";

const router: express.Router = express.Router();

//take req.body and store it -- authentication credentials will live here
//telling TypeScript that the type within the object is any so that there aren't too strict of parameters
let loginInfo: any = {};
let client_id: string = "";
let client_secret: any = "";
let redirect_uris: string[] = ["http://localhost:3000"];
const document_id: string = "13CagadhLfQFDeU5NfcuUlr2qtid7BSysUr4nHXkvWac";

router.post(
  "/user",
  (req: Request, res: Response, next: express.NextFunction): void => {
    loginInfo = req.body;
    client_id = loginInfo.googleId;
    client_secret = process.env.REACT_APP_CLIENT_SECRET;
    console.log("login", loginInfo);
    console.log("clientId", client_id);
    console.log("clientSecret", client_secret);
    //here, googleUser = req.body (coming in from saga), storing on object
    res.sendStatus(201);
  }
);

//make a second POST route for document creation, call to it from the front end (onClick function)

router.post(
  "/docs",
  (req: Request, res: Response, next: express.NextFunction): void => {
    // const { client_secret, client_id, redirect_uris } = credentials.installed;
    // function authorize() {
    //   const oAuth2Client = new google.auth.OAuth2(
    //     client_id,
    //     client_secret,
    //     redirect_uris[0]
    //   );

    //   return oAuth2Client;
    // }
    // async function main(document_id) {
    //   const auth = await authorize();
    //   const docs = google.docs({ version: "v1", auth });
    //   await docs.document.create({
    //     title: "Gleaning_Report",
    //   });
    // }
    // main();
    const content: {} = {
      title: "Gleaning Report 3",
      // body: {
      //   content: [
      //     {
      //       paragraph: {
      //         elements: [
      //           {
      //             textRun: {
      //               content: "gleaning report is here",
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // },
    };

    axios
      .post("https://docs.googleapis.com/v1/documents", content, {
        headers: {
          Authorization: `${loginInfo.wc.token_type} ${loginInfo.wc.access_token}`,
        },
      })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  }
);

module.exports = router;
