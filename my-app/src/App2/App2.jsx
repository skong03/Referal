import React from "react";
import Header from "../Header/Header";

export default class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, user: {} };
    }

    componentDidMount() {
        this.fetchUser(this.props.userId);
        this.fetchReleation(this.props.userId);
    }

    fetchUser(userid) {
        this.setState({isLoaded:true, user: [{"id":1,"companyid":"1","name":"bob","status":"new","externalid":"123e4567-e89b-12d3-a456-426655440000","email":"a@b.com","balance":"0.00","referalid":null,"contribution":null}]});
        // fetch("http://localhost:3000/user/" + userid)
        //     .then(res => res.json())
        //     .then((result) => {
        //         this.setState({ isLoaded: true, user: result })
        //     }, (e) => { console.log(e); })
    }

    fetchReleation(userid) {
        console.log("placehold:"+userid);
    }

    render() {
        let user = this.state.user[0];
        if (this.state.isLoaded) {
            return (
                <Header user={user}/>
                // <ReferGraph refers={refers}/>
            )
        } else {
            return (<div></div>);
        }
    }
}