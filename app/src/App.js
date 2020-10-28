import React from 'react';
import axios from 'axios';
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
        // console.log(res.data)
        const data = res.data
        this.setState({
          followerData: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="app">
        <h1>Github Cards</h1>
        <div className="card">
          <div className="img">
            <img src={this.state.userData.avatar_url} alt="User Avator"></img>
          </div>
          <div className="info">
            <h4 className="name">{this.state.userData.name}</h4>
            <h5 className="username">{this.state.userData.login}</h5>
            <p><span>Location:</span> {this.state.userData.location}</p>
            <p><span>User Profile:</span> {this.state.userData.html_url}</p>
            <p><span>Followers:</span> {this.state.userData.followers}</p>
            <ul className="list">
              {this.state.followerData.map((item) => {
                return <li key={item.id}>{item.login}</li>
              })}
            </ul>
            <p><span>Following:</span> {this.state.userData.following}</p>
            <p><span>Bio:</span> {this.state.userData.bio}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;