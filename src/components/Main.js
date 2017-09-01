import React from 'react';
import ButtonUse from './ButtonUse';
import Textarea from './TextArea';

class Main extends React.Component {
    constructor(props) {
        super(props)


        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(n){
        this.props.s(n)

    }
    render() {

        return (
            <main className="task__main main">
                <p className="main__text">Вспомните, что вы ответили на вопросы вначале урока</p>
                <p className="main__text">Сравните с тем, что узнали из урока</p>
                <p className="main__text">Краткий ответ запишите в тетради</p>
                <ButtonUse sum={this.props.sum} onClick={this.handleClick} />
                <Textarea />
            </main>
        );
    }
}

export default Main;
