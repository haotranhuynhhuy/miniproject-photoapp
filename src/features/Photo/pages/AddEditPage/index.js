import React from 'react';
import Banner from "../../../../components/Banner"
import Images from '../../../../constants/images';
import PhotoForm from '../../components/PhotoForm';
import './AddEditPage.scss'
const AddEditPage = () => {
    return (
        <div className='photo-edit'>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.PINK_BG} />
            <div className='photo-edit__form'>
                <PhotoForm />
            </div>
        </div>
    )
}

export default AddEditPage