import React, { Component } from 'react';
import './Sticker.css';

class Sticker extends Component {
  render() {
    const { title, emoji, color, dark, size } = this.props;
    const containerClass = "Sticker" + (dark ? " Sticker-dark" : "");
    return (
      <div className={containerClass} style={{backgroundColor: color}}>
        <div className="Sticker-header">
          Hi, I can help with...
        </div>
        { emoji ? <div className="Sticker-emoji">{emoji}</div> : null }
        <div className="Sticker-title" style={{fontSize: size, height: emoji ? "30%" : "55%"}}>
          {title || ""}
        </div>
      </div>
    );
  }
}

export default Sticker;
