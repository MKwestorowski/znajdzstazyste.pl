import React from 'react'
import {
    Navbar,
    Button,
    FormGroup,
    FormControl

} from 'react-bootstrap'



export default class Navigation extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brand</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Znajdz swojego stażyste" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
