import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import ShellUI from './ShellUI'
import PaperSheet from '../components/PaperSheet'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'
import Cards from '../components/Cards'
import DialogAddProj from './DialogAddProj'


import {getProject} from '../actions/ProjectActions'
import {getCards} from '../actions/CardsActions'
import {clickDialogAddProj, setUi, setAddButton} from '../actions/UiActions'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
});

class PageProject extends Component {
  

  componentDidMount(){
    this.props.getCardsAction()
    this.props.setUiAction(this.props.project.name,true,"d",false)
    this.props.getProjectAction( () =>
      this.props.setUiAction(this.props.project.name,true,"d",false)
    )
  }

  componentDidUpdate(){
    if (this.props.ui.valueActiveTab === 1 && !this.props.ui.addButton){
      this.props.setAddButtonAction(true)
    }
    
    if(this.props.ui.valueActiveTab !== 1 && this.props.ui.addButton){
      this.props.setAddButtonAction(false)
    }
  }

  render() {
    const {project, ui, cards, classes, clickDialogAddProjAction,setAddButtonAction } = this.props
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
      
      { ui.valueActiveTab === 0 && 
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
      }
      
      { ui.valueActiveTab === 1 && 
        <Cards cards={cards.cards}/>
      }
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
    cards: store.cards,
    ui: store.ui,
    project: store.project
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getCardsAction: () => dispatch(getCards()),
    setUiAction: (title,backButton,backButtonLink,addButton) => dispatch(setUi(title,backButton,backButtonLink,addButton)),
    getProjectAction: (callback) => dispatch(getProject(callback)),
    clickDialogAddProjAction: (show) => dispatch(clickDialogAddProj(show)),
    setAddButtonAction: (seted) => dispatch(setAddButton(seted))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageProject));
