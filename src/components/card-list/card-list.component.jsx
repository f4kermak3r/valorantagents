import { Component } from "react";

class CardList extends Component {
  render() {
    const { agents } = this.props;
    return (
      <div>
        {agents.map((agent) => (
          <h1>{agent.displayName}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
