import React, { Component } from 'react'
import { Button, TextField } from "@mui/material";
import axios from 'axios'

export default class Create extends Component {
    state = {
        name: "",
        email: '',
        balance: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit=()=>{
        const data = {
            name:this.state.name,
            email:this.state.email,
            balance:this.state.balance
        }

        axios.post('http://localhost:8082/api/customers', data)
      .then(res => {
        this.setState({
            name: "",
            email: '',
            balance: ''
        })
      })
      .catch(err => {
        console.log("Error in creating!");
      })
    }

    render() {
        return (
            <div>
                <TextField
                    name='name'
                    label="Name"
                    placeholder="Enter Name"
                    fullWidth
                    required
                    value={this.state.name}
                    onChange={this.onChange}
                />

                <TextField
                    name='email'
                    label="Email"
                    placeholder="Enter Email"
                    fullWidth
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <TextField
                    name='balance'
                    label="Balance"
                    placeholder="Enter Balance"
                    fullWidth
                    required
                    value={this.state.balance}
                    onChange={this.onChange}
                />
                <br/>
                <Button onClick={this.onSubmit}>Done</Button>
            </div>
        )
    }
}
