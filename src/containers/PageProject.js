import React, { Component } from 'react';
import {connect} from 'react-redux'


import ShellUI from './ShellUI'
import LinearProgress from '@material-ui/core/LinearProgress';

import {setUi} from '../actions/UiActions'

class PageProject extends Component {
  componentDidMount(){
    this.props.setUiAction("Проекты",false,"",true)
  }

  render() {
    const {cards, ui, clickDialogAddProjAction} = this.props
    const onClickAdd = () => clickDialogAddProjAction()
    return (
      <React.Fragment>
        
      
      <ShellUI addAction={onClickAdd}>
      {
        cards.isLoading ?
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
    cards: store.cards,
    ui: store.ui
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setUiAction: (title,backButton,backButtonLink,addButton) => dispatch(setUi(title,backButton,backButtonLink,addButton))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProject);
