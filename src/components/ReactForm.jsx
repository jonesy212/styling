import React from "react";

class ReactForm extends React.Component {
  constructor() {
    super();
      this.state = {
          person: { name: '', comments: '', animalChoice: ''}
      };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    //did something with data
    //clearingg out the state of the form
    this.setState({ value: "" });
  };

  onChange = (e) => {
    e.preventDefault();
      this.setState({ value: e.target.value });
      
      const value = e.target.value;
      const name = e.target.name;
      //make sure to grab the previous state to not rewrite inputs!!
      this.setState((prevState) => ({person: {...prevState.person, [name]: value}}))
      //person testing notes
    // let key = "name";
    // console.log(`changing ${e.target[`${key}`]}`);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            value={this.state.value}
          />
        </label>
        {/* to control the state of an imput field, type in text area and it updates the form input aka name input */}
        <textarea name="" id="" cols="30" rows="10" value={this.state.value} />
        <select name="" id="" onChange={this.onChange}>
          <option name="dog" value=""></option>
          <option name="cat" value=""></option>
          <option name="pig" value=""></option>
        </select>
        {/*place in input to use disabled={!this.state.value.length}*/}
        <input type="submit" value="submit" name="" id="" />
      </form>
    );
  }
}
export default ReactForm;
