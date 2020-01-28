import React, { Component } from 'react';
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import TitleOne from '../components/TitleOne'
import TitleTwo from '../components/TitleTwo'
import ContactBox from './ContactBox'
// import PortfolioEntries from './PortfolioEntries'


export default class MainContainer extends Component {
  render() {
    const { background, color, subtitle, subtitle2 } = this.props.project
      return (
        <div className="main" style={{backgroundImage: `url(${background})`}} onKeyDown={(e) => this.props.projectPicker(e)} tabIndex={0}>
          <FirstName />
          {/* <PortfolioEntries projects={this.props.projects} /> */}
          <LastName />
          <TitleOne title={subtitle} color={color} />
          <TitleTwo title2={subtitle2} color={color} />
          <ContactBox />
        </div>
      );
  }
}
