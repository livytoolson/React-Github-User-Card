import React from 'react';
import axios from 'axios';

// import UserCard from './UserCard'
import './App.css';

class App extends React.Component {
  state = {
    userData: {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/livytoolson')
      .then(res => {
        // console.log(res.data)
        this.setState({
          userData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="App">
        <h1>{this.state.userData.name}</h1>
        <h5>{this.state.userData.login}</h5>
        <p>{this.state.userData.location}</p>
        <p>{this.state.userData.html_url}</p>
        <p>{this.state.userData.followers}</p>
        <p>{this.state.userData.following}</p>
        <p>{this.state.userData.bio}</p>
      </div>
    )
  }
}

export default App;
