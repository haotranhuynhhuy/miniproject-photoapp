import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';

const MainPage = () => {
    return (
        <div>
            <Banner title='You Are My Sunshine' backgroundUrl={Images.ORANGE_BG}/>
            <Container className='text-center'>
                <Link to='/photos/add'>Add new photo</Link>
            </Container>
        </div>
    )
}
export default MainPage