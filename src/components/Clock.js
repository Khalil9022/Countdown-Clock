import React, { Component } from "react";

class Clock extends Component {
    state = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    componentDidMount() {
        this.getTimeUntil(this.props.deadline)
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        // return num <10 ? '0' : num : num
        if (num < 10) {
            return '0' + num
        }
        return num
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        // console.log('time', time);
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / 1000 / 60) % 60)
        const hours = Math.floor(time / (1000 * 60 * 60) % 24)
        const days = Math.floor(time / (1000 * 60 * 60 * 24))

        // console.log('seconds', seconds, 'minuts', minutes, 'hours', hours, 'days', days);
        this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })
    }

    render() {
        // this.getTimeUntil(this.props.deadline)
        return (
            <div>
                <div className="Clock-days">{this.leading0(this.state.days)} days</div>
                <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
            </div>
        )
    }
}

export default Clock