import React from 'react';
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'


interface MenuProps {
  children?: object
}
const Menu: React.FC<MenuProps> = (props) => {
  const {children, ...others } = props
  //Here we list all the top menu tabs per side, this nav bar would hold them all
  //needs a condition, if we are on the left page the menuitems need to be on the left side
  //if the right page then we need to have menu items on the right side
  //Depending on a page menu items need to correspond to different links

  return (
    <section {...others}
    style={{
      height: "4.5em",
      display: "flex"}}>
      {children}
    </section>
  );
}

export default Menu;