import actions from 'actions';
import { PRIORITY_ONE } from 'constants/actionPriority';

export default dispatch => () => {
  dispatch(actions.enableElements(['ribbons'], PRIORITY_ONE));
  dispatch(actions.disableElements(['endWidgetEditingButton'], PRIORITY_ONE));
  dispatch(actions.setCustomElementOverrides('toggleNotesButton', { disabled: false }));
  dispatch(actions.setCustomElementOverrides('printButton', { disabled: false }));
  dispatch(actions.setCustomElementOverrides('downloadButton', { disabled: false }));
};