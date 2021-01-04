import React, { Component, Fragment } from 'react';
import { withAlert } from "react-alert";

export class Alerts extends Component {

    componentDidMount(){
        this.props.alert.show('it works')
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default withAlert()(Alerts)
