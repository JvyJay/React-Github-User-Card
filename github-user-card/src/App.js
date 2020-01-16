import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(`https://api.github.com/users/jvyjay`),
        axios.get(`https://api.github.com/users/jvyjay/followers`)
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          console.log(firstResponse.data, secondResponse.data);
          this.setState({
            user: [firstResponse.data],
            followers: secondResponse.data
          });
        })
      )
      .catch(error => console.log(error));
    // axios
    //   .get('https://api.github.com/users/jvyjay')
    //   .get('https://api.github.com/users/jvyjay/followers')
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({
    //       user: [res.data],
    //       followers: res.data
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  //   componentWillUnmount() {}

  //   componentDidUpdate() {
  //     console.log('CDU is running');
  //   }

  render() {
    return (
      <div className='container'>
        <div className='userCard'>
          {this.state.user.map(item => {
            return (
              <UserCard name={item.name} login={item.login} bio={item.bio} />
            );
          })}
        </div>
        <div className='followersCard'>
          <h2>Followers</h2>
          {this.state.followers.map(item => {
            return <p>{item.login}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
