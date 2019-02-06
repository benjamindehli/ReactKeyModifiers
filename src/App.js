import React, { Component } from 'react';

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

import ViewTab from './partials/ViewTab';

import style from './App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.keyDownFunction = this.keyDownFunction.bind(this);
    this.state = {
      views: {
        49: {
          character: 1,
          keyCode: 49,
          component: Home,
          name: 'home'
        },
        50: {
          character: 2,
          keyCode: 50,
          component: About,
          name: 'about'
        },
        51: {
          character: 3,
          keyCode: 51,
          component: Contact,
          name: 'contact'
        }
      },
      activeView: {
        character: 1,
        keyCode: 49,
        component: Home,
        name: 'home'
      } 
    }
  }
  setActiveView(view){
    this.setState({
      activeView: view
    });
  };
  keyDownFunction(event){
    if (this.state.views[event.keyCode]){
      this.setActiveView(this.state.views[event.keyCode])
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.keyDownFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyDownFunction, false);
  }
  renderActiveView() {
    const ActiveView = this.state.activeView.component;
    return <ActiveView />;
  }
  renderViewTabs() {
    const viewTabs = Object.keys(this.state.views).map(keyCode => {
      let view = this.state.views[keyCode];
      let active = view.keyCode === this.state.activeView.keyCode;
      return <ViewTab onClick={() => this.setActiveView(view)} key={view.keyCode} view={view} active={active}/>;
    });
    return <div className={style.viewTabs}>{viewTabs}</div>
  }
  render() {
    return (
      <div className="App">
      {this.renderActiveView()}
      {this.renderViewTabs()}
      </div>
      );
  }
}

export default App;
