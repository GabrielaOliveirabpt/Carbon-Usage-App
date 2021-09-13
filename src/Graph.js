import React, { Component } from 'react';
import { Button } from '@material-ui/core'; 

class Graph extends Component {

    render() {
        return (
            <React.Fragment>
                <h2>Analysis Result</h2>
                <h3>This is your Carbon usage:</h3>
                <br/>
                <div className="graph">
                    <h3>{this.props.carbon_kg}kg</h3> 
                    <h3>CO2</h3>
                </div>
                <br/>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick = {this.props.onReloadingPage}
                > Insert new data 
                </Button>

            </React.Fragment>
        )
    }
}

export default Graph;

