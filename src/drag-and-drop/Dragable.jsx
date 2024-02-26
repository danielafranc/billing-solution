import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Draggable = (({children, ...props}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: props.id});
  console.log('useSortable: ', props.id);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
//Iterate over each the children to treat each one separately so it doesnt group all of them
  const draggableChildren = React.Children.map(children, (child) => {
    return (
      <div 
      ref={setNodeRef} 
      style={style} 
      {...listeners} 
      {...attributes}>
      {child}
    </div>
    )
  })
  
  return draggableChildren;
});

export default Draggable;