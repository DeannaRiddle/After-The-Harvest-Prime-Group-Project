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
//get route for salesforce user login
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

//get route for test data for gleaning items list
router.get(
  "/gleaning/list",
  (req: Request, res: Response, next: express.NextFunction): void => {
    const gleaningItem = [
      {
        date: "6/8/2020",
        field_supv: "Mack Donald",
        farm: "Old MacDonald's Farm",
        start_time: "10:00a.m.",
        produce: "lettuce",
      },
      {
        date: "6/8/2020",
        field_supv: "Rene Wedow",
        farm: "Hillside Meadows",
        start_time: "10:00a.m.",
        produce: "blueberries",
      },
      {
        date: "6/9/2020",
        field_supv: "Gladus Harvest",
        farm: "Great Harvest",
        start_time: "12:00p.m.",
        produce: "carrots",
      },
      {
        date: "6/9/2020",
        field_supv: "Bob Buck",
        farm: "New Point Farm",
        start_time: "11:00a.m.",
        produce: "grapes",
      },
      {
        date: "6/10/2020",
        field_supv: "Patrick Shellman",
        farm: "Sunrise Farm",
        start_time: "9:00a.m.",
        produce: "peas",
      },
      {
        date: "6/11/2020",
        field_supv: "Mary Sunshine",
        farm: "Sunshine Cherry Farm",
        start_time: "9:00a.m.",
        produce: "cherries",
      },
      {
        date: "6/12/2020",
        field_supv: "Joe Dirt",
        farm: "Dirt Farm",
        start_time: "11:00a.m.",
        produce: "potatoes",
      },
      {
        date: "6/12/2020",
        field_supv: "Molly Bloom",
        farm: "Sweet Valley",
        start_time: "10:00a.m.",
        produce: "onions",
      },
      {
        date: "6/13/2020",
        field_supv: "Red John",
        farm: "J&J Farm",
        start_time: "10:00a.m.",
        produce: "tomatoes",
      },
      {
        date: "6/13/2020",
        field_supv: "Runne Lothar",
        farm: "Heritage Farm",
        start_time: "11:00a.m.",
        produce: "cabbage",
      },
      {
        date: "6/13/2020",
        field_supv: "Erik Foxx",
        farm: "Magnolia Mill Farm",
        start_time: "10:00a.m.",
        produce: "green beans",
      },
      {
        date: "6/14/2020",
        field_supv: "Junior Samples",
        farm: "Sample Lane Farm",
        start_time: "10:00a.m.",
        produce: "lettuce",
      },
    ];

    res.send(gleaningItem);
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
    // });
  }
);

export default router;
