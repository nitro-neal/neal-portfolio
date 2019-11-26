import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";

import { CssBaseline, Box } from "@material-ui/core";

// import CssBaseline from "material-ui/CssBaseline";
//     font-family: Source Sans Pro,sans-serif;
import { FaGithub } from "react-icons/fa";

const theme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont," +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    color: "white"
  },
  palette: {
    primary: {
      main: "#222222"
    },
    secondary: {
      main: "#f48fb1"
    },
    borderColor: {
      main: "#1AA0A0"
    },
    background: {
      default: "#222222"
    },
    textColor: "white"
  },
  overrides: {
    MuiLink: {
      root: {
        color: "white",
        "&:underlineHover": {
          backgroundColor: "#1AA0A0"
        }
      }
    }
  }
});

//const theme = createMuiTheme();

function App() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>hi</h1>
      {/* <img
        style={{
          bottom: "0px",
          left: "0px",
          position: "absolute !important",
          margin: "0px auto",
          position: "absolute"
        }}
        src="/profile-headshot-round.png"
      ></img> */}
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img style={{ width: "75px" }} src="/tlogo.jpg"></img>
          </a>
          <Typography variant="h6"></Typography>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Experience</Button>
          <a href="https://github.com/nitro-neal">
            <FaGithub />
          </a>
          {/* 
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="secondary"
            onChange={handleChange}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs> */}
        </Toolbar>
      </AppBar>

      <Grid style={{ minHeight: "100vh" }} alignItems="center" container>
        <Grid item sm></Grid>
        <Grid item sm={10}>
          <Box>
            <Typography variant="h3" style={{ fontWeight: 900, color: "#eee" }}>
              Hey, my name’s Neal.
            </Typography>
          </Box>
          <Box pt={1}>
            <Typography
              variant="p"
              style={{ paddingTop: "40px", color: "#eee" }}
            >
              I’m a software engineer and builder based in Austin, TX.
            </Typography>
          </Box>

          {/* <Link style={{ color: "white" }} underlineHover={true}>
                Projects
              </Link> */}

          <Box pt={1}>
            <Typography>
              <Link underlineHover href="#">
                Recent Proejcts
              </Link>
              <Link href="#">About Me</Link>
            </Typography>

            {/* <Tabs
              orientation="vertical"
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Active" />
              <Tab label="Disabled" />
              <Tab label="Active" />
            </Tabs> */}
          </Box>

          <Box pt={1}>
            <img style={{}} src="/profile-headshot-round.png"></img>
          </Box>
        </Grid>
        <Grid item sm></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
