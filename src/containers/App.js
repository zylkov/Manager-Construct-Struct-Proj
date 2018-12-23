import React, { Component } from 'react';
import Cards from '../components/Cards'
import ShellUI from '../components/ShellUI'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards:[
        {
          id:1,
          name:"Проект 1",
          discription:"Вообще кул проект отвечаю"
        },
        {
          id:2,
          name:"Проект 2",
          discription:"Да нет вот этот самый наилудщий"
        },
        {
          id:3,
          name:"Проект 3",
          discription:"В кратце - круть"
        },
      ]
    }
  }
  render() {
    return (
     <ShellUI title="Проекты" add={true}>
       <Cards cards={this.state.cards}/>
     </ShellUI> 
    )
  }
}

export default App;
