import { Request, Response } from "express";
import express from "express";
import jsforce from "jsforce";
import pool from "../modules/pool";

const router: express.Router = express.Router();
//jsForce connection
const oauth2 = new jsforce.OAuth2({
  // you can change loginUrl to connect to sandbox or prerelease env.
  loginUrl: "https://na116.salesforce.com",
  //clientId and Secret will be provided when you create a new connected app in your SF developer account
  clientId: process.env.SALESFORCE_CLIENT_ID,
  clientSecret: process.env.SALESFORCE_SECRET_ID,
  //redirectUri : 'http://localhost:' + port +'/token'
  redirectUri: "http://localhost:3000/#/sflogin",
});
/**
 * GET route template
 */
router.get(
  "/auth/login",
  (req: Request, res: Response, next: express.NextFunction): void => {
    // Redirect to Salesforce login/authorization page
    console.log("is it working?");
    try {
      const redirectUrl = oauth2.getAuthorizationUrl({
        scope: "api id web refresh_token",
      });
      console.log(redirectUrl);
      res.redirect(redirectUrl);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

//router.get(
//  "/list",
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     const conn = new jsforce.Connection({ oauth2: oauth2 });
//     const code = req.query.code;
//     conn.authorize(code, function (err, userInfo) {
//       if (err) {
//         return console.error("This error is in the auth callback: " + err);
//       }
//       console.log("Access Token: " + conn.accessToken);
//       console.log("Instance URL: " + conn.instanceUrl);
//       console.log("refreshToken: " + conn.refreshToken);
//       console.log("User ID: " + userInfo.id);
//       console.log("Org ID: " + userInfo.organizationId);
//       req.session.accessToken = conn.accessToken;
//       req.session.instanceUrl = conn.instanceUrl;
//       req.session.refreshToken = conn.refreshToken;
//       var string = encodeURIComponent("true");
//     });
//   }
// );

export default router;
