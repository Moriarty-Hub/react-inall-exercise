import React from 'react';

class Calculator extends React.Component {

    state = {
        display: "",
        operand1: "",
        operand2: "",
        operation: "",
        result: 0
    }

    handleOperationInput = event => {
        this.setState({operation: event.target.value});
        this.setState({display: this.state.display + event.target.value});
    }

    handleOperandInput = event => {
        if (this.state.operation === "") {
            this.setState({operand1: this.state.operand1 + event.target.value});
        } else {
            this.setState({operand2: this.state.operand2 + event.target.value});
        }
        this.setState({display: this.state.display + event.target.value});
    }

    handleClear = () => {
        this.setState({
            display: "",
            operand1: "",
            operand2: "",
            operation: "",
        });
    }

    handleGetResult = () => {
        let result = 0;
        switch (this.state.operation) {
            case "+":
                result = Number(this.state.operand1) + Number(this.state.operand2)
                break;
            case "-":
                result = Number(this.state.operand1) - Number(this.state.operand2)
                break;
            case "*":
                result = Number(this.state.operand1) * Number(this.state.operand2)
                break;
        }
        this.setState({display: result});
    }

    render() {
        return (
            <div class="calculator">
                <h1>在线计算器</h1>
                <input type="text" value={this.state.display}/>
                <button onClick={this.handleOperationInput} value="+">+</button>
                <button onClick={this.handleOperationInput} value="-">-</button>
                <button onClick={this.handleOperationInput} value="*">*</button>
                <button onClick={this.handleOperandInput} value="1">1</button>
                <button onClick={this.handleOperandInput} value="2">2</button>
                <button onClick={this.handleOperandInput} value="3">3</button>
                <button onClick={this.handleOperandInput} value="4">4</button>
                <button onClick={this.handleOperandInput} value="5">5</button>
                <button onClick={this.handleOperandInput} value="6">6</button>
                <button onClick={this.handleOperandInput} value="7">7</button>
                <button onClick={this.handleOperandInput} value="8">8</button>
                <button onClick={this.handleOperandInput} value="9">9</button>
                <button onClick={this.handleOperandInput} value="0">0</button>
                <button onClick={this.handleClear}>Clear</button>
                <button onClick={this.handleGetResult}>=</button>
            </div>
        );
    }
}

export default Calculator;
