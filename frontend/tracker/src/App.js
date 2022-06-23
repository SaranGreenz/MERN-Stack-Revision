import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch('https://saran-hogwarts-backend.herokuapp.com/getStudents')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <>
        {this.data.map((d) => (
          <p key={d._id}>{d.Name}</p>
        ))}
      </>
    );
  }
}

export default App;
