import actions from 'actions';
import { PRIORITY_ONE } from 'constants/actionPriority';

export default dispatch => () => {
  dispatch(actions.enableElements(['customRibbonsContainer'], PRIORITY_ONE));
  dispatch(actions.disableElements(['endWidgetEditingButton'], PRIORITY_ONE));
};