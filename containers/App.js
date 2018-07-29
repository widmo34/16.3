import React from 'react';
import uuid from 'uuid';
import style from '../App.css';
import Title from '../src/components/Title';


class App extends React.Component{
    
    constructor(props){
        
        super(props);
        this.state = {
            data: [
                {
                    text: 'radek',
                    id: 1,
                },
                {
                    text: 'Bohdan',
                    id:2,
                }
            ]
        };
   
    }

    
    addTodo(val){
        val.preventDefault();  
        
        const todo = {
            text: val.target.value,
            id: uuid.v4(),
        }

        

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
                <Title list={this.state.data}/>

            </div>    
        )
    }


}

export default App;    





