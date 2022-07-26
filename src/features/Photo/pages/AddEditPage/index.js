import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Banner from "../../../../components/Banner"
import Images from '../../../../constants/images';
import PhotoForm from '../../components/PhotoForm';
import { addPhoto, updatePhoto } from '../../photoSlice';
import './AddEditPage.scss'

const AddEditPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const photos = useSelector(state => state.photo)
    const editedPhoto = photos.find(x => x.id === +photoId);


    const initialValues = isAddMode
        ?
        {
            id: Math.trunc(Math.random() * 2000),
            title: '',
            categoryId: null,
            photo: ''
        }
        : editedPhoto



    const handleSubmit = (values) => {
        console.log('Form submit', values)
        if (isAddMode) {
            setTimeout(() => {
                const action = addPhoto(values)
                dispatch(action);
                history.push('/');
            }, 2000)
        } else {
            setTimeout(() => {
                const action = updatePhoto(values)
                dispatch(action);
                history.push('/');
            }, 2000)
        }
    }



    return (
        <div className='photo-edit'>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.PINK_BG} />
            <div className='photo-edit__form'>
                <PhotoForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default AddEditPage