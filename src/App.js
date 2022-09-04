import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      agents: [],
      searchField: "",
    };
    console.log("constructor happening");
  }

  componentDidMount() {
    fetch("https://valorant-api.com/v1/agents")
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { agents: users.data };
        })
      );
    console.log("component happening");
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { agents, searchField } = this.state;
    const { onSearchChange } = this;

    const fAgents = agents.filter((agent) => {
      return agent.displayName.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search agents"
          className="search-box"
        />
        <CardList agents={fAgents} />
      </div>
    );
  }
}

export default App;
