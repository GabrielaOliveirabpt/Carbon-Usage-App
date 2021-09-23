import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Graph from './Graph.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      country: "", 
      electricity_unit: "mwh", 
      electricity_value: "", // positive decimal numbers
      carbon_kg: null,
    };
  }
  gettingCarbonUsage = async () => {
    const token = '<token>';
    const config = {
      headers: { Authorization: `Bearer ${token}`, type: 'application/json'}
    };
    const bodyParameters = {
        type: "electricity",
        electricity_unit: this.state.electricity_unit,
        electricity_value: this.state.electricity_value,
        country: this.state.country
    };
    await axios.post( 
        'https://www.carboninterface.com/api/v1/estimates',
        bodyParameters,
        config
      ).then(response => {
        let result = response.data.data.attributes.carbon_kg;
        console.log('result from gettingCO2:', result);
        this.setState({ carbon_kg: result });
        }
      );
  }

  handleSubmit = async (e) => {
    this.gettingCarbonUsage()
    e.preventDefault();
  }

  handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
    });
      console.log('handleChange: ', this.state)
  };
  onReloadingPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.carbon_kg ? (
            <Graph 
              carbon_kg = {this.state.carbon_kg}
              onReloadingPage = {this.onReloadingPage}
            />
          ) : (
            <Form 
              country = {this.state.country} 
              electricity_value = {this.state.electricity_value} 
              electricity_unit = {this.state.electricity_unit} 
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
          />
          )
        }

        </header>
      </div>
    );
  }
}

export default App;
