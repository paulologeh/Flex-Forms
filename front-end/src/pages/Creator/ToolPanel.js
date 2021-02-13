import React from 'react'
import {Segment, Container, Input, Button} from 'semantic-ui-react'


const ToolPanel = () => {

    return (
        <Segment
            color='blue'
            inverted
            padded
            
        >
            <Container>
                <label>ID:</label>
                <br/>
                <label>Label</label>
                <Input fluid type="text" size="small"  />
                <label>Tooltip</label>
                <Input fluid type="text" size="small" />
                <br/>
                <Button  negative size='tiny'>Delete</Button>
            </Container>
        </Segment>
    )
}

export default ToolPanel;