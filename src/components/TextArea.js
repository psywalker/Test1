import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd';

const { TextArea } = Input;



const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (

    <div className="task__textarea">
        <TextArea {...input} type={type} placeholder={label}  autosize={{ minRows: 2, maxRows: 6 }} />
    </div>
)
const Textarea = (props) => {
    const { handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username"  component={renderField} label="Username"   />
        <Field
    name="firstName"
    component="input"
    type="textarea"
    placeholder="First Name"
        />
        </form>

    )
}
export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form

})(Textarea)
