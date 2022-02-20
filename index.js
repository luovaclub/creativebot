var myUserId = "BOTUSERNAMEHERE";
var myAccessToken = "ACCESSTOKENHERE";
var msdk = require("matrix-js-sdk");
var clc = require("cli-color");
var matrixClient = msdk.createClient({
    baseUrl: "https://matrix.org",
    accessToken: myAccessToken,
    userId: myUserId
});
const sdk = require("matrix-bot-sdk");
const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;
const homeserverUrl = "https://matrix.org"; // make sure to update this with your url
const accessToken = "ACCESSTOKENHERE";
const storage = new SimpleFsStorageProvider("bot.json");
const client = new MatrixClient(homeserverUrl, accessToken, storage);
AutojoinRoomsMixin.setupOnClient(client);
client.start().then(() => console.log("Client started!"));
client.on("room.message", (roomId, event) => {
    if (! event["content"]) return;
    const sender = event["sender"];
    const body = event["content"]["body"];
    console.log(`${roomId}: ${sender} says '${body}`);
    //matrixClient.invite("!OzuqrguwOMkplazdbK:elokapina.fi", `${sender}`)
});
client.on("room.message", (roomId, event) => {
    if (! event["content"]) return;
    const body = event["content"]["body"];
    const sender = event["sender"]
    if (body && body.indexOf("KEYWORD HERE") !== -1) {
        client.sendMessage(roomId, {
            "msgtype": "m.text",
            "body": "ANSWER TO KEYWORD HERE",
});
        matrixClient.invite("ROOM TO INVITE HERE", `${sender}`)
    }
});
