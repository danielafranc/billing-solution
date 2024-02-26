import React, { useState } from 'react';
import { MenuItem, TextField, Typography } from '@mui/material';
import InputField from '../InputField';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
} from '@dnd-kit/core';import Droppable from '../drag-and-drop/Droppable';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import Draggable from '../drag-and-drop/Dragable';
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';

const Step3 = () => {

  const [selectOptions, setSelectOptions] = useState({
    languages: [
      { code: 'de', label: 'Deutsch' },
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Español' },
      { code: 'fr', label: 'Français' },
      { code: 'it', label: 'Italiano' }
    ],
    projectProfiles: [
      { code: 'P001', label: 'Website Redesign Project' },
      { code: 'P002', label: 'Product Development Initiative' },
      { code: 'P003', label: 'Marketing Campaign Launch' },
      { code: 'P004', label: 'Supply Chain Optimization Project' },
      { code: 'P005', label: 'New Office Construction' }
    ],
    lineItemCodes: [
      { label: 'STEEL001', code: 'Steel Sheet' },
      { label: 'ALUM001', code: 'Aluminum Plate' },
      { label: 'COPPER001', code: 'Copper Wire' },
      { label: 'PLASTIC001', code: 'Plastic Pellets' },
      { label: 'GLASS001', code: 'Glass Panels' }
    ],
    wbseData: [
      { code: 'WBSE001', label: 'WBSE 001' },
      { code: 'WBSE002', label: 'WBSE 002' },
      { code: 'WBSE003', label: 'WBSE 003' },
      { code: 'WBSE004', label: 'WBSE 004' },
      { code: 'WBSE005', label: 'WBSE 005' }
    ],
    materialCodes: [
      { code: 'MC001', label: 'Steel Sheet' },
      { code: 'MC002', label: 'Aluminum Plate' },
      { code: 'MC003', label: 'Copper Wire' },
      { code: 'MC004', label: 'Plastic Pellets' },
      { code: 'MC005', label: 'Glass Panels' }
    ],
  });

  //With this state we define the textfield types 

  const [items, setItems] = useState([
    { id: 'languages', label: 'Languages', type: 'select' },
    { id: 'projectProfiles', label: 'Project Profiles', type: 'text' },
    { id: 'lineItemCodes', label: 'Line Item Codes', type: 'select' },
    { id: 'wbseData', label: 'WBSE Data', type: 'select' },
    { id: 'materialCodes', label: 'Material Codes', type: 'text' },
    { id: 'materialSales', label: 'Material sales code', type: 'text' },
    { id: 'quantity', label: 'Quantity', type: 'text' },
    { id: 'tax', label: 'Tax', type: 'text' },
    { id: 'amount', label: 'Amount', type: 'text' },
  ]);


  //These are the sensors for the DnD, they allow the text fields to be 
  //manipulable, other wise we could not write inside of them
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    } 
  }
  
  return (
 
    <>
    <Typography sx={{ mb: 1.5}}>WBSE number</Typography>
    <DndContext 
    onDragEnd={handleDragEnd}
    sensors={sensors}
    collisionDetection={closestCenter}
    modifiers={[restrictToVerticalAxis]}>
      <Droppable>
        <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
        > 
      
      {/* <div className=''> */}
      <div className='grid grid-cols-2 gap-4'>
  {items.map((item) => (
    <div key={item.id}>
      {item.type === 'select' ? (
        <Draggable key={item.id} id={item.id}>
          <TextField
            fullWidth
            id={item.id}
            label={item.label}
            select
          >
            {/* Define the options for the dropdowns, we map through the selectOptions
            in the position of the current item */}
            {selectOptions[item.id].map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Draggable>
      ) : (
        <Draggable key={item.id} id={item.id}>
          <TextField
            fullWidth
            id={item.id}
            label={item.label}
          />
        </Draggable>
      )}
    </div>
  ))}
</div>


        </SortableContext>
      </Droppable>
   </DndContext>

    </>
   
  )
}

export default Step3