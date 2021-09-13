// import React, { Component } from 'react';

import React, { Component } from 'react';
import { Button } from '@material-ui/core'; 
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Select, MenuItem } from '@material-ui/core';

class Form extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 color="secondary" className="header">Dear customer, please insert the following information:</h2>
                <FormControl component="fieldset">
{/* <form className={classes.root} noValidate autoComplete="off"> */}

                    <FormLabel component="legend">Country </FormLabel>

                        <Select 
                            labelId="label" 
                            id="select" 
                            name="country" 
                            value={this.props.country}
                            onChange={this.props.handleChange("country")}
                        >
                            <MenuItem value="at">Austria</MenuItem>
                            <MenuItem value="be">Belgium</MenuItem>
                            <MenuItem value="bg">Bulgaria</MenuItem>
                            <MenuItem value="hr">Croatia</MenuItem>
                            <MenuItem value="cy">Cyprus</MenuItem>
                            <MenuItem value="cz">Czechia</MenuItem>
                            <MenuItem value="dk">Denmark</MenuItem>
                            <MenuItem value="ee">Estonia</MenuItem>
                            <MenuItem value="fi">Finland</MenuItem>
                            <MenuItem value="fr">France</MenuItem>
                            <MenuItem value="de">Germany</MenuItem>
                            <MenuItem value="gr">Greece</MenuItem>
                            <MenuItem value="gu">Hungary</MenuItem>
                            <MenuItem value="ie">Ireland</MenuItem>
                            <MenuItem value="it">Italy</MenuItem>
                            <MenuItem value="lv">Latvia</MenuItem>
                            <MenuItem value="lt">Lithuania</MenuItem>
                            <MenuItem value="lu">Luxembourg</MenuItem>
                            <MenuItem value="mt">Malta</MenuItem>
                            <MenuItem value="nl">Netherlands</MenuItem>
                            <MenuItem value="pl">Poland</MenuItem>
                            <MenuItem value="pt">Portugal</MenuItem>
                            <MenuItem value="ro">Romania</MenuItem>
                            <MenuItem value="sk">Slovakia</MenuItem>
                            <MenuItem value="si">Slovenia</MenuItem>
                            <MenuItem value="es">Spain</MenuItem>
                            <MenuItem value="se">Sweden</MenuItem>
                            <MenuItem value="gb">United Kingdom</MenuItem>
                        </Select>

                    <br/>
                    <FormLabel component="legend">Electricity Consumption</FormLabel>
                        <TextField 
                            id="standard-basic" 
                            label=""
                            type="number"
                            step="1"
                            min="0"
                            value = {this.props.electricity_value}
							onChange={this.props.handleChange("electricity_value")}
                        />
                        <br/>
                    <FormLabel component="legend">Unit of Measurement</FormLabel>
                        <RadioGroup 
                            aria-label="electricity_unit" 
                            name="electricity_unit" 
                            value={this.props.electricity_unit} 
                            onChange={this.props.handleChange("electricity_unit")}
                        >
                            <FormControlLabel value="mwh" control={<Radio />} label="MWh" />
                            <FormControlLabel value="kwh" control={<Radio />} label="kWh" />
                        </RadioGroup>
                    <br/>
                    <Button variant="contained" color="secondary" onClick = {this.props.handleSubmit}>Calculate my CO2 usage</Button>
                    </FormControl>

            </React.Fragment>
        )
    }
}

export default Form;

