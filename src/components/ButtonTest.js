import React from 'react';
import { Button } from 'antd';

class ButtonTest extends React.Component {
    constructor(props) {
        super(props)


        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(){
        this.props.s2(this)
    }
    render() {

        return (
            <div className="task__button-test button-test">
                <Button type="primary button-test__btn" onClick={this.handleClick}>
                    <strong className="button-test__title">Проверить ответ</strong>
                    <p className="button-test__text">Попытка {this.props.sumTest} из 3</p>
                </Button>
            </div>
        );
    }
}

export default ButtonTest;
