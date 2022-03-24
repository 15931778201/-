define("importComp", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("importPage", ["require", "exports", "importComp"], function (require, exports, importComp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new importComp_1.Header();
            new importComp_1.Content();
            new importComp_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
