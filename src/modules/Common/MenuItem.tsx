import React from 'react';
import './MenuItem.scss';
import { Link } from 'react-router-dom';
interface MenuItemProps {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  path: string
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { path } = props
//This is a component of individual tab in the menu bar  
return (
    <Link to={path}>
      <aside style={{
        width: "3em",
        height: "3em",
        border: "1px solid purple"
      }}>
        Tab
      </aside>
    </Link>
  );
}

export default MenuItem;