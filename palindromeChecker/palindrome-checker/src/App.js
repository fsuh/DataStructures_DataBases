import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state={
    text:""
  }
  textHandle = event =>{
    this.setState({
      text:event.target.value
    })
  }
  
  checkPalindrome= () =>{
   const searchWord = this.state.text;
   const cleanWord = searchWord.toLowerCase().replace(/[\W_]/g, '');
   return cleanWord.split('').every((char, i) => char === cleanWord[cleanWord.length -1-i])

  }
  checkHandle = () =>{
    this.setState({
      result:this.checkPalindrome(this.state.text).toString()
    })
  }


  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1>Palindrome Checker</h1>
      </header>
      <main className='App-main'>
        <input  type="text" placeholder='Text here' value={this.state.text} onChange={this.textHandle}/>
        <button type="submit" className='btn' onClick={this.checkHandle}>Check</button>
        <p className='result'>{this.state.text === true? "is Palindrom": "is not Palindrom"}</p>
      </main> 
    </div>

    )
  };
}

export default App;
