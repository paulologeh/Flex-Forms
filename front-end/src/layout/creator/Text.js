import React, { useContext } from 'react'
import { Input } from 'semantic-ui-react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'

const Text = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const handleClick = (event) => {
        // onclick update the selected tool in the store with this
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, createdTools, updateCreated)
    }

    const handleKeys = (event) => {
        if (event.keyCode === 8 || event.keyCode === 46)
        {
         props.deleteFromStore(props.id, createdTools, updateCreated)   
        }
    } 

    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
        >
            <Input
                type='text'
                onClick={handleClick}
                onKeyDown={handleKeys}
                fluid
                readOnly
                value={""}
            />
        </Rnd>
    )
}

export default Text;
