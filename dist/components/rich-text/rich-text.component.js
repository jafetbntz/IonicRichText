var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { faBold, faItalic, faUnderline, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faListOl, faListUl, } from "@fortawesome/free-solid-svg-icons";
var HTML = "\n<!-- https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand -->\n<div class=\"rich-text\">\n    <div #decorate class=\"decorator\">\n      <ion-buttons  [hidden]=\"!showDecorator && options.canClose\">\n            <ion-button [hidden]=\"!options.undo\" (click)=\"excute('undo')\">\n              <ion-icon name=\"arrow-undo-circle-outline\"></ion-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.redo\" (click)=\"excute('redo')\">\n              <ion-icon name=\"arrow-redo-circle-outline\"></ion-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.bold\" (click)=\"excute('bold')\">\n              <fa-icon [icon]=\"faBold\"></fa-icon>              \n            </ion-button>\n            <ion-button [hidden]=\"!options.italic\" (click)=\"excute('italic')\">\n              <fa-icon [icon]=\"faItalic\"></fa-icon>\n\n            </ion-button>\n            <ion-button [hidden]=\"!options.underline\" (click)=\"excute('underline')\">\n              <fa-icon [icon]=\"faUnderline\"></fa-icon>\n\n            </ion-button>\n            <ion-button [hidden]=\"!options.strikethrough\" (click)=\"excute('strikethrough')\">\n              <fa-icon [icon]=\"faStrikethrough\"></fa-icon>\n\n            </ion-button>\n            <ion-button [hidden]=\"!options.largeText\" (click)=\"excute('fontSize|6')\">\n              <span style=\"font-size: 1.5em;\">A</span>\n            </ion-button>\n            <ion-button [hidden]=\"!options.largeText || !options.smallText\" (click)=\"excute('removeFormat')\">\n              <span style=\"font-size: 1.0em;\">A</span>\n            </ion-button>\n            <ion-button [hidden]=\"!options.smallText\" (click)=\"excute('fontSize|1')\">\n              <span style=\"font-size: 0.6em;\">A</span>\n            </ion-button>\n            <ion-button [hidden]=\"!options.alignLeft\" (click)=\"excute('justifyLeft')\">\n              <fa-icon [icon]=\"faStrikethrough\"></fa-icon>\n\n            </ion-button>\n            <ion-button [hidden]=\"!options.alignCenter\" (click)=\"excute('justifyCenter')\">\n              <fa-icon [icon]=\"faAlignCenter\"></fa-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.alignRight\" (click)=\"excute('justifyRight')\">\n              <fa-icon [icon]=\"faAlignRight\"></fa-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.justify\" (click)=\"excute('justifyFull')\">\n              <fa-icon [icon]=\"faAlignJustify\"></fa-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.lineJump\" (click)=\"excute('insertHorizontalRule')\">\n              <ion-icon name=\"return-down-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.orderedList\" (click)=\"excute('insertOrderedList')\">\n              <fa-icon [icon]=\"faListOl\"></fa-icon>\n            </ion-button>\n            <ion-button [hidden]=\"!options.unorderedList\" (click)=\"excute('insertUnorderedList')\">\n              <fa-icon [icon]=\"faListUl\"></fa-icon>\n            </ion-button>\n    \n      </ion-buttons>\n      <ion-buttons end>\n        <ion-button (click)=\"toggleDecorator()\" *ngIf=\"options.canClose\" float-right color=\"primary\">\n          <ion-icon [name]=\"showDecorator ? 'close' : 'create'\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n    \n      </div>\n    \n    \n      <div #styler text-right>\n    \n    \n      </div>\n    \n      <div #editor contenteditable=\"true\" style=\"-webkit-user-select:text; user-select:text;\" class=\"maineditor\"  [placeholder]=\"placeholderText\">\n    \n      </div>\n    \n  </div>\n";
var STYLES = "\n* {\n  text-align: left;\n}\n\n.rich-text {\n  color: black;\n}\n\n.rich-text [contenteditable=true] {\n    -webkit-user-select: auto !important;\n    user-select: auto !important;\n    padding: 2px;\n    margin: 2px;\n    border: 1px solid #CECECE;\n    overflow-x: scroll;\n    overflow-y: auto;\n    word-wrap: normal;\n    height: 20vh;\n    background-color: #fff;\n  }\n  .rich-text [contenteditable=true] img {\n    padding-left: 2px;\n    max-width: 95%;\n  }\n  .rich-text [contenteditable=true]:empty:before {\n    content: attr(data-placeholder-text);\n    display: block;\n    color: lightgrey;\n    font-weight: bold;\n  }\n  .rich-text div.decorator {\n    margin: 5px 1px 5px 1px;\n    text-align: center;\n  }\n  .rich-text div.decorator button {\n    background: #444;\n    color: #fff;\n    font-size: 1.1em;\n    height: 35px;\n    min-width: 30px;\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n\n  ion-textarear {\n    color: black\n  }\n\n  ion-buttons {\n    display: inline-block;\n  }\n";
var RichTextComponent = /** @class */ (function () {
    function RichTextComponent() {
        this.faBold = faBold;
        this.faItalic = faItalic;
        this.faUnderline = faUnderline;
        this.faStrikethrough = faStrikethrough;
        this.faAlignLeft = faAlignLeft;
        this.faAlignCenter = faAlignCenter;
        this.faAlignRight = faAlignRight;
        this.faAlignJustify = faAlignJustify;
        this.faListOl = faListOl;
        this.faListUl = faListUl;
        this.textChange = new EventEmitter();
        this.options = {};
        this.uniqueId = "editor" + Math.floor(Math.random() * 1000000);
        this.showDecorator = false;
    }
    RichTextComponent.prototype.ngOnInit = function () {
        this.options = {
            undo: this.options.undo != undefined ? this.options.undo : true,
            redo: this.options.redo != undefined ? this.options.redo : true,
            bold: this.options.bold != undefined ? this.options.bold : true,
            italic: this.options.italic != undefined ? this.options.italic : true,
            underline: this.options.underline != undefined ? this.options.underline : true,
            largeText: this.options.largeText != undefined ? this.options.largeText : true,
            smallText: this.options.smallText != undefined ? this.options.smallText : true,
            alignLeft: this.options.alignLeft != undefined ? this.options.alignLeft : true,
            alignCenter: this.options.alignCenter != undefined ? this.options.alignCenter : true,
            alignRight: this.options.alignRight != undefined ? this.options.alignRight : true,
            justify: this.options.justify != undefined ? this.options.justify : true,
            lineJump: this.options.lineJump != undefined ? this.options.lineJump : true,
            orderedList: this.options.orderedList != undefined ? this.options.orderedList : true,
            unorderedList: this.options.unorderedList != undefined
                ? this.options.unorderedList
                : true,
            strikethrough: this.options.strikethrough != undefined
                ? this.options.strikethrough
                : true,
            canClose: this.options.canClose,
        };
    };
    RichTextComponent.prototype.ngAfterContentInit = function () {
        this.updateItem();
    };
    RichTextComponent.prototype.updateItem = function () {
        var _this = this;
        var element = this.editor.nativeElement;
        element.innerHTML = this.text ? this.text : '';
        var reactToChangeEvent = function () {
            _this.textChange.emit(element.innerHTML);
        };
        element.onchange = reactToChangeEvent;
        element.onkeyup = reactToChangeEvent;
        element.onpaste = reactToChangeEvent;
        element.oninput = reactToChangeEvent;
    };
    RichTextComponent.prototype.excute = function (command) {
        if (!command) {
            return;
        }
        if (command.includes("|")) {
            var parameter = command.split("|")[1];
            command = command.split("|")[0];
            document.execCommand(command, false, parameter);
            this.editor.nativeElement.focus();
        }
        else {
            document.execCommand(command);
            this.editor.nativeElement.focus();
        }
    };
    RichTextComponent.prototype.toggleDecorator = function () {
        this.showDecorator = !this.showDecorator;
        this.editor.nativeElement.focus();
    };
    __decorate([
        ViewChild("editor", { static: true })
    ], RichTextComponent.prototype, "editor", void 0);
    __decorate([
        ViewChild("decorate", { static: true })
    ], RichTextComponent.prototype, "decorate", void 0);
    __decorate([
        ViewChild("styler", { static: true })
    ], RichTextComponent.prototype, "styler", void 0);
    __decorate([
        Input('text')
    ], RichTextComponent.prototype, "text", void 0);
    __decorate([
        Output()
    ], RichTextComponent.prototype, "textChange", void 0);
    __decorate([
        Input()
    ], RichTextComponent.prototype, "options", void 0);
    __decorate([
        Input()
    ], RichTextComponent.prototype, "placeholderText", void 0);
    RichTextComponent = __decorate([
        Component({
            selector: "rich-text",
            template: HTML,
            styles: [STYLES],
        })
    ], RichTextComponent);
    return RichTextComponent;
}());
export { RichTextComponent };
//# sourceMappingURL=rich-text.component.js.map