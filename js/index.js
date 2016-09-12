"use strict";

//textbox where user can write input
var TextBox = React.createClass({
  displayName: "TextBox",

  //set initial state of value
  getInitialState: function getInitialState() {
    return {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Developed by Malek](http://malekdev.com)*   - Powered by React'
    };
  },

  //update value
  updateVal: function updateVal(newVal) {
    this.setState({
      value: newVal
    });
  },

  //update text
  updateText: function updateText() {
    //getting user text typed in from refs
    var newVal = this.refs.inputVal.value;
    //updating the value
    this.updateVal(newVal);
  },

  //value that gets stored for what user types
  render: function render() {
    return React.createElement(
      "div",
      { className: "text" },
      React.createElement("textarea", { type: "text", ref: "inputVal", value: this.state.value, onChange: this.updateText }),
      React.createElement(MarkBox, { textVal: this.state.value })
    );
  }
});

//markdown box that outputs marked text as user types
var MarkBox = React.createClass({
  displayName: "MarkBox",

  //function that takes value of inputted text and marks it down
  markUp: function markUp(textVal) {
    var markUp = marked(textVal, { sanitize: true });
    return { __html: markUp };
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "mark" },
      React.createElement("span", { dangerouslySetInnerHTML: this.markUp(this.props.textVal) })
    );
  }
});

ReactDOM.render(React.createElement(TextBox, null), document.getElementById('app'));