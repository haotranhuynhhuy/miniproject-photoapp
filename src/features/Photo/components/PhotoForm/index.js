import React from 'react';
import { Formik, Form, FastField } from 'formik'
import { FormGroup, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import InputField from '../../../../custom-field/InputField';
import SelectField from '../../../../custom-field/SelectField';
import RandomPhotoField from '../../../../custom-field/RandomPhotoField';

const PhotoForm = (props) => {
    const initialValue = {
        title: '',
        categoryId: null,
        photo: ''
    }
    return (
        <Formik
            initialValues={initialValue}
            onSubmit ={val => console.log('Value', val)}
        >
            {
                formikProps => {
                    const {values} = formikProps
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
                                name='imageUrl'
                                component={RandomPhotoField}

                                label="Photo"
                            />
                            

                            <FormGroup>
                                <Button type='submit' color='primary'>Add to album</Button>
                            </FormGroup>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
PhotoForm.propTypes = {
}
export default PhotoForm