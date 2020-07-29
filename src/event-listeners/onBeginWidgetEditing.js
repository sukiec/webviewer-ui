import core from 'core';
import actions from 'actions';
import { PRIORITY_THREE } from 'constants/actionPriority';
import defaultTool from 'constants/defaultTool';

export default dispatch => () => {
  core.setToolMode(defaultTool);
  dispatch(actions.setToolbarGroup('toolbarGroup-View'));
  dispatch(actions.disableElements(['ribbons'], PRIORITY_THREE));
  dispatch(actions.enableElements(['endWidgetEditingButton'], PRIORITY_THREE));
};