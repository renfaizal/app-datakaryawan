import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
          <NavLink className="navbar-item" to="/dataKaryawan" activeClassName="is-active">
            <a className="navbar-item" /> 
              Data Karyawan
          </NavLink>
          <NavLink className="navbar-item" to="/dataPekerjaan" activeClassName="is-active">
            <a className="navbar-item" />
              Data Pekerjaan
         
          </NavLink>
          <NavLink className="navbar-item" to="/dataDivisi" activeClassName="is-active">
            <a className="navbar-item" />
              Data Divisi
          </NavLink>
          <NavLink className="navbar-item" to="/dataJabatan" activeClassName="is-active">
            <a className="navbar-item" />
              Data Jabatan
          </NavLink>  
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" />
                My Account
              <div className="navbar-dropdown">
                <a className="navbar-item" />
                  Overview
                <a className="navbar-item"/>
                  This Site
                <hr className="navbar-divider" />
                <a className="navbar-item" />
                  Logout
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header