import React from 'react'
import { Form, Button } from 'antd';

export default function SubmitButton({ form, item, input, setItem }) {
    const [submittable, setSubmittable] = React.useState(false);

    const values = Form.useWatch([], form);

    const addNewTodo = () => {
        const updatedElement = { id: item.length + 1, name: input, completed: false };
        setItem([...item, updatedElement]);
        form.resetFields(); 
    };

    React.useEffect(() => {
        form 
           .validateFields()
            .then(
                () => {
                    setSubmittable(true)
                }
            )
            .catch(() => {
                setSubmittable(false)
            })
    }, [values])
  return (
    <Button  htmlType="submit" onClick={addNewTodo} className='App-input-container__input-top__button' validateTrigger="onBlur" disabled = {!submittable}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	        <path fill="white" d="M15.5 6H10V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5" />
        </svg>
    </Button>
  )
}
