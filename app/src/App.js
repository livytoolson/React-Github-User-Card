import React from 'react';
import axios from 'axios';
// import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/livytoolson')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="App">

      </div>
    )
  }
}

export default App;
