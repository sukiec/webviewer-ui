import classNames from 'classnames';
import { connect } from 'react-redux';

import Button from 'components/Button';

import './ActionButton.scss';

const mapStateToProps = (state, { isNotClickableSelector, className }) => ({
  className: classNames('ActionButton', {
    [className]: !!className,
  }),
  disabled: isNotClickableSelector && isNotClickableSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    ownProps.onClick(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
