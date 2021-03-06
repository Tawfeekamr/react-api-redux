import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    UNSAFE_componentWillMount() {
    }

    render() {

        // coming from mapStateToProps()
        const { user } = this.props;
        // const user = this.props.users.find((user) => {
        //    return  user.id === this.props.userId
        // });
        if(!user) {
            return null;
        }
       return <div className="header"> {user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);