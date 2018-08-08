import React, { Component } from 'react';

const ListItem = function(props) {
  let ListType = "ul";
  if (props.item.gui && props.item.gui.type) {
    ListType = props.item.gui.type;
  }

  return (
    <li>
      {props.item.key &&
        <p>{props.item.key}:</p>
      }
      <ListType className={props.item.gui.className}>
        {
          props.item.values.map((item, index) => {
            if (item.values) {
              return (
                <ListItem
                  item = {item}
                />
              )
            } else {
              return (
                <li key={index}>{item}</li>
              )
            }
          })
        }
      </ListType>
    </li>
  )
}

export default ListItem;
