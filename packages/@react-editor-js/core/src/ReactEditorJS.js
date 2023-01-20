var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
function ReactEditorJS(_a) {
    var { factory, holder, defaultValue, children, value, onInitialize } = _a, restProps = __rest(_a, ["factory", "holder", "defaultValue", "children", "value", "onInitialize"]);
    const memoizedHolder = React.useRef(holder !== null && holder !== void 0 ? holder : `react-editor-js-${Date.now().toString(16)}`);
    const editorJS = React.useRef(null);
    React.useEffect(() => {
        editorJS.current = factory(Object.assign(Object.assign({ holder: memoizedHolder.current }, (defaultValue && { data: defaultValue })), restProps));
        onInitialize === null || onInitialize === void 0 ? void 0 : onInitialize(editorJS.current);
        return () => {
            var _a;
            (_a = editorJS.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
    }, []);
    React.useEffect(() => {
        var _a;
        if (value) {
            (_a = editorJS.current) === null || _a === void 0 ? void 0 : _a.render(value);
        }
    }, [value]);
    return children || React.createElement("div", { id: memoizedHolder.current });
}
export default ReactEditorJS;
//# sourceMappingURL=ReactEditorJS.js.map