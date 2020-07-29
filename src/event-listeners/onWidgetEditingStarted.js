import core from 'core';
import actions from 'actions';
import { PRIORITY_ONE } from 'constants/actionPriority';
import defaultTool from 'constants/defaultTool';

export default dispatch => () => {
  core.setToolMode(defaultTool);
  dispatch(actions.setToolbarGroup('toolbarGroup-View'));
  dispatch(actions.disableElements(['customRibbonsContainer'], PRIORITY_ONE));
  dispatch(actions.enableElements(['endWidgetEditingButton'], PRIORITY_ONE));
  dispatch(actions.setCustomElementOverrides('toggleNotesButton', { disabled: true }));
  dispatch(actions.setCustomElementOverrides('printButton', { disabled: true }));
  dispatch(actions.setCustomElementOverrides('downloadButton', { disabled: true }));
};