import React, { Component } from 'react';
import {connect} from 'react-redux'


import ShellUI from './ShellUI'
import LinearProgress from '@material-ui/core/LinearProgress';

import {setUi} from '../actions/UiActions'
import {getProject} from '../actions/ProjectActions'

class PageProject extends Component {
  componentDidMount(){
    this.props.getProjectAction()
    this.props.setUiAction(this.props.project.name,true,"",false)
  }

  render() {
    const {project, ui, clickDialogAddProjAction} = this.props
    const onClickAdd = () => clickDialogAddProjAction()
    return (
      <React.Fragment>
        
      
      <ShellUI >
      {
        project.isLoading ?
        <LinearProgress/>:
        ''
      }
        
      </ShellUI> 
     </React.Fragment>
    )
  }
}

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
    getProjectAction: () => dispatch(getProject())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProject);
