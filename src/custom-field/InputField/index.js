import { FormGroup, Input, Label } from "reactstrap"
import PropTypes from 'prop-types'
const InputField = (props) => {
    const {field, form, 
            type,label,placeholder,disable} = props

        //4 thứ quan trong trong field
    const {name, value, onChange, onBlur} = field

    const {errors, touched} = form

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input 
            id={name}
            name={name} 
            value={value}
            onChange={onChange}
            onBlur={onBlur}

            type={type}
            placeholder={placeholder}
            isdisabled={disable}
            />
            {errors && touched && <p style={{color:'red', fontSize: '0.8rem'}}>{errors[name]}</p>}
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool
}

export default InputField