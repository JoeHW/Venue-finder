import React, {Component} from 'react';

class Datatable extends Component {

render() {
  const { products } = this.props;
return(
    <table className="table table-hover">
       <thead>
        <tr>
         <th>Category</th>
         <th>Name</th>
         <th>Capacity</th>
         <th>Cusine</th>
           </tr>
           </thead>
          <tbody></tbody>
           </table>

 )};
}



export default Datatable;
