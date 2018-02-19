import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  modifyList (need, number) {
    console.log('Clicked');
    // for (var i = 0; i < this.state.list.length; i++) {
    //   if (this.state.list[i].description === need) {
    //     let copyOfList = JSON.parse(JSON.stringify(this.state.list));
    //     copyOfList[i].quantity = number;
    //     this.setState({
    //       list: copyOfList,
    //     })
    //   } else {
    //     let copyOfList = JSON.parse(JSON.stringify(this.state.list));
    //     copyOfList[need] = number;
    //     this.setState({
    //       list: copyOfList,
    //     })
    //   }
    // }
  }

  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <AddGrocery modifyList={this.modifyList.bind(this)/*Check if necessary*/}/>
        <GroceryList list={this.state.list}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));