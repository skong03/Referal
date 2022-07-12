import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showForm: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handlePayment() {
        const value = document.getElementById("payment").value;
        console.log(value);
    }

    handleToggleClick() {
        this.setState({showForm: !this.state.showForm});
    }

    render() {
        let form;
        if (this.state.showForm)
            form = (<div>form</div>);
        else
            form = (<div></div>);

        return (
            <div>
                <h1>Hello , {this.props.user.name}</h1>
                <p>you referalId: {this.props.user.referalid || "docusign"}</p>
                <p>you email: {this.props.user.email}</p>
                <p>your contribution: {this.props.user.contribution || 0}</p>
                <p>your balance: {this.props.user.balance}</p>
                <div>
                    <input type="text" id="payment" name="payment" />
                    <button onClick={this.handlePayment}>pay subsription fee</button>
                </div>
                <button onClick={this.handleToggleClick}>ToggleInviteForm</button>
                {form}
            </div>
        );
    }
}