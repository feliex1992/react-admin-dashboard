import React from 'react';

import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends React.Component {
  state = {
    open: false
  }
  onOpenDrawer = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };
  
  render() {
    return (
      <div>
        <NavBar />
        <button
          className={(this.state.open ? "button_drawer button__drawer_open primary-color": "button_drawer button__drawer_close primary-color")}
          onClick={this.onOpenDrawer}
        >
          <FontAwesomeIcon 
            icon={(this.state.open ? faTimesCircle : faBars)}
            size="2x"
          />
        </button>
        <SideBar open={this.state.open}/>
        <main id="main" className={(this.state.open ? "main__drawer_open background-color": "main__drawer_close background-color")}>
          <h2>Sidenav Push Example</h2>
          <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
        </main>
      </div>
    );
  };
}

export default Dashboard;