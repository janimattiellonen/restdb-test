import React, {Component, PropTypes} from 'react';
import * as DiscActions from '../../actions/DiscActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../Home';
import { List, Map} from 'immutable';

export default class HomeContainer extends Component {

    render() {
        const {discs} = this.props;

        return (
            <Home discs={discs}/>
        )
    }
}

HomeContainer.defaultProps = {
    discc: List()
};

function mapStateToProps(state) {
    return {
        discs: state.discs.discs
    };
}

function mapDispatchToProps(dispatch) {
        return { 
            discActions: bindActionCreators(DiscActions, dispatch)
        };
    }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);