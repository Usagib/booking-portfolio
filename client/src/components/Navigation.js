import React from 'react'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.state = {
      toggleSidebar: "hidden",
    };
  }

  toggleSidenav() {
      let css = (this.state.toggleSidebar === "active") ? "" : "active";
      this.setState({"toggleSidebar":css});
      console.log(this.state);
  }

  render() {
    return (
      <div>
        <button
          id="sidebarCollapse"
          class="btn"
          onClick={this.toggleSidenav}
          style={{
            position: 'fixed',
            zIndex: '99',
            top: '5%',
            left: '5%',
            backgroundColor: '#ffffff00',
          }}
         >
         <img src="navphoto.png" alt="..." width="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
         </button>
        <div className={`vertical-nav bg-white ${this.state.toggleSidebar}`} id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center">
              <button
                id="sidebarCollapseInner"
                class="btn"
                onClick={this.toggleSidenav}
                style={{
                  backgroundColor: '#ffffff00',
                }}
               >
               <img src="navphoto.png" alt="..." width="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
               </button>
              <div className="media-body">
                <h4 className="m-0">Eduardo Bonilla</h4>
                <p className="font-weight-light text-muted mb-0">Developer and so much more</p>
              </div>
            </div>
          </div>
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark font-italic bg-light">
                        <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                        Home
                    </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link text-dark font-italic">
                        <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                        Services
                    </a>
            </li>
            <li className="nav-item">
              <a href="/serviceselect" className="nav-link text-dark font-italic">
                        <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                        Services Select
                    </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link text-dark font-italic">
                        <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                        Login
                    </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link text-dark font-italic">
                <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a href="/datepick" className="nav-link text-dark font-italic">
                <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Date Picker
              </a>
            </li>
            <li className="nav-item">
              <a href="/profile" className="nav-link text-dark font-italic">
                <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="/logout" className="nav-link text-dark font-italic">
                <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
