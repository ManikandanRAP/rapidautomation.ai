import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarWrapper from 'common/src/components/Navbar';
import Drawer from 'common/src/components/Drawer';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import Box from 'common/src/components/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import { Link } from 'gatsby';

import LogoDark from 'common/src/assets/image/hosting/logo.svg';
import LogoLight from 'common/src/assets/image/hosting/logo-light.svg';

import Mainsubmenu1 from '../MainPrimaryMenu/MainSubMenu';
import Maindeskmenu1 from '../MainPrimaryMenu/MainDesktopMenu';
import MainMobilemenu1 from '../MainPrimaryMenu/MainMobileMenu';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Link to="/" className="Logo_image Logo_image_dark">
            <img
              src={LogoDark}
              alt="Rapid Acceleration Partners"
              className="Image__ImageWrapper LogoImageSize"
              style={{ maxWidth: '90px', width: '100%', height: '100%' }}
            />
          </Link>
          <Link to="/" className="Logo_image Logo_image_light">
            <img
              src={LogoLight}
              alt="Rapid Acceleration Partners"
              className="Image__ImageWrapper LogoImageSize"
              style={{ maxWidth: '90px', width: '100%', height: '100%' }}
            />
          </Link>
          <Box {...menuWrapper}>
            {/* <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.hostingJson.MENU_ITEMS}
              offset={-70}
            /> */}
            <Maindeskmenu1 />

            {/* <a className="navbar_button" href="#1">
              <Button {...button} title="BUY NOW" />
            </a> */}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
              className="Mobile_menu_drawer"
            >
              {/* <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.hostingJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              /> */}
              <MainMobilemenu1 />
              {/* <a className="navbar_drawer_button" href="#1">
                <Button {...button} title="BUY NOW" />
              </a> */}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
    position: 'relative',
    backgroundColor: 'transparent',

    // backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
