import React from 'react'
import {
    Navbar,
    Button,
    FormGroup,
    FormControl,
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default connect(
    state => ({
        memberFetching: state.memberFetching

    }),
    dispatch => ({
        success: data => {
            console.log(data)
            dispatch({
                type: 'members/FETCH__SUCCESS',
                data: data})
        },

    })
)(
class Navigation extends React.Component {
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
                        <Link to={'/creatingaccount'}>Zaloguj się!</Link>
                </Navbar.Collapse>

            </Navbar>

        )
    }
}
)
