import React from 'react';
import { Icon } from 'antd';

class Header extends React.Component {

    render() {

        return (
            <header className="task__header task-header">

                <div className="task-header__section task-header__icon-wrap">
                    <Icon className="icon" type="exclamation" />
                    <h1 className="task__title">Выполните задание</h1>
                </div>

                <div className="task-header__section">
                    <div className="task__sum-score">
                        {this.props.sum} балла
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;
