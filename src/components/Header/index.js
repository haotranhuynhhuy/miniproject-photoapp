import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import {Row, Col, Container} from 'reactstrap';
import './Header.scss';
const Header = () =>{
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs="auto">
                        <a className="header__link header__title" 
                        href='/photos'
                        target="_blank"
                        rel='noonpener noreferrer'
                        >Photo App </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink className='header__link'  
                        to='/photos'
                        activeClassName='header__link--active'
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
export default Header