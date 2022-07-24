import React from 'react';
import PropTypes from 'prop-types';
import RandomPhoto from '../../components/RandomPhoto';
import { FormGroup, Label } from 'reactstrap';

const RandomPhotoField =(props)=>{
    const {field, form, label} = props;
    const {name, value, onBlur} = field;

    const handleChangeUrl = (newImageUrl) =>{
        form.setFieldValue(name, newImageUrl)
    }
    return(
        <FormGroup> 
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto 
            name={name}
            imageUrl={value}
            onImageUrlChange={handleChangeUrl}
            onImageUrlBlur={onBlur}
            />
        </FormGroup>
    )
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  
    label: PropTypes.string,
  };
export default RandomPhotoField;