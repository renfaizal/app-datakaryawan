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
            <NavLink className="navbar-item" to="/" activeClassName="is-active">
                <img 
                    style={{
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderBottomRightRadius: '50%',
                        marginRight: 15
                    }}
                src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg" width="30px" alt="" />
                <span>Home</span>
            </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
          <NavLink className="navbar-item" to="/dataKaryawan" activeClassName="is-active">
            <a className="navbar-item">
              Data Karyawan
            </a>
          </NavLink>
          <NavLink className="navbar-item" to="/dataPekerjaan" activeClassName="is-active">
            <a className="navbar-item">
              Data Pekerjaan
            </a>
          </NavLink>
          <NavLink className="navbar-item" to="/dataDivisi" activeClassName="is-active">
            <a className="navbar-item">
              Data Divisi
            </a>
          </NavLink>
          <NavLink className="navbar-item" to="/dataJabatan" activeClassName="is-active">
            <a className="navbar-item">
              Data Jabatan
            </a>
          </NavLink>  
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                My Account
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <a className="navbar-item">
                  This Site
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header