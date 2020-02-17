import React, { Component } from "react";
import Sunset from "./components/Sunset/Sunset";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import sunsets from "./sunsets.json";
import         "./components/Header/Header.css";
import         "./components/Wrapper/Wrapper.css";




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
        this.setState(<div>"Test"</div>);
      });
    }
    this.state.sunsets.forEach(sunset => {
      sunset.count = 0;

    })
   //--
  //  this.setState(<div>"Test"${this.state.test}</div>);
  //  this.setState({score: 0});
   //--
    alert(`You lose, try again \nscore: ${this.state.score}`);
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
        <div>
          <h1 className="header-click" id="head">Click an image to start and do not click more than once.</h1>
        </div>
        <Header test={this.state.test} score={this.state.score} highscore={this.state.highscore}>Memory Game</Header>
        {this.state.sunsets.map(sunset => (
          <Sunset
            clickCount={this.clickCount}
            id={sunset.id}
            key={sunset.id}
            image={sunset.image}
            test={sunset.test}
          />
         
        ))}
      </Wrapper>
      
    );
  }
}







export default App;
