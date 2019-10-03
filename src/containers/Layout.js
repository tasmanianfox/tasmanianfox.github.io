import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import layoutActions from '../actions/layout';
import Layout from '../components/Layout';

const mapStateToProps = state => {   
    return {
        ...state.layout,
    };
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(layoutActions, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Layout);