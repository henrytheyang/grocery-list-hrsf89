import React from 'react';

const GroceryItem = (props) => (
  <div>{props.entry.description} {props.entry.quantity}</div>
)

export default GroceryItem;