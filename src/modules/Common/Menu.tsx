import React from 'react';
import { MenuProps } from '../../interfaces'

const Menu: React.FC<MenuProps> = (props) => {
  const {children, ...others } = props

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