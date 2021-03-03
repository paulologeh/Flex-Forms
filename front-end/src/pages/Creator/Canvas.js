import React from 'react'
import { Segment } from 'semantic-ui-react'
import 'App.css'


const Canvas = (props) => {

    return (
            <Segment className='canvas' padded>
                <div >
                {props.body}
                </div>
            </Segment>
    )
}

export default Canvas;