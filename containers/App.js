import React from 'react';
import uuid from 'uuid';
import style from '../App.css';
import Title from '../src/components/Title';
import TodoForm from '../src/components/TodoForm'
import {hot} from 'react-hot-loader';


class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: [],
            test: 'radek',
           };
    }
    
    


    addTodo(val){
            
        const todo = {
            text: val,
            id: uuid.v4(),
        }
        console.log(this.state.tests);
        alert(this.state.test)
        

        const data = [...this.state.data, todo];
        this.setState({data});
         
    }

    showProp(a){
        alert(a);
     }   


    removeTodo(id){
        const reminder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: reminder});
    }

    render(){
        return(
            <div className={style.TodoApp}>
                Tutaj pojawią sie komponenty naszej aplikacji
                <Title list={this.state.data} />
                <TodoForm onSearch={this.addTodo} />
               

            </div>    
        )
    }
    

}

export default hot(module)(App);    





