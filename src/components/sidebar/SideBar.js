import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="mySidenav" className={(this.props.open ? "sidenav primary-color sidenav__open": "sidenav primary-color sidenav__close")}>
        <div className="sidenav__title">
          {/* <h2>GSS</h2> */}
        </div>
        <div className="sidenav__menu">

        </div>
      </div>
    );
  }
}

export default SideBar;