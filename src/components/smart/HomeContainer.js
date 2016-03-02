import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../Home';

export default class HomeContainer extends Component {

    handleSubmit(data) {
        this.props.bookActions.createBook(data);
    }

    render() {

        return (
            <Home />
        )
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
        return { 
            
        };
    }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);