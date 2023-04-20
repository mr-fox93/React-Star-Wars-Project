import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Menu inverted className="menu">
      <Container>
        <Menu.Item as={Link} to="/" name=" Star Wars API"></Menu.Item>
        <Menu.Item as={Link} to="/characters" name="People"></Menu.Item>
        <Menu.Item name="Planets"></Menu.Item>
        <Menu.Item name=" Movies"></Menu.Item>
        <Menu.Item name=" Species"></Menu.Item>
        <Menu.Item name="Vechicles"></Menu.Item>
        <Menu.Item name=" Starships"></Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
