import React, { Component } from 'react'
import './App.css'
import CardList from './component/card-list/CardList'
import SearchBox from './component/search-box'

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }))
  }

  handleonChange = e =>{
    this.setState({ searchField : e.target.value })
  }

  render() {
    const { monsters, searchField} = this.state;
    const filterMonster = monsters.filter( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search monster" 
          handleonChange = {this.handleonChange}
        />
        <CardList monsters = {filterMonster} />
      </div>
    )
  }
}

export default App;