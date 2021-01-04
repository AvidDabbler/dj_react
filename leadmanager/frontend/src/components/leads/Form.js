import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import { addLead, getLeads } from '../../actions/leads';

const initialState = {name:"", email: "", message: ""};

export class Form extends Component {
    state = {name:"", email: "", message: ""};

    static propType = {
        addLead: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
        const { name, email, message } = this.state;
        const lead = {name, email, message};
        this.props.addLead(lead);
        this.props.getLeads()
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="py-4">
                <h2 className="text-lg font-bold">Add Form</h2>
                <form id="add-lead" onSubmit={this.onSubmit} className="flex flex-column py-4 w-2/3">
                    <label>Name</label>
                    <input type="text" id='name' name="name" onChange={this.onChange} value={name} className='border-2 rounded-sm'></input>
                    <label>Email</label>
                    <input type="email" id='email' name='email' onChange={this.onChange} value={email} className='border-2 rounded-sm'></input>
                    <label>Message</label>
                    <input type="text" id='message' name="message" onChange={this.onChange} value={message} className='border-2 rounded-sm'></input>
                <div className='m-4'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded-full' type="submit">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}


export default connect(null, { addLead, getLeads })(Form);