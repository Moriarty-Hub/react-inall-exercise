import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            display: "Start"
        }
    }

    handleTimeSet = (event) => {
        this.setState({
            seconds: parseInt(event.target.value)
        })
    }

    startCountDown = () => {

        this.timer = setInterval(() => {
            if (this.state.seconds === 0) {
                this.setState({
                    display: 'End'
                });
                clearInterval(this.timer)
            } else {
                this.setState({
                    seconds: this.state.seconds - 1,
                    display: this.state.seconds + ' Seconds'
                })
            }
            }, 1000);
    }

    render() {
        return (
            <div class="timer">
                <div class="title">
                    <h3>在线倒计时器</h3>
                </div>

                <div class="controller">
                    <div class="input">
                        <h4>设置时间:</h4><input type="text" onChange={this.handleTimeSet}/>
                        <h1>{this.state.display}</h1>
                        <button onClick={this.startCountDown}>Start</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Timer;
