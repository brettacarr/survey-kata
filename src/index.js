import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//SPIKE


function RadioButtonResponse(question_id, response_option) {
    return (
        <div>
            <input type="radio" value={response_option.response_id} name={question_id}></input>
            <label>{response_option.response_id}. {response_option.option_text}</label>
        </div>

    );
}

function RadioButtonResponseGroup(props) {
    var responses = Array(props.question.response.response_options);
    for (var i=0;i<props.question.response.response_options.length;i++) {
        responses[i] = RadioButtonResponse(props.question.question_id, props.question.response.response_options[i])
    }
    return (<div>{responses}</div>);
}

class Question extends React.Component {
  render() {

    return (
      <div>
        <div className="board-row">
            {this.props.question.sequence}. {this.props.question.question}
          <RadioButtonResponseGroup question={this.props.question}/>
        </div>
      </div>
    );
  }


}

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "question_id": "q1",
            "sequence": "1",
            "question": "How many buns in a bakers dozen?",
            "response" : {
                "type": "single-choice",
                "response_options": [
                    {
                        "response_id": "A",
                        "option_text": "10"
                    },
                    {
                        "response_id": "B",
                        "option_text": "11"
                    },
                    {
                        "response_id": "C",
                        "option_text": "12"
                    },
                    {
                        "response_id": "D",
                        "option_text": "13"
                    }
                ]
            }
        }
    }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Question question={this.state}/>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Survey />,
  document.getElementById('root')
);

