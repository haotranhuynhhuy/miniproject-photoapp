import React from 'react';
import PropTypes from 'prop-types'
import { Formik, Form, FastField } from 'formik'
import { FormGroup, Button, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import InputField from '../../../../custom-field/InputField';
import SelectField from '../../../../custom-field/SelectField';
import RandomPhotoField from '../../../../custom-field/RandomPhotoField';
import * as yup from 'yup'
import { useParams } from 'react-router-dom';
const PhotoForm = (props) => {
    // const initialValue = {
    //     id: Math.trunc(Math.random() * 2000),
    //     title: '',
    //     categoryId: null,
    //     photo: ''
    // }
    const {initialValues} = props
    const {photoId} = useParams()

    const schema = yup.object().shape({
        title: yup.string().required('This field is required'),
        categoryId: yup.number().required('This field is required').nullable(),
        photo: yup.string()
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit ={props.onSubmit}
        >
            {
                formikProps => {
                    //props ở trong Formik 
                    const {isSubmitting} = formikProps
                    
                    return (
                        <Form>
                            <FastField
                                name='title'
                                component={InputField}

                                label='Title'
                                placeholder='Wow nature'
                            />

                            <FastField
                                name='categoryId'
                                component={SelectField}

                                label='Category'
                                placeholder='What is your category'
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField 
                                name='photo'
                                component={RandomPhotoField}

                                label="Photo"
                            />
                            

                            <FormGroup>
                                <Button type='submit' color='primary'>
                                    {isSubmitting && <Spinner size={'sm'} />}
                                     {photoId?" Update": ' Add to album'}</Button>
                            </FormGroup>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}
export default PhotoForm