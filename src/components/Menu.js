import React from "react";
import BurgerMenu from "./BurgerMenu";
import SideBar from "./SideBar";
import posed, { PoseGroup } from "react-pose";

class Menu extends React.Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <BurgerMenu isOpen={isOpen} onClick={this.handleClick} />
        <PoseGroup
          enterPose="open"
          preEnterPose="closed"
          exitPose="closed"
          flipMove={false}
        >
          {isOpen && <SideBar isOpen={isOpen} />}
        </PoseGroup>
      </div>
    );
  }
}
export default Menu
