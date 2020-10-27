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
          <h4 className="name">{this.state.userData.name}</h4>
          <h5 className="username">{this.state.userData.login}</h5>
          <p><text style={{fontWeight: "bold"}}>Location:</text> {this.state.userData.location}</p>
          <p><text style={{fontWeight: "bold"}}>User Profile:</text> {this.state.userData.html_url}</p>
          <p><text style={{fontWeight: "bold"}}>Followers:</text> {this.state.userData.followers}</p>
          <ul>
            {this.state.followerData.map((item) => {
              return <li>{item.login}</li>
            })}
          </ul>
          <p><text style={{fontWeight: "bold"}}>Following:</text> {this.state.userData.following}</p>
          <p><text style={{fontWeight: "bold"}}>Bio:</text> {this.state.userData.bio}</p>
          <div className="img">
            <img src={this.state.userData.avatar_url} alt="User Avator"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default App;