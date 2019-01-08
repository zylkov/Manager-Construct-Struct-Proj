import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import ShellUI from './ShellUI'
import PaperSheet from '../components/PaperSheet'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'

import {setUi} from '../actions/UiActions'
import {getProject} from '../actions/ProjectActions'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
});

class PageProject extends Component {
  

  componentDidMount(){
    this.props.setUiAction(this.props.project.name,true,"d",false)
    this.props.getProjectAction( () =>
      this.props.setUiAction(this.props.project.name,true,"d",false)
    )
  }

  render() {
    const {project, ui, clickDialogAddProjAction, classes } = this.props
    const onClickAdd = () => clickDialogAddProjAction()
    return (
      <React.Fragment>
        
      
      <ShellUI >
      {
        project.isLoading ?
        <LinearProgress/>:
        ''
      }

        <Grid container  
        className={classes.root} 
        spacing={4} 
        direction="column"
        justify="center"
        alignItems="center">
          <Grid item >
            <PaperSheet title="Дата создания"  text={project.dateСreat}/>
          </Grid>
          <Grid item >
            <PaperSheet title="Описание"  text={project.discription}/>
          </Grid>
        </Grid>

      </ShellUI> 
     </React.Fragment>
    )
  }
}

PageProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
  console.log(store)
  return{
    ui: store.ui,
    project: store.project
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setUiAction: (title,backButton,backButtonLink,addButton) => dispatch(setUi(title,backButton,backButtonLink,addButton)),
    getProjectAction: (callback) => dispatch(getProject(callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageProject));
