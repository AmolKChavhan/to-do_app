import { useState } from "react";
import { Layout, Menu, Button, Avatar, Dropdown, Typography, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AccountIcon from "../../assets/images/user-profile-icon.jpg";
import NavBarData from "./navData";
import "./navbar.css"; // External CSS

const { Header } = Layout;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const mobileMenuItems = ["Profile", "Account", "Dashboard"]; // Only 3 items for mobile menu

const Navbar = () => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const handleToggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  const userMenu = (
    <Menu>
      {settings.map((setting) => (
        <Menu.Item key={setting}>
          <Typography.Text>{setting}</Typography.Text>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header id="navbar" className="navbar">
      <div className="nav_container">
        {/* Logo */}
        <div className="nav_logo">
          <Typography.Text strong className="MuiLink-root">
            SRIJAN DEV
          </Typography.Text>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="desktop_menu">
          {NavBarData.map((section) => (
            <Button key={section.id} type="link" className="menu_item">
              <Typography.Text strong>{section.title}</Typography.Text>
            </Button>
          ))}
        </div>

        {/* User Settings */}
        <div className="user-settings">
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Card>
              {/* Mobile Menu Button */}
              <Button
                icon={<MenuOutlined />}
                onClick={handleToggleNavMenu}
                className="menu_button"
              />
              {navMenuVisible && (
                <Menu className="nav_menu" mode="horizontal">
                  {mobileMenuItems.map((section, index) => (
                    <Menu.Item key={index}>
                      <Typography.Text>{section}</Typography.Text>
                    </Menu.Item>
                  ))}
                </Menu>
              )}
            </Card>
            <Avatar
              src={AccountIcon}
              alt="Account Icon"
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
