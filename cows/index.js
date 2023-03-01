"use strict";

import utils from "../lib/utils.js";


/**
 * Position index
 *
 * @typedef {[ number, number ]} Position
 * @package
 */


/**
 * Cow values to interpolate
 *
 * @typedef {Object} CowTemplateArgs
 * @property {ReadonlyArray<Position>} pos Position indexes
 * @property {string} str String to interpolate
 * @package
 */


/**
 * Cow action
 *
 * @typedef {"o" | "\\"} CowAction
 */


/**
 * Cow name
 *
 * @typedef {Object} CowName
 * @property {string} name Cow name
 * @package
 */

/**
 * Cow without name
 *
 * @typedef {Object} CowBase
 * @property {string} [defEyes] Default eyes
 * @property {string} [defTongue] Default tongue
 * @property {ReadonlyArray<string>} template Cow template
 * @property {ReadonlyArray<Position>} [actionPos] Action position indexes
 * @property {ReadonlyArray<Position>} [eyesPos] Eyes position indexes
 * @property {ReadonlyArray<Position>} [tonguePos] Tongue position indexes
 */

/**
 * Cow
 *
 * @typedef {CowBase & CowName} Cow
 */


/**
 * Cows list
 *
 * The default cow is in the first position.
 *
 * @type {ReadonlyArray<Readonly<Cow>>}
 * @constant
 * @package
 */
import defaultCow from './default.cow.js'
import aptCow from './apt.cow.js'
import beavisCow from './beavis.zen.cow.js'
import blowfishCow from './blowfish.cow.js'
import bongCow from './bong.cow.js'
import budfrogsCow from './bud-frogs.cow.js'
import bunnyCow from './bunny.cow.js'
import calvinCow from './calvin.cow.js'
import cheeseCow from './cheese.cow.js'
import cockCow from './cock.cow.js'
import cowerCow from './cower.cow.js'
import daemonCow from './daemon.cow.js'
import dragonandcowCow from './dragon-and-cow.cow.js'
import dragonCow from './dragon.cow.js'
import duckCow from './duck.cow.js'
import elephantinsnakeCow from './elephant-in-snake.cow.js'
import elephantCow from './elephant.cow.js'
import eyesCow from './eyes.cow.js'
import flamingsheepCow from './flaming-sheep.cow.js'
import foxCow from './fox.cow.js'
import ghostbustersCow from './ghostbusters.cow.js'
import gnuCow from './gnu.cow.js'
import headinCow from './head-in.cow.js'
import hellokittyCow from './hellokitty.cow.js'
import kangarooCow from './kangaroo.cow.js'
import kissCow from './kiss.cow.js'
import kittyCow from './kitty.cow.js'
import koalaCow from './koala.cow.js'
import koshCow from './kosh.cow.js'
import lukekoalaCow from './luke-koala.cow.js'
import mechandcowCow from './mech-and-cow.cow.js'
import meowCow from './meow.cow.js'
import milkCow from './milk.cow.js'
import moofasaCow from './moofasa.cow.js'
import mooseCow from './moose.cow.js'
import mutilatedCow from './mutilated.cow.js'
import ponysmallerCow from './pony-smaller.cow.js'
import ponyCow from './pony.cow.js'
import renCow from './ren.cow.js'
import satanicCow from './satanic.cow.js'
import sheepCow from './sheep.cow.js'
import skeletonCow from './skeleton.cow.js'
import smallCow from './small.cow.js'
import snowmanCow from './snowman.cow.js'
import sodomizedCow from './sodomized.cow.js'
import stegosaurusCow from './stegosaurus.cow.js'
import stimpyCow from './stimpy.cow.js'
import supermilkerCow from './supermilker.cow.js'
import surgeryCow from './surgery.cow.js'
import suseCow from './suse.cow.js'
import telebearsCow from './telebears.cow.js'
import threeeyesCow from './three-eyes.cow.js'
import turkeyCow from './turkey.cow.js'
import turtleCow from './turtle.cow.js'
import tuxCow from './tux.cow.js'
import udderCow from './udder.cow.js'
import uniponysmallerCow from './unipony-smaller.cow.js'
import uniponyCow from './unipony.cow.js'
import vaderkoalaCow from './vader-koala.cow.js'
import vaderCow from './vader.cow.js'
import wwwCow from './www.cow.js'

const corral = [
  defaultCow,
  aptCow,
  beavisCow,
  blowfishCow,
  bongCow,
  budfrogsCow,
  bunnyCow,
  calvinCow,
  cheeseCow,
  cockCow,
  cowerCow,
  daemonCow,
  dragonandcowCow,
  dragonCow,
  duckCow,
  elephantinsnakeCow,
  elephantCow,
  eyesCow,
  flamingsheepCow,
  foxCow,
  ghostbustersCow,
  gnuCow,
  headinCow,
  hellokittyCow,
  kangarooCow,
  kissCow,
  kittyCow,
  koalaCow,
  koshCow,
  lukekoalaCow,
  mechandcowCow,
  meowCow,
  milkCow,
  moofasaCow,
  mooseCow,
  mutilatedCow,
  ponysmallerCow,
  ponyCow,
  renCow,
  satanicCow,
  sheepCow,
  skeletonCow,
  smallCow,
  snowmanCow,
  sodomizedCow,
  stegosaurusCow,
  stimpyCow,
  supermilkerCow,
  surgeryCow,
  suseCow,
  telebearsCow,
  threeeyesCow,
  turkeyCow,
  turtleCow,
  tuxCow,
  udderCow,
  uniponysmallerCow,
  uniponyCow,
  vaderkoalaCow,
  vaderCow,
  wwwCow,
];

/**
 * Custom cows list
 *
 * @type {Readonly<Cow>[]}
 * @constant
 * @package
 */
var customCorral = [];


/**
 * Truncate string to the given length
 *
 * @param {string | undefined} str String to truncate
 * @param {number} len Maximum length
 * @returns {string} Truncated string
 * @package
 */
function truncate(str, len) {
  return typeof str === "string" ? str.slice(0, len) : "";
}

/**
 * Force cow value to the given lenght at least
 *
 * @param {string | undefined} value Cow value
 * @param {string | undefined} empty Default value for empty value
 * @param {string | undefined} undef Default value for undefined value
 * @param {number} len Maximum length
 * @returns {string} Fixed value
 * @package
 */
function fix(value, empty, undef, len) {
  if (typeof value !== "string") {
    return truncate(undef, len);
  }

  if (value.length === 0) {
    return truncate(empty, len);
  }

  return truncate(value, len);
}


/**
 * Check if the given position array is valid
 *
 * @param {ReadonlyArray<Position> | undefined} arr Position array
 * @returns Whether the position array is valid
 * @package
 */
function validatePositionArray(arr) {
  // Undefined arrays are allowed
  if (arr === undefined) {
    return true;
  }

  // Not arrays are not allowed
  if (!Array.isArray(arr)) {
    return false;
  }

  // Validate format of every position
  return arr.every(function(pos) {
    return Array.isArray(pos) && pos.length === 2 && typeof pos[0] === "number" && typeof pos[1] === "number";
  });
}


/**
 * Create a full deep copy of the given cow
 *
 * @param {Cow} cow Cow to copy
 * @returns {Cow} A copy of the given cow
 * @package
 */
function copyCow(cow) {
  /**
   * Copy the given position indexes
   *
   * @param {Readonly<Position>} pos Position indexes
   * @returns {Position} A copy of the position indexes
   */
  var copier = function(pos) {
    return [ pos[0], pos[1] ];
  };

  return {
    name: cow.name,
    defEyes: cow.defEyes,
    defTongue: cow.defTongue,
    template: cow.template.slice(),
    actionPos: cow.actionPos ? cow.actionPos.map(copier) : undefined,
    eyesPos: cow.eyesPos ? cow.eyesPos.map(copier) : undefined,
    tonguePos: cow.tonguePos ? cow.tonguePos.map(copier) : undefined,
  };
}

/**
 * Validate the given custom cow
 *
 * @param {Cow & CowBase} cow Custom cow to validata
 * @param {boolean} [name=false] Validate name
 * @returns {boolean} Whether the custom cow is valid
 */
function validateCow(cow, name) {
  var valid = true;
  valid = valid && typeof cow === "object" && cow !== null && !Array.isArray(cow);
  valid = valid && Array.isArray(cow.template);
  valid = valid && cow.template.every(function(line) { return typeof line === "string"; });
  valid = valid && (cow.defEyes === undefined || typeof cow.defEyes === "string");
  valid = valid && (cow.defTongue === undefined || typeof cow.defTongue === "string");
  valid = valid && validatePositionArray(cow.actionPos);
  valid = valid && validatePositionArray(cow.eyesPos);
  valid = valid && validatePositionArray(cow.tonguePos);

  if (name) {
    valid = valid && typeof cow.name === "string" && cow.name.length > 0;
  }

  return valid;
}

/**
 * Find a cow in the corral by name
 *
 * @param {string} name Cow name
 * @returns {Cow} Matching cow
 */
function getCow(name) {
  /** @type {Cow | undefined} */
  var cow;

  // Find cow
  if (typeof name === "string") {
    cow = utils.find(corral.concat(customCorral), function(cow) {
      return cow.name === name;
    });
  }

  // Get default cow if is not found
  if (cow === undefined) {
    cow = corral[0];
  }

  // Return a copy of the cow
  return copyCow(cow);
}

/**
 * Add a new cow to the custom corral
 *
 * @param {Cow} cow New cow to add
 * @returns {boolean} Whether the cow could be added
 */
function addCow(cow) {
  if (!validateCow(cow, true)) {
    return false;
  }

  // Check if the cow already exists
  if (getCow(cow.name).name === cow.name) {
    return false;
  }

  // Add cow and sort corral
  customCorral.push(cow);
  customCorral.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  return true;
}

/**
 * Remove a cow from the custom corral
 *
 * @param {string} name Cow name
 * @returns {Cow | undefined} Removed cow
 */
function removeCow(name) {
  // Return undefined for not valid string
  if (typeof name !== "string") {
    return undefined;
  }

  // Get cow index
  var ind = customCorral.findIndex(function(cow) {
    return cow.name === name;
  });

  // Remove cow from corral and return it
  if (ind !== -1) {
    return customCorral.splice(ind, 1)[0];
  }

  // Not found cow
  return undefined;
}



/**
 * Cow renderer function
 *
 * @param {CowBase} cow Cow to render
 * @param {CowAction} [action] Action
 * @param {string} [eyes] Eyes
 * @param {string} [tongue] Tongue
 * @returns {string} Rendered cow
 */
function renderCow(cow, action, eyes, tongue) {
  // Copy template
  var lines = cow.template.slice();

  // Get values to interpolate
  /** @type {Readonly<CowTemplateArgs>[]} */
  var values = [];
  var act = -1;

  if (cow.tonguePos) {
    values.push({ pos: cow.tonguePos, str: fix(tongue, cow.defTongue, "  ", 2) });
  }

  if (cow.eyesPos) {
    values.push({ pos: cow.eyesPos, str: fix(eyes, cow.defEyes, "oo", 2) });
  }

  if (cow.actionPos) {
    values.push({ pos: cow.actionPos, str: fix(action, undefined, undefined, 1) });
    act = values.length - 1;
  }

  // Interpolate values
  values.forEach(function(val, i) {
    // Position indexes fixer and face position index flag
    var fix = 0;
    var f = i !== act;

    val.pos.forEach(function(pos, j) {
      var char = val.str[j] || (f && j === 1 ? "" : val.str.slice(-1));
      var pos0 = pos[0];
      var pos1 = pos[1] - fix;
      var line = lines[pos0];
      lines[pos0] = line.slice(0, pos1) + char + line.slice(pos1 + 1);

      if (char.length === 0) {
        ++fix;
      }
    });
  });

  return lines.join("\n");
}


/**
 * Cows collection
 *
 * @module cowsayjs/cows
 */
export default {
  corral: corral.map(copyCow),
  customCorral: customCorral,
  validateCow: validateCow,
  getCow: getCow,
  addCow: addCow,
  removeCow: removeCow,
  renderCow: renderCow
};
