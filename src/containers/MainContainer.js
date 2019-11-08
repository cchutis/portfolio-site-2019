import React, { Component } from 'react';
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import ContactBox from './ContactBox'
import PortfolioEntries from './PortfolioEntries'

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main">
                <FirstName />
                <PortfolioEntries projects={this.props.projects} backgroundChange={this.props.backgroundChange} />
                <LastName />
                <ContactBox />
            </div>
        );
    }
}
