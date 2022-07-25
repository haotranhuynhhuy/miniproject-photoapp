
import Select from "react-select"
import { FormGroup, Label } from "reactstrap"
import PropTypes from 'prop-types'

const SelectField = (props) => {
    const { field, form,
        disabled, options, label, placeholder } = props

        //4 biến quan trọng nhất khi nhận từ field
        // name, value, onChange, onBlur
    const { name, value } = field
    const selectOption = options.find(option => option.value === value)

    const {errors, touched} = form
    const showError = errors[name] && touched[name];

    const handleChangeOption = (valueInOption) => {
        const selectedValue = valueInOption ? valueInOption.value : valueInOption;
        const setValueToField = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        //thay đổi value func onChange trong field
        field.onChange(setValueToField)

    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectOption}
                onChange={handleChangeOption}
                placeholder={placeholder}
                options={options}
                isdisabled={disabled}
            />
             {showError && <p style={{color:'red', fontSize: '0.8rem'}}>{errors[name]}</p>}
        </FormGroup>
    )
}
SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

export default SelectField