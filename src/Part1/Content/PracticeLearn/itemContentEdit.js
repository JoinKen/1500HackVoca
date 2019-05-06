import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

class itemContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sum: this.props.length,
      isActive: false
    };
  }

  onFix = (key) => {
    var html = this.props.info.contentenglish;
    var replaceHtml = '<input type="text" id=' + key + ' className="input-part1" onChange={this.onHandleChangeFinal} maxLength="16" />'.toString();
    // html = html.map(html[0] => {
    //   return html[0].replace('123', replaceHtml);
    // });
    return html.replace('123', replaceHtml);
  }
  render() {
    return (
      <div>
        <div className="col-md-2 actor-part1">
          <p>{this.props.info.name}</p>
        </div>
        <div className="col-md-10">
          <p>{ReactHtmlParser(this.onFix(this.props.keys))}</p>
          <input type="text"
            id={this.props.keys}
            className="input-part1"
            onChange={this.onHandleChangeFinal}
            maxLength="16" />
        </div>
      </div>
    )
  }

  setStyle = () => {
    return ({
      boderColor: 'green',
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    });
  }

  onHandleChangeFinal = (event) => {
    var target = event.target;
    if (target.value != null) {
      //B1. So sanh chữ trong input có tồn tại ở trong list voca không
      //B2. Nếu tồn tại thì kiểm tra id của Voca đó có bằng id của input không 
      //Nếu bằng thì sucesss nếu không thì error
      // var idInputVoca = this.state.Vocas.findIndex(target.value)//B1
      var idInput = this.props.vocas.findIndex(item => item.voca === target.value);
      if (idInput !== -1 &&
        idInput == target.id) {
        // Nếu có tồn tại thì kiểm tra xem id đó có bằng với id của voca không
        //Vaf set attribute
        console.log("AS");
        this.setStyle();
      }
    } else {
    }
  }
}
export default itemContent;