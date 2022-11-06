import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state={
    input:"",
    result:''
  }
inputHandle = event =>{
  this.setState({
    input:event.target.value
  })
}



bubbleSort = () =>{
  const wordArray = Array.from((this.state.input.trim().split(',')), Number);
  for(let i = 0; i< wordArray.length; i++){
    for(let j = 0; j < (wordArray -i -1); j++){
      if(wordArray[j] > wordArray[j + 1]){
        let temp = wordArray[j]
        wordArray[j] = wordArray[j + 1]
        wordArray[j+1] = temp
      }
    }
  }
  return wordArray
}
  
sortHandle = () =>{
  this.setState({
    result:this.bubbleSort(this.state.input)
  })
}

  render(){
    return(
      <div className="App">
      <header className="App-header">
      <h1>Array Sorting</h1>
      <main>
        <input type="text" placeholder='Enter array' value={this.state.input} onChange={this.inputHandle} />
        <button type='submit' onClick={this.sortHandle}>Sort</button>
        <p>Bubble Sort Results: {this.state.result}</p>
        <p>Selection Sort Results: </p>
      </main>
        
      </header>
    </div>

    )
  }
}

export default App;
