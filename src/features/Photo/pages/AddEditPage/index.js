import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Banner from "../../../../components/Banner"
import Images from '../../../../constants/images';
import PhotoForm from '../../components/PhotoForm';
import { addPhoto } from '../../photoSlice';
import './AddEditPage.scss'
const AddEditPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (values) => {
        console.log('Form submit', values)
        const action = addPhoto(values)
        dispatch(action);
        history.push('/');
    }

    return (
        <div className='photo-edit'>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.PINK_BG} />
            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default AddEditPage