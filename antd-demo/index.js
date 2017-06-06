import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
const { RangePicker } = DatePicker;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  disabledDate(current){
  	if(current.valueOf() > Date.UTC(2017,8,1,0,0,0)){
  		return true
  	}
  	if(current.valueOf() < (Date.now() - "86400000")){
  		return true
  	}
  }

  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <RangePicker onChange={value => this.handleChange(value)} disabledDate={this.disabledDate} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));