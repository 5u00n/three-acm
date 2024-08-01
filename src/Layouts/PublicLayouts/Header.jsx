import React from 'react';
import { Link } from 'react-router-dom';
import logoLg from "../../assets/cropped-3acm.png";


function Header() {
  return (
    <React.Fragment>
      <header id="page-topbar" style={{ backgroundColor: "#e3e8ec" }}>
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box text-center">
              <Link to="/" className="logo logo-dark">
                <span className="logo-lg">
                  <img src={logoLg} alt="logo-dark" height="44" />
                  <label className="m-2 font-size-16">3ACM</label>
                </span>
              </Link>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="dropdown d-inline-block d-none"
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;