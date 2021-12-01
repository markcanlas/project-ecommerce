import React from "react";
import { styled } from "@mui/system";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled("div")({
  height: 60,
});

const Wrapper = styled("div")({
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Left = styled("div")({
  flex: 1,
  paddingLeft: 20,
});

const Logo = styled("h1")({
  fontWeight: "bold",
});

const Right = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const MenuItem = styled("div")({
  fontSize: 14,
  cursor: "pointer",
  marginLeft: 25,
});

const Center = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
});

const SearchContainer = styled("div")({
  border: "1px solid lightgray",
  display: "flex",
  alignItems: "center",
  marginLeft: 25,
  padding: 5,
});

const Input = styled("input")({
  border: "none",
});

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MANGA KA</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
