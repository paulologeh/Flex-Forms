/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'


const EditableElement = (props) => {
  const { onChange } = props;
  const element = useRef();
  let elements = React.Children.toArray(props.children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  };
  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  });
  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
  return elements;
};

const Heading = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const [state, setState] = useState('Heading')
    const handleClick = () => {
        // onclick update the selected tool in the store with this
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, createdTools, updateCreated)
    }

    const handleKeys = (event) => {
        if (event.keyCode === 46)
        {
            props.deleteFromStore(props.id, createdTools, updateCreated)   
        }
    } 

    const handleChange = (value) => setState(value)

    useEffect(
        () => {
            let newContext = JSON.parse(JSON.stringify(createdTools))
            for (let i in newContext.tools)
            {
                if (newContext.tools[i].key === props.id)
                {
                    newContext.tools[i].toolValue = state.slice()
                    updateCreated(newContext)
                    break
                }
            }
        }, [state]
    )

    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            onClick={handleClick}
            onKeyDown={handleKeys}
        >
            <EditableElement onChange={handleChange}>
                <h2>Heading</h2>
            </EditableElement>
        </Rnd>
    )
}

export default Heading
