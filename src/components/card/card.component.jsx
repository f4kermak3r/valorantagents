import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.agent.uuid}>
        <img
          className={`agents-images`}
          alt={`agent ${this.props.agent.displayName}`}
          src={`/images/${this.props.agent.uuid}.png`}
        />
        <h2>{this.props.agent.displayName}</h2>
      </div>
    );
  }
}

export default Card;
