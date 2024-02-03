import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/store.ts";
import { logoutUserTC } from "../../state/app/appReducer.ts";

export const AppBarComponent = memo(() => {
  const state = useAppSelector((s) => s.app);
  const dispatch = useAppDispatch();
  const logoutUserHAndler = () => {
    dispatch(logoutUserTC());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink
              to={"/"}
              style={{
                fontSize: "16px",
                color: "white",
                textDecoration: "none",
              }}
            >
              HOME
            </NavLink>
          </Typography>
          {state.isAuth ? (
            <>
              <Typography variant="h6" component="div">
                {state.authUser.login}
              </Typography>
              <Typography
                onClick={logoutUserHAndler}
                variant="h6"
                component="div"
                style={{
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                LOGOUT
              </Typography>
            </>
          ) : (
            <NavLink
              to={"/login"}
              style={{
                fontSize: "16px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              LOGIN
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
