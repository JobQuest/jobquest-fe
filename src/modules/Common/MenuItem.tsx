import React from 'react';
import './MenuItem.scss';
import { Link } from 'react-router-dom';

type LocationPath = 
  | "/user/profile"
  | "/user/quests-log"
  | "/user/quests"
  | "/user/current-quest";

interface MenuItemProps {
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
const { to } = props;
//This is a component of individual tab in the menu bar  
return (
    <Link to={to}>
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