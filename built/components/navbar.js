"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importStar(require("react"));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (react_1.default.createElement("nav", { className: "navbar navbar-expand-sm navbar-dark bg-dark" },
            react_1.default.createElement("div", { className: "container-fluid" },
                react_1.default.createElement("a", { className: "navbar-brand", href: "#" }, "Leonardo"),
                react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
                react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    react_1.default.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-sm-0" },
                        react_1.default.createElement("li", { className: "nav-item" },
                            react_1.default.createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" }, "Home")),
                        react_1.default.createElement("li", { className: "nav-item" },
                            react_1.default.createElement("a", { className: "nav-link", href: "#" }, "Link")),
                        react_1.default.createElement("li", { className: "nav-item dropdown" },
                            react_1.default.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false" }, "Projects"),
                            react_1.default.createElement("ul", { className: "dropdown-menu", "aria-labelledby": "navbarDropdown", id: "gh-projects" })))))));
    };
    return Header;
}(react_1.Component));
exports.Header = Header;
