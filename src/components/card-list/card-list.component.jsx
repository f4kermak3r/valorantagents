import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { agents } = this.props;
    return (
      <div className="card-list">
        {agents.map((agent) => {
          return <Card agent={agent} />;
        })}
      </div>
    );
  }
}

export default CardList;
