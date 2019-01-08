import React, {Component} from 'react';
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {connect} from 'react-redux'

import {changeTabs} from '../actions/UiActions'


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



class ShellUI extends Component {
constructor(props){
  super(props)

  this.handleChange = this.handleChange.bind(this)
}

  handleChange = (event, value) => {
    this.props.changeTabsAction(value)
  };
  
  render(){
    const { classes, children, addAction, ui } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                {
                  ui.backButton ?
                  <IconButton color="inherit" >
                    <Back />
                  </IconButton>
                  :""
                }
              <Typography variant="h6" color="inherit"  className={classes.grow}>
                  {ui.title}
              </Typography>
              { ui.tabs.length > 0 ?
                <Tabs
                style={{marginRight:100}}
                className={classes.grow} 
                value={ui.valueActiveTab}
                onChange={this.handleChange}>
                  {ui.tabs.map((name)=>
                    <Tab label={name} />
                  )}
                </Tabs>
                :""

              }
              { ui.addButton ?
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
}

ShellUI.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  add:PropTypes.bool,
  addAction:PropTypes.func,
  changeTabsAction:PropTypes.func,
};

const mapStateToProps = store => {
  return{
    ui: store.ui
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    changeTabsAction: (valueTab) => dispatch(changeTabs(valueTab))
  }
}

export default withStyles(styles)(
  connect(mapStateToProps,mapDispatchToProps)(ShellUI)
  );