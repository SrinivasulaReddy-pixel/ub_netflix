import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import './notification.css';

export const Notification = () => {
  return (
    <span className="notification-layer">
      <span className="notification-count">5</span>
      <span className="notification-icon">
        <IoMdNotificationsOutline />
      </span>
    </span>
  );
};
