import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: 0,
    }
  }

  enterDescription (e) {
    this.setState({
      description: e.target.value
    });
  }

  enterQuantity (e) {
    this.setState({
      quantity: e.target.value
    });
  }

  render (props) {
    return (
      <div>
        <div>
          Description: <input type="text" value={this.state.description} onChange={this.enterDescription.bind(this)} />
        </div>
        <div>
          Quantity: <input type="text" value={this.state.quantity} onChange={this.enterQuantity.bind(this)}/>
        </div>
        <div>
          <button onClick={() => {this.props.modifyList(this.state.description, this.state.quantity) }}>Add Grocery</button>
        </div>
        <div>
          <button onClick={() => {this.props.deleteList()}} >Delete List</button>
        </div>
      </div>
    );
  }
}

export default AddGrocery;

