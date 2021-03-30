"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "        " + a + "   ^__^\n" +
    "         " + a + "  (" + e + ")\\_______\n" +
    "            (__)\\       )\\/\\\n" +
    "             " + t + " ||--WWW |\n" +
    "                ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "www",
  render: render
};
