import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Container from './Container/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleButton = e => {
    const { name } = e.currentTarget;
    // console.log(e.currentTarget.name);
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  render() {
    console.log(this.state);
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      // >
      //   React homework template
      // </div>

      <Container>
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleButton} />
        <p>Statistics</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
        </ul>
      </Container>
    );
  }
};

export default App;
