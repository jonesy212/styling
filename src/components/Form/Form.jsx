import React from "react";
import InputBase from "../InputBase.jsx/InputBase";
import {
  cardExpireValidation,
  cardLengthValidation,
  cardNumberValidation,
  onlytTextValidation, securityCodeValidation
} from "../validations";
import { OTHERCARDS } from "./../constants";

import "./Form.css";

//moving variable from state help to ensurue we don't have to update more values
///if there is a new variable.  we can jusut add the new variable to init card.
const INIT_CARD = {
  card: "",
  cardHolder: "",
  expiry: "",
  securityCode: "",
};
class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      cardData: INIT_CARD,
      //THIS BEING DYNAMIC ALLOWS TO COMPENSATE FOR DIFF CARD TYPES
      //SUCH AS AMEX DIFFERENT PATTERN
      maxLength: OTHERCARDS.length,
      //due to needing multiple errors that HAVE error
      //messages,/we create an object to hold them... conects to
      //to make key value pairs
      error: {},
      cardType: null,
    };
  }

  findDebitCardType = (cardNumber) => {
    const regexPattern = {
      //^number must start with that specific nuumber
      //then can be any number btwn 1-5
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
      if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card]))
        return card;
    }
    //no need to run an else as we can run an empty string to
    //due to return card stopping the function
    return "";
  };



  // above
  handleValidations = (type, value) => {
    
    
    let errorText;
    //object
    //compares the types to the property on the object
    //create a switch statement
    switch (type) {
      case "card":
        errorText = cardNumberValidation(value);
        //find card type
        //sets value either to an empty string, or the pattern
        this.setState((prevState) => ({
          //setState cardType, error
          cardType: this.findDebitCardType(value),
          error: {
            ...prevState.error,
            cardError: errorText,
            ...prevState.verify,
            ...prevState.value
          },
        }));
        break;
      case "cardHolder":
        errorText = onlytTextValidation(value);
        //checks for spaces and numbers
        this.setState((prevState) => ({
          //setState error
          error: {
            ...prevState.error,
            cardHolderError: errorText,
          },
        }));
        break;
      case "expiry":
        errorText = cardExpireValidation(value);
        //check date format
        this.setState((prevState) => ({
          //setState error
          error: {
            ...prevState.error,
            expiryError: errorText,
          },
        }));
        break;
      case "securityCode":
        errorText = securityCodeValidation(3, value);
        //checks for spaces and numbers
        this.setState((prevState) => ({
          //setState error
          error: {
            ...prevState.error,
            securityCodeError: errorText,
          },
        }));
        break;
      case "cardLength":
        errorText = cardLengthValidation(value);
        //check date format
        this.setState((prevState) => ({
          //setState error
          error: {
            ...prevState.error,
            expiryError: errorText,
          },
        }));
        break;
      // case "securityCodeLength":
      //   errorText = securityCardLengthValidation(value)

      //   this.setState((prevState) => ({

      //     error: {
      //       ...prevState.error,
      //       securityCodeLength: errorText
      //     }
      // //   }))
      //   break;
      default:
        break;
    }
  };

  //captures name and value      below:declare before can be used
  handleBlur = ({ target: { name, value } }) =>
    this.handleValidations(name, value);
  handleInputData = ({
    target: { name, value } }) => {
      
    //if the target name is card
      if (name === "card") {
        let card = "card"
    
        this.handleCardLengthValidation(card)
        console.log('length validation box')
      //assign a mask to the target value split  at spaces, then join together.
      let mask = value.split(" ").join("");

      //if the mask has a length
      if (mask.length) {
        //create the mask with regex that sets index 1-4 then connecting it with a space
        mask = mask.match(new RegExp(".{1,4}", "g")).join(" ");
        this.setState((prevState) => ({
          cardData: {
            //ensure prev state is within the object
            ...prevState.cardData,
            [name]: mask,
          },
        }));
      } else {
        this.setState((prevState) => ({
          cardData: {
            //remove
            ...prevState.cardData,
            [name]: "",
          },
        }));
      }
    } else {
      this.setState((prevState) => ({
        cardData: {
          //ensure prev state is within the object
          ...prevState.cardData,
          [name]: value,
        },
      }));
    }
  };

  checkErrorBeforeSave = () => {
    console.log("checking here");
    
    const { cardData } = this.state;
    let errorValue = {};
    let isError = false;
 
    Object.keys(cardData).forEach((val) => {
      
      if (!cardData[val].length) {
        errorValue = { ...errorValue, [`${val}Error`]: "Required" };
        console.log(val, ' not updated properly')
        isError = true;
        if (isError===true) {
          console.log("handling validation");
          this.handleValidations();
          let submit = document.
          console.log(submit)
          // this.checkErrorBeforeSave()
        }
        return
      }
    });

    this.setState((prevState) => ({
      error: { ...prevState.error, errorValue },
    }));

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (valid === false) {
      
    }
    console.log(" checking input length");
  };

  handleCardLengthValidation = () => {
    cardLengthValidation()
    console.log("card length")
    if (false) {
      
    }
  };
  handleAddCard = (e) => {
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave();
    if (!errorCheck) {
      this.setState({
        cardData: INIT_CARD,
        cardType: null,
      });
    }
  };

  render() {
    const { cardData, cardType, error, maxLength } = this.state;
    //writing inputData will allow to easily add a new input form with no additional entries or updates
    const inputData = [
      {
        label: "Card Number",
        name: "card",
        type: "text",
        error: "cardError",
      },
      {
        label: "CardHolders Name",
        name: "cardHolder",
        type: "text",
        error: "cardHolderError",
      },
      {
        label: "Expiry Date (MM/YY)",
        name: "expiry",
        type: "text",
        error: "expiryError",
      },
      {
        label: "Security Code",
        name: "securityCode",
        type: "text",
        error: "securityCodeError",
      },
    ];
    return (
      <div>
        <h1> New Card</h1>
        <form onSubmit={this.handleAddCard}>
          {/* For error handling, use ternary operator to check if the is input data before running */}
          {inputData.length
            ? inputData.map((item) => (
              <InputBase
                
                  placeholder={item.label}
                  type={item.type}
                  value={cardData && cardData[item.name]}
                  onChange={this.handleInputData}
                  autoComplete="off"
                  maxLength={maxLength}
                  name={item.name}
                  //need to know the name of the field the user is on and left
                  onBlur={this.handleBlur}
                  error={error}
                  cardType={cardType}
                  isCard={item.name === "card"}
                  onFocus={() => item.value}
                  errorMsg={
                    error && error[item.error] && error[item.error].length > 1
                      ? error[item.error]
                      : null
                  }
                />
              ))
            : null}

          <div className="btn-wrapper">
            {/* remember in input base to add props to get submit attributes */}
            <InputBase
              onBlur={this.handleBlur}
              type="submit"
              value="Add Card"
              onSubmit={()=>this.handleCardLengthValidation}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
