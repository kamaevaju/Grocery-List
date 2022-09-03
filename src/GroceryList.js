import { Component } from 'react';
import icon from './icon.png';

export class GroceryList extends Component{
    state= {
        userInput: '',
        groceryList: [],
    }

    onChangeEvent(e){
       this.setState({userInput: e})
    }

    addItem(input){
        if(input === ''){
            alert('Please enter an item!')
        }
        else{
        let listArray = this.state.groceryList; //отвечает за список продуктов
        listArray.push(input) //добавление в массив
        this.setState({groceryList: listArray, userInput: ''}) //userInput - для опустошения строки после добавления
        }
    }
    crossedWord(event){
        const li = event.target //при изменении с li, нужно отследить, прослушка
        li.classList.toggle('crossed') //добавление класса, toggle - обратимый класс
    }
    deleteItem(){
        let listArray = this.setState.groceryList;
        listArray = []; //опустошить массив, или прировнять длину массива к нулю
        this.setState({groceryList: listArray})
    }
    onFormSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
        <div>  
          <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text" 
                placeholder='What do you want to buy?'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} /> 
            </div>

            <div className='container'>
                <button className='btn add' onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index) => ( 
                    <li onClick={this.crossedWord} key={index}> <img src={icon} width="35px" alt='icon' /> {item}</li>
                ))} 
            </ul>

            <div className='container'>
                <button className='btn delete' onClick={() => this.deleteItem()}>Delete</button>
            </div>
          </form>
        </div> 
        )
    }
}
