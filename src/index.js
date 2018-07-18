import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myData from './data.json';

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
    return (<div className="responses-container">{responses}</div>);
}

class Question extends React.Component {
  render() {

    return (
      <div>
        <div>
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
        this.state = myData.questions;

    }
  render() {
    let questions = this.state;
    var questionComponents = Array(questions.length);
    for (var i=0;i<questions.length;i++) {
        questionComponents[i] = <Question question={questions[i]}/>
    }

    return (
      <div className="survey">
        <div className="question-container">
            {questionComponents}
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

