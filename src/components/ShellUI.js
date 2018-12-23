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

import DialogAddProj from '../components/DialogAddProj'

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
  const { classes, children, title, add } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <DialogAddProj open={false}/>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            
            <Typography variant="h6" color="inherit"  className={classes.grow}>
                {title}
            </Typography>
            { add ?
                <IconButton color="inherit">
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
};

export default withStyles(styles)(ShellUI);