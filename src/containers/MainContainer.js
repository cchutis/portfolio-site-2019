import React, { Component } from 'react';
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import TitleOne from '../components/TitleOne'
import TitleTwo from '../components/TitleTwo'
import ContactBox from './ContactBox'
import PortfolioEntries from './PortfolioEntries'

export default class MainContainer extends Component {
    render() {
        return (
          <div className="main" style={{backgroundColor: this.props.background}} onKeyDown={(e) => this.props.projectPicker(e)} tabIndex={0}>
            <FirstName />
            {/* <PortfolioEntries projects={this.props.projects} /> */}
            <LastName />
            <TitleOne />
            <TitleTwo title={this.props.title}/>
            <ContactBox />
          </div>
        );
    }
}
