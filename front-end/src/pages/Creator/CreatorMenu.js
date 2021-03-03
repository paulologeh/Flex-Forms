import React from 'react'
import { Menu, Image, Dropdown, Container} from 'semantic-ui-react'
import logo from 'assets/FlexFormsLogoNoText.png'
import { CREATOR, PREVIEW } from "navigation/CONSTANTS"

const CreatorMenu = (props) => {

    const handleClick = (e, data) => {
        let action
        if ('children' in data) action = data.children
        else action = data.text
        props.sendAction(action)
        console.debug('sent back action to parent', action)
    }

    return (
        <Menu
            fixed='top'
            secondary
            inverted
            color='blue'
        >
            <Container>
                <Menu.Item>
                    <Image src={logo} size='mini'/>
                </Menu.Item>
                <Dropdown item simple text='Menu'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='file outline' text='New' href={CREATOR}/>
                        <Dropdown.Item icon='folder open' text='Load Existing' onClick={handleClick}/>
                        <Dropdown.Item icon='save' text='Save' onClick={handleClick}/>
                        <Dropdown.Item icon='refresh' text='Clear Canvas' onClick={handleClick}/>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='Templates'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='wpforms' text='Application Form' onClick={handleClick}/>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    onClick={handleClick}
                    href={PREVIEW}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Preview
                </Menu.Item>
                <Menu.Item onClick={handleClick}> Publish Form </Menu.Item>
            </Container>
        </Menu>
    )
}

export default CreatorMenu;