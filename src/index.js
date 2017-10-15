import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Searchbar from './components/Searchbar';
import Datatable from './components/Datatable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }

 this.searchInput = this.searchInput.bind(this);

  }

searchInput = (event) => {
  this.setState({term: event.target.value});

}

  render() {
    return (
      <div className="wrapper">
      <Searchbar searchInput={this.searchInput}/>
      <div className="term">
      {this.state.term}
      </div>
      <Datatable products={this.props.products} />
      </div>
    )
  }


}

const PRODUCTS = [
  {category: 'Hotel', capacity: 20, rooftop: true, name: 'Lex 49', neighborhood: 'Midtown', cuisine: "American"},
  {category: 'Hotel', capacity: 50, rooftop: true, name: 'Public', neighborhood: 'LES', cuisine: "Fusion"},
  {category: 'Hotel', capacity: 50 , rooftop: false, name: 'Park Avenue', neighborhood: 'Midtown', cuisine: "French"},
  {category: 'Restaurant', capacity: 400, rooftop: true, name: 'Raclette', neighborhood: 'LES', cuisine: "French"},
  {category: 'Restaurant', capacity: 100, rooftop: false, name: 'Casavo', neighborhood: 'UWS', cuisine: "Italian"},
  {category: 'Restaurant', capacity: 200, rooftop: true, name: 'Lillies', neighborhood: 'Midtown', cuisine: "Southern"},
  {category: 'Venue', capacity: 2000, rooftop: true, name: 'Moma', neighborhood: 'Soho', cuisine: "N/A"}
];

ReactDOM.render(<App products={PRODUCTS} />, document.querySelector('.container'));
