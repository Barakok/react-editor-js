import React from 'react';
import { ReactEditorJS } from '@react-editor-js/core';
import { ClientEditorCore } from './client-editor-core';
function ReactEditorJSClient(props) {
    const factory = React.useCallback((config) => new ClientEditorCore(config), []);
    return React.createElement(ReactEditorJS, Object.assign({ factory: factory }, props));
}
export default ReactEditorJSClient;
//# sourceMappingURL=ReactEditorJSClient.js.map