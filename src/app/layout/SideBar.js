import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
    <div className="column is-3 is-success" >
      <aside className="menu">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Data Karyawan</a></li>
    </ul>
    <p className="menu-label">
      Administration
    </p>
    <ul className="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a className="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p className="menu-label">
      Transactions
    </p>
    <ul className="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul>
  </aside>
  </div>
    
)
export default SideBar