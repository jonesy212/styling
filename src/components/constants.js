import AMERICAN_EXPRESS_ICON from "./assets/amex.png";
import DISCOVER_ICON from "./assets/discover.png";
import MASTERCARD_ICON from "./assets/masterCard.png";
import VISA_ICON from "./assets/visa.png";

export const OTHERCARDS = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const AMERICANEXPRESS = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

//CARD TYPE
export const CARD = ["VISA", "MASTERCARD", "AMERICAN_EXPRESS", "DISCOVER"];

export const CARDICON = {
  VISA: VISA_ICON,
  MASTERCARD: MASTERCARD_ICON,
  DISCOVER: DISCOVER_ICON,
  AMERICAN_EXPRESS: AMERICAN_EXPRESS_ICON,
};
