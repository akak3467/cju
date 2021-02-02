import React, { Component } from 'react';

 
 class Counter extends Component {
     constructor(props) {
         super(props);
         this.state = {
            number: 0,
            fixedNumer: 0
         };
 } 
 render() {
     const { number,fixedNumer} = this.state;
     return (
         <div>
             <h1>{number}</h1>
             <h2>바뀌지 않는 값: {fixedNumer}</h2>
             <button
             onClick={() => {
                 this.setState({ number: number +1 });
             }}
             >
                 +1
             </button>
         </div>
     );
    }
 }
 export default Counter;