module.exports = function (RED) {
  function ScraperNode(config) {
    RED.nodes.createNode(this, config);
    let node = this;
    let scraper = require("google-play-scraper");

    node.on("input", function (msg) {
      let option = {};

      if (config.appId) {
        option.appId = config.appId;
      }

      scraper.app(option).then((result) => {
        msg.payload = result;
        node.send(msg);
      });
    });
  }
  RED.nodes.registerType("Google Play App", ScraperNode);
};
