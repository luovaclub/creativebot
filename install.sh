sudo apt update
sudo apt install nodejs npm
mkdir creativebot
cd creativebot
npm install matrix-js-sdk
npm install matrix-bot-sdk
echo "NOW YOU HAVE TO SET BOT ACCESS TOKEN, AND HOMESERVER AND USERNAME"
nano index.js
node index.js