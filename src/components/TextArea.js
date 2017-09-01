import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class Textarea extends React.Component {

    render() {

        return (
            <div className="task__textarea">
                <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
            </div>
        );
    }
}

export default Textarea;
