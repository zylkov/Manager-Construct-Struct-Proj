import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


import ShellUI from './ShellUI'
import PaperSheet from '../components/PaperSheet'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'
import Cards from '../components/Cards'
import DialogAddProj from './DialogAddProj'

import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app


import {clickDialogAddProj, setUi, setAddButton, setTabs} from '../actions/UiActions'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  box:{
    height: '85px',
    width: '85px',
    backgroundColor: '#FFF2CC',
    borderRadius: '50%',
    display: 'inline-block',
    borderWidth: "1px",
    borderColor: "#D6B656",
    borderStyle: "solid",
  }
});

class PageProject extends Component {
  constructor(props){
      super(props)
      this.state = {
        treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
      }
  }

  componentDidMount(){
    this.props.setUiAction("Конструктор",false,"d",true)
    this.props.setTabsAction([])
  }

 

  render() {
    const {project, ui,  classes, clickDialogAddProjAction } = this.props
    const onClickAdd = () => clickDialogAddProjAction()
    return (
      <React.Fragment>
        
      <DialogAddProj open={ui.openDialogAddProj} onCloseDialog={onClickAdd}/>
      <ShellUI addAction={onClickAdd}>
      {
        project.isLoading ?
        <LinearProgress/>:
        ''
      }
      <div className={classes.box}></div>
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={
            () => ({
              buttons: [
                <button>i</button>
              ]
            })
          }
        />
      </div>
      
      
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
    clickDialogAddProjAction: (show) => dispatch(clickDialogAddProj(show)),
    setAddButtonAction: (seted) => dispatch(setAddButton(seted)),
    setTabsAction: (valueTab) => dispatch(setTabs(valueTab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageProject));
