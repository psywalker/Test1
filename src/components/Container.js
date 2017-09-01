import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: this.props.sum,
            sumTest: this.props.sumTest
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickTest = this.handleClickTest.bind(this);


    }
    handleClick(){
        const sums = this.state.sum;
        if(!sums) return;
        this.setState({
            sum: this.state.sum - 1
        })
    }
    handleClickTest(){
        const sumTests = this.state.sumTest;
        if(sumTests >= 3) return;

        this.setState({
            sumTest: this.state.sumTest + 1
        })
    }


    render() {

        return (
            <div className="task">
                <div className="task__inner">
                    <Header sum={this.state.sum} />
                    <Main sum={this.state.sum} s={this.handleClick}/>
                    <Footer sumTest={this.state.sumTest} s2={this.handleClickTest}/>
                </div>
            </div>
        );
    }
}

export default Container;
