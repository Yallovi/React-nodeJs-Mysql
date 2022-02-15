import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";


let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.authReducer.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            !this.props.isAuth && <Redirect to="/login" />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};