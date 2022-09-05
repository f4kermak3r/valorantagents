import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { agents } = this.props;
    return (
      <div className="card-list">
        {agents.map((agent) => (
          <div className="card-container" key={agent.uuid}>
            <img
              className={`agents-images`}
              alt={`agent ${agent.displayName}`}
              src={`/images/${agent.uuid}.png`}
            />
            <h2>{agent.displayName}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
