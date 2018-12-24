import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Add from '@material-ui/icons/Add'
import Back from '@material-ui/icons/KeyboardBackspace'

import DialogAddProj from '../containers/DialogAddProj'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  root:{
    flexGrow:1,
  },
  grow:{
    flexGrow:1
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    
  }
});



function ShellUI(props) {
  const { classes, children, title, add, addAction } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            <IconButton color="inherit" >
                <Back />
            </IconButton>
            <Typography variant="h6" color="inherit"  className={classes.grow}>
                {title}
            </Typography>
            { add ?
                <IconButton color="inherit" onClick={()=>addAction()}>
                    <Add />
                </IconButton>
                : ""

            }
            <IconButton color="inherit" >
                <AccountCircle />
            </IconButton>
            </Toolbar>
        </AppBar>
      </div>
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}

ShellUI.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  add:PropTypes.bool,
  addAction:PropTypes.func.isRequired,
};

export default withStyles(styles)(ShellUI);