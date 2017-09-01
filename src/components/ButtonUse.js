import React from 'react';
import { Button } from 'antd';


class ButtonUse extends React.Component {
    constructor(props) {
        super(props)


        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(){
        this.props.onClick(this)
    }
    render() {

        return (
            <div className="button-use">
                <Button type="primary button-use__btn" onClick={this.handleClick}>Использовать подсказку (-1 балл)</Button>
            </div>
        );
    }
}

export default ButtonUse;
