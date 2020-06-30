/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname == routeName ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    const { bgColor, routes } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {routes.map((prop, key) => {
              if (prop.redirect) return null;
              if (prop.layout !== '/admin') return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <div className="nav-item-set">                      
                      <img src={prop.img} />
                      <p>{prop.name}</p>
                    </div>
                    {
                      Array.isArray(prop.subRoutes) && (
                        <ul className="submenu">
                          {
                            prop.subRoutes.map((item, index) => (
                              <li
                                className={
                                  this.activeRoute(prop.path + item.path) +
                                  (item.pro ? " active-pro" : "")
                                }
                                key={index}
                              >
                                <NavLink
                                  to={prop.path + item.path}
                                  className="nav-link"
                                  activeClassName="active"
                                  onClick={this.props.toggleSidebar}
                                >
                                  <p>{item.name}</p>
                                </NavLink>
                              </li>
                            ))
                          }
                        </ul>
                      )
                    }
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  bgColor: PropTypes.oneOf(["primary", "blue", "green", "black"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
