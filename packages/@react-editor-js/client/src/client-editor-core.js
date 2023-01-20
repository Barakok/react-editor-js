var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
export class ClientEditorCore {
    constructor(_a) {
        var { tools } = _a, config = __rest(_a, ["tools"]);
        const extendTools = Object.assign({ 
            // default tools
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            } }, tools);
        this._editorJS = new EditorJS(Object.assign({ tools: extendTools }, config));
    }
    get dangerouslyLowLevelInstance() {
        return this._editorJS;
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._editorJS.clear();
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._editorJS.save();
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._editorJS.isReady;
            yield this._editorJS.destroy();
        });
    }
    render(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._editorJS.isReady;
            yield this._editorJS.render(data);
        });
    }
}
//# sourceMappingURL=client-editor-core.js.map