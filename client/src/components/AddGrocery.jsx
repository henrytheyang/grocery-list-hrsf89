import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: 0,
    }
  }

  render (props) {
    return (
      <div>
        Description:
        Quantity:
        <button onClick={this.props.modifyList}>Update List</button>
        {/*<button onClick={() => {console.log('props = ', props)}}>Update List</button>*/}
      </div>
    );
  }
}

export default AddGrocery;

