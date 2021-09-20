import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
// Components
import TaskForm from './components/TaskForm';
class App extends Component {

  state = {
    tasks : tasks
  }

  addTask = (title, description) => {
   const newTask = {
     title : title,
     description : description,
     id : this.state.tasks.length
   }
   this.setState({
     tasks:[...this.state.tasks, newTask]
   })
  }

  deleteTask = (id) => {
    this.state.tasks.filter(task => task.id !== id)
  }

  checkDone = () => {
    
  }

  render() {  //Vamos a mostrar en la página una iterando las tareas
    this.props.addTask();
    return <div>
         <TaskForm addTask={this.addTask}/>
         <Tasks tasks = {this.state.tasks} deleteTask={this.deleteTask}/>
           </div>
  }
  }


/* function Helloworld (props) {
  return (
   <div id="hello"> 
    <h3>{props.subtitle} </h3>
    {props.mytext}
   </div>
  )
} 

//const App = () => <div> This is my component: <Hello world/> </div>

//Lo cual es equivalente a:

class Helloworld extends React.Component {
  
state = {
    show: true
}

  render() {
    if (this.state.show){
    return (
      <div id="hello">  
      <h3>{this.props.subtitle} </h3>  
       {this.props.mytext}
       <button onClick={() => this.setState({show:false})}> Toggle Show</button>
      </div>
    )
    } else {
      return <h1>
        There are not elements 
        <button onClick={() => this.setState({show:true})}>
          Toggle show
        </button>
        </h1>
    }
  }
}

function App() {
  return (  
    <div>
      This is my component: 
      <Helloworld mytext="Hello Álvaro" subtitle="loremp ispum"/> 
      <Helloworld mytext="Hola mundo" subtitle="component 2" />
      <Helloworld mytext="Hello"/> 
    </div> //Al ser html dentro de JS, debo llamarlo entre una etiqueta <>
  );         //Si escribiera, <Helloworld> 4 veces seguidas, se imprimiría 3 veces por la página web
}

// Y también se puede escribir a través de una clase
/* 
class App extends React.Component { //Al heredar las caract. de React, podemos usar la función Render
 render() {
   return <div> This is my component: Helloworld</div>
 }
}
 */
export default App;