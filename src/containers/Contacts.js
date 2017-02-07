import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from '../components/Contacts';
import { onContactDetails } from '../actions/AppAction';

const mapStateToProps = state => ({
  activedContact: state.app.get('activedContact'),
  contacts: state.app.get('contacts'),
  isLoading: state.app.get('isLoading'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onContactDetails,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(
  {}, ownProps, stateProps, dispatchProps
);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Contacts);
