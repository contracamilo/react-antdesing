import React from 'react';
import { Input } from 'formik-antd'
import './customImput.css';

import 'formik-antd/es/input/style';

const InputItem = (props) => {
    return (
        <div className="custom-input">
            <label>{props.label}</label>
            <Input {...props} />
        </div>
    );
}

export default InputItem;
