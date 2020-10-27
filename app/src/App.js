import React from 'react';
import axios from 'axios';

// import UserCard from './UserCard'
import './App.css';

class App extends React.Component {
  state = {
    userData: {},
    followerData: []
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

    axios.get('https://api.github.com/users/livytoolson/followers')
      .then(res => {
        // console.log(res.data[0].login)
        this.setState({
          followerData: res.data[0].login
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="card">
        <h1 className="name">{this.state.userData.name}</h1>
        <h5 className="username">{this.state.userData.login}</h5>
        <p><text style={{fontWeight: "bold"}}>Location:</text> {this.state.userData.location}</p>
        <p><text style={{fontWeight: "bold"}}>User Profile:</text> {this.state.userData.html_url}</p>
        <p><text style={{fontWeight: "bold"}}>Followers:</text> {this.state.userData.followers}</p>
        <ul>
          <li>{this.state.followerData}</li>
        </ul>
        <p><text style={{fontWeight: "bold"}}>Following:</text> {this.state.userData.following}</p>
        <p><text style={{fontWeight: "bold"}}>Bio:</text> {this.state.userData.bio}</p>
      </div>
    )
  }
}

export default App;