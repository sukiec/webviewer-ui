import core from 'core';
import { PRIORITY_ONE } from 'constants/actionPriority';
import actions from 'actions';

export default dispatch => () => {
  const annotManager = core.getAnnotationManager();
  const hasWidgets =
    annotManager.getAnnotationsList().filter(annot => annot instanceof Annotations.WidgetAnnotation).length > 0;

  if (hasWidgets) {
    dispatch(actions.enableElements(['startWidgetEditingButton'], PRIORITY_ONE));
  }
};
