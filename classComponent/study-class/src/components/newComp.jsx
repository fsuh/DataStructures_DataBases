import React, {Component} from 'react';
import BellA from './BellA.png';
import BellB from './BellB.png';

class NewComp extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Call me Fuhsuh",
         sub:"subscribe",
         imgURL:BellB
      }
    }

    buttonChange=()=>{
        this.setState({
            message:"Hit the bell Icon to join me",
            sub:"subscribed"
        })
    }

    imgChange=()=>{
        this.setState({
            message:"thanks for joining me",
            imgURL:BellA
        })

    }


    styles={
        fontSyle:"italic",
        color:"purple"
      }

    render(){
        return(
            <div className='App'>
            <h3 style={this.styles}>{this.state.message}</h3>
            <button onClick={this.buttonChange}>{this.state.sub}</button>
            <p>
                <img style={{width:'30px', height:'30px'}}src={this.state.imgURL} alt='' onClick={this.imgChange}/>
            </p>


            </div>

        )
    }
}

export default NewComp;