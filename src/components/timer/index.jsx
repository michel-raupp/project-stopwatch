import React, { Component } from "react";
import stopwatch from '../../assets/stopwatch-img.png'
import btn from '../../assets/stopwatch-button2.png'
import { StyledTimer } from "./styles";

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'start',
            tempo: '00:00:00'
        };
        this.timer = null;
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);

    }

    start() {
        var state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'start';
        } else {
            this.timer = setInterval(() => {
                var state = this.state;
                state.numero += 0.1;

                // convert the number of seconds to minutes and seconds
                var minutes = Math.floor(state.numero / 60);
                var seconds = Math.floor(state.numero % 60);

                // add leading zeros to minutes, seconds and milliseconds
                minutes = minutes.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');
                var milliseconds = ((state.numero % 1) * 1000).toFixed(0).slice(-3, -1).padStart(1, '0');

                // update the state with the formatted time
                state.tempo = `${minutes}:${seconds}:${milliseconds}`;
                state.botao = 'PAUSE';
                this.setState(state);
            }, 100);
        }

        this.setState(state);
    }

    clear() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        var state = this.state;
        state.numero = 0;
        state.tempo = '00:00:00';
        state.botao = 'START';
        this.setState(state);
    }

    render() {
        return (
            <StyledTimer>

                <div className="title">
                    <h1>StopWatch project</h1>
                </div>

                <div className="links">
                    <a href="" className="github">GitHub {">"}</a>
                </div>
                <div className="organizar">
                    <img className="stopwatch" src={stopwatch} alt="" />
                    <p className="timer">{this.state.tempo}</p>
                    <div className="wrapper">

                        <a className="start-btn" onClick={this.start}>
                            <img className="start-img" src={btn} alt={this.state.botao} />
                            <p className="btn-txt start">{this.state.botao}</p>
                        </a>

                        <a className="clear-btn" onClick={this.clear}>
                            <img className="clear-img" src={btn} alt="clear timer" />
                            <p className="btn-txt clear">CLEAR</p>
                        </a>
                    </div>
                </div>
                <div className="background" />
            </StyledTimer>
        )
    }
}

export default Timer;