import React from 'react';
import ButtonTest from './ButtonTest';

class Footer extends React.Component {
    constructor(props) {
        super(props)


        this.handleClickTest = this.handleClickTest.bind(this);


    }
    handleClickTest(){
        this.props.s2(this)
    }
    render() {

        return (
            <div className="task__footer">
               <ButtonTest s2={this.handleClickTest} sumTest={this.props.sumTest}/>
            </div>
        );
    }
}

export default Footer;
