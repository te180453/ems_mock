import React, { useState } from "react";
import { ThemeProvider, CssBaseline, AppBar, IconButton, Typography, Toolbar, Button, Drawer, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useHistory} from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';

const theme = createTheme({
    typography: {
        fontFamily: [
          'Kosugi',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    palette: {
        type: "dark"
    },
  });

const OuterFrame = (props : {children : JSX.Element}) => {
    const [state, setState] = useState(false);
    const history = useHistory();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Drawer anchor={"left"} open={state} onClose={() => {setState(false)}}>
                <ListItem button onClick={() => {
                    history.push("/list");
                    setState(false);
                    }}>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                    <ListItemText primary={"設備一覧"} />
                </ListItem>
                <ListItem button onClick={() => {
                    history.push("/list/create");
                    setState(false);
                    }}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary={"設備追加"} />
                </ListItem>
            </Drawer>
            <div style={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" style={{marginRight: theme.spacing(2)}} aria-label="menu" onClick={ () => setState(true) }>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow:1}}>
                        設備管理システム
                    </Typography>
                    <Button color="inherit" onClick={() => history.push("/list/create")}>設備追加</Button>
                    </Toolbar>
                </AppBar>
            </div>
            {props.children}
        </ThemeProvider>
    );
}

export default OuterFrame;