//validate card Number
import moment from "moment";

export const cardNumberValidation = (cardNumber) => {
  const regexPattern = {
    //^card number must start with that specific nuumber
    //then can be any card number btwn 1-5
    //then anything 0-0
    //^ or statement must start with a 2 etc through american express
    MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
    VISA: /^4[0-9]{2,}$/,
    //must be a 34 or 37 bundle.  notice
    // there is not '-' in the array
    AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
  };
  //loop through cards to find the one that matchs the patterns
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
      if (cardNumber.length !== regexPattern[card].length) {
        console.log("card card number not long enough");
        // this.onSubmit()
      } 

        //if both are true,
        // let isNotLongEnough = false;
        // while (isNotLongEnough == false) {
        return cardNumber &&
        /^[1-6]{1}[0-9]{14,15}$/i.test(
            cardNumber.replace(/[^\d]/g, "").trim()
            )
            ? ""
            : "Enter a valid card card number";
        // }
      }
  }
  //no need to run an else as we can run an empty string to
  //due to return card stopping the function
  return "Enter a valid card card number";
};

export const cardExpireValidation = (value) => {
  //moment.js for using date objects
  if (value) {
    if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/i.test(value.trim())) {
      let today = new Date();
      const date = `${today.getFullYear()}-${today.getMonth() + 1}-${new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate()} `;
      let currentDate = moment(new Date(date));
      let visaValue = value.split("/");
      let visaDate = new Date(`20${visaValue[1]}`, visaValue[0], 0);
      return currentDate < moment(visaDate)
        ? undefined
        : "Please enter a valid date";
    } else {
      return "Invalid date format";
    }
  }
};

export const onlytTextValidation = (value) => {
  if (value) {
    if (/^[a-zA-Z]*$/i.test(value)) {
      return undefined;
    } else {
      return "Alphabetical letters only";
    }
  } else {
    return undefined;
  }
};

export const securityCodeValidation = (min, value) =>
  value && value.length < min ? "Must be 3 or more characters" : undefined;

export const cardLengthValidation = (cardNumber) => {
  //Check if the card number contains only numeric value
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(cardNumber)) {
    return false;
  }

  return luhnCheck(cardNumber);
};

const luhnCheck = (val) => {
  let checksum = 0; // running checksum total
  let j = 1; // takes value of 1 or 2

  // Process each digit one by one starting from the last
  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    calc = Number(val.charAt(i)) * j;
    // If the result is in two digits add 1 to the checksum total
    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    // Add the units element to the checksum total
    checksum = checksum + calc;

    // Switch the value of j
    if (j === 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  //Check if it is divisible by 10 or not.
  return checksum % 10 === 0;
};


export const securityCardLengthValidation= (value) => value.length === 3 ? value.length < 1 || value.length > 3 : "security code not valid" 
