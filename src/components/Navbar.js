import React from 'react'
import {
    Navbar,
    Button,
    FormGroup,
    FormControl
} from 'react-bootstrap'
import {Link} from 'react-router-dom'



export default class Navigation extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/Homepage'}>Znajdz stażyste</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Znajdz swojego stażyste" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Szukaj</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
