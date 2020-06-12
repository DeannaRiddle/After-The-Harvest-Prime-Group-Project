import { Request, Response } from "express";
import express from "express";
import jsforce from "jsforce";
import pool from "../modules/pool";

const router: express.Router = express.Router();
//jsForce connection
const conn = new jsforce.Connection({
  loginUrl: "https://na116.salesforce.com",
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});

// const oauth2 = new jsforce.OAuth2({
//   // you can change loginUrl to connect to sandbox or prerelease env.
//   //clientId and Secret will be provided when you create a new connected app in your SF developer account
//   clientId: process.env.SALESFORCE_CLIENT_ID,
//   clientSecret: process.env.SALESFORCE_SECRET_ID,
//   //redirectUri : 'http://localhost:' + port +'/token'
//   redirectUri: "http://localhost:3000/#/sflogin",
// });
//get route for salesforce user login
console.log("Username?", process.env.SALESFORCE_USERNAME);
console.log("PASSWORD?", process.env.SALESFORCE_PASSWORD);
router.get(
  "/auth/login",
  (req: Request, res: Response, next: express.NextFunction): void => {
    // Redirect to Salesforce login/authorization page
    console.log("is it working?");
    const username = process.env.SALESFORCE_USERNAME || "";
    const password = process.env.SALESFORCE_PASSWORD || "";
    const token = process.env.SALESFORCE_TOKEN || "";
    const passToken = password + token;
    conn.login(username, passToken, function (err, userInfo) {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      }

      // Now you can get the access token and instance URL information.
      // Save them to establish connection next time.
      console.log(conn.accessToken);
      console.log(conn.instanceUrl);
      // logged in user property
      console.log("User ID: " + userInfo.id);
      console.log("Org ID: " + userInfo.organizationId);
      res.send({ userInfo });
      // ...
    });
    // try {
    //   const redirectUrl = oauth2.getAuthorizationUrl({
    //     scope: "api id web refresh_token",
    //   });
    //   console.log(redirectUrl);
    //   res.redirect(redirectUrl);
    // } catch (err) {
    //   console.log(err);
    //   res.sendStatus(500);
    // }
  }
);

/**
 * GET route template
 */
router.get(
  "/",
  (req: Request, res: Response, next: express.NextFunction): void => {
    const records: string[] = [];
    conn
      .query(
        "SELECT GW_Volunteers__Start_Date_Time__c, GW_Volunteers__System_Note__c FROM GW_Volunteers__Volunteer_Shift__c"
      )
      .on("record", function (record) {
        console.log("------------------------\n");
        console.log(record);
        records.push(record);
      })
      .on("end", function () {
        console.log("Description :");
      })
      .on("error", function (err) {
        console.error(err);
      })
      .run({ autoFetch: true, maxFetch: 20 });
    res.send(records);
  }
);

/**
 * POST route template
 */
router.post(
  "/",
  (req: Request, res: Response, next: express.NextFunction): void => {
    res.sendStatus(201);
  }
);

// module.exports = router;
//get route for test data for gleaning items list
router.get(
  "/gleaning/list",
  (req: Request, res: Response, next: express.NextFunction): void => {
    const gleaningItem = [
      {
        date: "6/2/2020",
        field_supv: "Cathy Bylinowski",
        farm: "18 Broadway",
        start_time: "7:30a.m.",
        produce: "cherries",
      },
      {
        date: "6/4/2020",
        field_supv: "Rick Mareske",
        farm: "JCCC Open Petal Farm",
        start_time: "7:30a.m.",
        produce: "lettuce",
      },
      {
        date: "6/6/2020",
        field_supv: "Joe Steineger",
        farm: "Joe Steineger Farm",
        start_time: "7:30a.m.",
        produce: "radishes",
      },
      {
        date: "6/6/2020",
        field_supv: "Joe Steineger",
        farm: "Joe Steineger Farm",
        start_time: "8:30a.m.",
        produce: "greens",
      },
      {
        date: "6/9/2020",
        field_supv: "Julie Davis",
        farm: "WIC Community Garden",
        start_time: "8:00a.m.",
        produce: "cabbage",
      },
      {
        date: "6/11/2020",
        field_supv: "Scott Thellman",
        farm: "Juniper Hill Farms, LLC",
        start_time: "7:30a.m.",
        produce: "kale",
      },
      {
        date: "6/11/2020",
        field_supv: "Cary Rivard",
        farm: "K-State Research and Extension Center",
        start_time: "7:30a.m.",
        produce: "lettuce",
      },
      {
        date: "6/12/2020",
        field_supv: "Cary Rivard",
        farm: "K-State Research and Extension Center",
        start_time: "7:30a.m.",
        produce: "lettuce",
      },
    ];

    res.send(gleaningItem);
  }
);

export default router;
// const conn = new jsforce.Connection({ oauth2: oauth2 });
// const code = req.query.code;
// conn.authorize(code, function (err, userInfo) {
//   if (err) {
//     return console.error("This error is in the auth callback: " + err);
//   }
//   console.log("Access Token: " + conn.accessToken);
//   console.log("Instance URL: " + conn.instanceUrl);
//   console.log("refreshToken: " + conn.refreshToken);
//   console.log("User ID: " + userInfo.id);
//   console.log("Org ID: " + userInfo.organizationId);
//   req.session.accessToken = conn.accessToken;
//   req.session.instanceUrl = conn.instanceUrl;
//   req.session.refreshToken = conn.refreshToken;
//   var string = encodeURIComponent("true");
