import actions from 'actions';
import { PRIORITY_ONE } from 'src/constants/actionPriority';

export default dispatch => () => {
  dispatch(actions.closeElements(['pageNavOverlay', 'notesPanel', 'searchPanel', 'leftPanel']));
  dispatch(actions.disableElements(['startWidgetEditingButton'], PRIORITY_ONE));
  dispatch(actions.setOutlines([]));
  dispatch(actions.setTotalPages(0));
};
