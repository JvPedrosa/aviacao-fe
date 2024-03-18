import { Container } from "./styles";
import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavigationMenuDesktop = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuItem onClick={() => navigate("/")}>
        <Typography>Home</Typography>
      </MenuItem>
    </Container>
  );
};
