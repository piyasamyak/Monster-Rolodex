import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This runs the first time the component gets placed into the DOM, it only happens once
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        () => {

        }
      ));
  }


  onSearchChange = event => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
