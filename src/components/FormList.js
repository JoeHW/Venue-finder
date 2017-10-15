import React, { Component } from 'react';
import Datatable from './Datatable';

class FormList extends Component {

constructor(props){
  super(props);
  this.state = {
    category: "",
    capacity: "",
    userSelections: []

}

 this.categorySubmit = this.categorySubmit.bind(this);
 this.capacitySubmit = this.categorySubmit.bind(this);
 this.selectionCheck = this.selectionCheck.bind(this);
}

selectionCheck = (selection) => {
this.setState({userSelections : [selection, ...this.state.userSelections]});
  console.log(this.state.userSelections);
}


categorySubmit = (e) => {
  this.setState({category: e.target.value })
}

capacitySubmit = (e) => {
  this.setState({capacity: e.target.value })
}

render(){

 return(
   <div>
    <label>
    Select category:
      <select className="drop" onChange={this.categorySubmit}>
        <option value="hotel">Hotel</option>
        <option value="restaurant">Restaurant</option>
        <option value="venue">Venue</option>
        <option value="museum">Museum</option>
      </select>
      </label>
  <label>

  Select capacity:
    <select className="drop" onChange={this.categorySubmit}>
      <option value="hotel">20 - 30</option>
      <option value="restaurant">30 - 70</option>
      <option value="venue">100 - 200</option>
      <option value="museum">300 - 500</option>
    </select>
    </label>
  <Datatable products={this.props.products} />
</div>
)}

}

export default FormList;
