import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../photoSlice';

const MainPage = () => {
    const photos = useSelector(state => state.photo);
    const dispatch = useDispatch()
    const history = useHistory()

    const handlePhotoEditClick = (photo) =>{
        history.push(`/photos/${photo.id}`)
    }
    const handlePhotoRemoveClick = (photo) =>{
        const idPhoto = photo.id;
        const actions = removePhoto(idPhoto)
        dispatch(actions)
    }
    return (
        <div>
            <Banner title='You Are My Sunshine' backgroundUrl={Images.ORANGE_BG} />
            <Container className='text-center'>
                <div className='py-5'>
                    <Link to='/photos/add'>Add new photo</Link>
                </div>
                <PhotoList 
                photoList={photos}
                onPhotoEditClick={handlePhotoEditClick}
                onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    )
}
export default MainPage