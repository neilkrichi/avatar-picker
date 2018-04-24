import React, { Component } from 'react';
import './style.css';
import Avatar1 from './img/1.png'
import Avatar2 from './img/2.png'
import Avatar3 from './img/3.png'
import Avatar4 from './img/4.png'
import Avatar5 from './img/5.png'
import Avatar6 from './img/6.png'


let images = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: Avatar1,
      avatarState: 'inactive',
      isOpen: false
    }

    this.togglePopover = this.togglePopover.bind(this)
  }

  togglePopover(){
    this.setState({isOpen: !this.state.isOpen})
  }

  closePopOver() {
    if (this.state.isOpen) {
      this.setState({isOpen: false})
    }
  }

  renderPopOver(){
    if (this.state.isOpen) {
      return (
        <div className='popover'>
          <div className='arrow-up'></div>
          <div className='container'>
            <h3>Choose your avatar</h3>
            {images.map((avatar, key) => { return (
              <img
                alt="avatar"
                key={key}
                src={avatar}
                className={`avatar ${this.state.avatarState}`}
                onClick={() => {this.setState({activeImage: avatar, avatarState: 'active'}); this.closePopOver();}}/>
            )})}
          </div>
          </div>
      )
    }
    else {
      return(
        <div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='app' onClick={this.closePopOver.bind(this)}>
        <div className='container'>
          <img alt="activeAvatar" className='active-avatar' src={this.state.activeImage} onClick={this.togglePopover} />
        </div>
        {this.renderPopOver()}
      </div>
    );
  }
}

export default App;

/*
{
images.map((avatar, key) => { return (
<img className='avatar' key={key} src={Avatar1}/>

)})
}
*/
