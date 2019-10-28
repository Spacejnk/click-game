import React, { Component } from "react";
import Sunset from "./components/Sunset";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import sunsets from "./sunsets.json";



class App extends Component {
  // Setting this.state.sunsets to the sunsets json array
  state = {
    sunsets,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.sunsets.forEach(sunset => {
      sunset.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.sunsets.find((o, i) => {
      if (o.id === id) {
        if(sunsets[i].count === 0){
          sunsets[i].count = sunsets[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.sunsets.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.sunsets and render a sunsetSunset component for each sunset object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.sunsets.map(sunset => (
          <Sunset
            clickCount={this.clickCount}
            id={sunset.id}
            key={sunset.id}
            image={sunset.image}
          />
        ))}
      </Wrapper>
    );
  }
}





// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
