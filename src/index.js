import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormList from './components/FormList';

class App extends Component {

 render() {
    return (
      <div className="wrapper">
      <FormList products={this.props.products}/>
      <div className="term">
      </div>
      </div>
    )};
}

const PRODUCTS = [
  {category: 'Hotel', capacity: 20, rooftop: true, name: 'Lex 49', neighborhood: 'Midtown', cuisine: "American", privateRoom: true, privateRoomCapacity: 15},
  {category: 'Hotel', capacity: 50, rooftop: true, name: 'Public', neighborhood: 'LES', cuisine: "Fusion", privateRoom: true, privateRoomCapacity: 50},
  {category: 'Hotel', capacity: 50 , rooftop: false, name: 'Park Avenue', neighborhood: 'Midtown', cuisine: "French", privateRoom: true, privateRoomCapacity: 30},
  {category: 'Restaurant', capacity: 400, rooftop: true, name: 'Raclette', neighborhood: 'LES', cuisine: "French", privateRoom: true, privateRoomCapacity: 6},
  {category: 'Restaurant', capacity: 100, rooftop: false, name: 'Casavo', neighborhood: 'UWS', cuisine: "Italian", privateRoom: false},
  {category: 'Restaurant', capacity: 200, rooftop: true, name: 'Lillies', neighborhood: 'Midtown', cuisine: "Southern", privateRoom: false},
  {category: 'Venue', capacity: 2000, rooftop: true, name: 'Moma', neighborhood: 'Soho', cuisine: "N/A", privateRoom: true, privateRoomCapacity: 45}
];

ReactDOM.render(<App products={PRODUCTS} />, document.querySelector('.container'));
