import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar__close-button" onClick={toggleSidebar}>
      <i className="fas fa-arrow-left fa-2x"></i>
      </button>
      <div className="sidebar__content">
        <div className="sidebar__image">
          <img src="/user-image.png" alt="User" />
        </div>
        <div className="sidebar__buttons">
          <button>Order</button>
          <button>Favorite</button>
        </div>
        <div className="sidebar__logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
