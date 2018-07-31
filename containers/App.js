import React from 'react';
import uuid from 'uuid';
import style from '../App.css';
import Title from '../src/components/Title';
import TodoForm from '../src/components/TodoForm'
import {hot} from 'react-hot-loader';
import TodoList from '../src/components/TodoList';



class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data : [
                ]
            }
            this.addTodo = this.addTodo.bind(this);
            this.removeTodo = this.removeTodo.bind(this);

        }                        
        
    
    

    
    addTodo(val){
             
        const todo = {
            text: val,
            id: uuid.v4(),
        }
        console.log(todo);

        const data = [...this.state.data, todo];
        this.setState({data});
         
    }

    removeTodo(id){
        const reminder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: reminder});
    }

    render(){
        return(
            <div className={style.TodoApp}>
                Tutaj pojawią sie komponenty naszej aplikacji
                <Title list={this.state.data} remove={this.removeTodo} />
                <TodoForm onSearch={this.addTodo} />
                 
              
          
               

            </div>    
        )
    }
    

}

export default hot(module)(App);    





