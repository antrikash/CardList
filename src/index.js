import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import Card from "./card";
//const url = "https://api.genderize.io/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      sel: "green",
      cardList: []
    };
  }

  CDM = async val => {
    const url = "https://api.genderize.io/?name=";

    const data = await fetch(url + val);
    const response = await data.json();
    console.log(response.gender);
    this.setState({
      respnse: response.gender
    });
  };

  handleSubmit = () => {
    const cardValue = {
      sel: this.state.sel,
      text: this.state.text,
      id: Date.now()
    };
    const data = [...this.state.cardList, cardValue];
    this.setState({
      cardList: data
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      sel: e.target.value
    });
  };

  // renderCL = () =>{

  //   console.log(this.state.cardList)
  //   this.state.cardList.map((e,i) => {

  //     return(<Card key={i} sel= {e.sel} text={e.text} />)})
  // }
  dismiss = id => {
    const data = this.state.cardList.filter(x => x.id !== id);
    //console.log(data);
    this.setState({
      cardList: data
    });
  };
  render() {
    return (
      <div>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <select onChange={this.handleSelect}>
          <option value="green">Success</option>
          <option value="yellow">Warning</option>
          <option value="red">Error</option>
        </select>

        <button onClick={this.handleSubmit}>Submit</button>

        <div>
          {this.state.cardList.map((e, i) => (
            <Card
              key={i}
              sel={e.sel}
              text={e.text}
              dismiss={this.dismiss}
              id={e.id}
            />
          ))}{" "}
        </div>

        <div />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
