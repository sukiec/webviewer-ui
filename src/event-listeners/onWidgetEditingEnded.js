import actions from 'actions';
import { PRIORITY_THREE } from 'constants/actionPriority';

export default dispatch => () => {
  dispatch(actions.enableElements(['customRibbonsContainer'], PRIORITY_THREE));
  dispatch(actions.disableElements(['endWidgetEditingButton'], PRIORITY_THREE));
};