import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TextInput } from 'ionic-angular';
var HTML = "<!-- https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand -->\n<div class=\"rich-text\">\n  <div #decorate class=\"decorator\">\n    <ion-buttons start [hidden]=\"!showDecorator && options.canClose\">\n        <button ion-button [hidden]=\"!options.undo\" data-command=\"undo\"><ion-icon name=\"undo\"></ion-icon></button>\n        <button ion-button [hidden]=\"!options.redo\" data-command=\"redo\"><ion-icon name=\"redo\"></ion-icon></button>\n        <button ion-button [hidden]=\"!options.bold\" data-command=\"bold\"><fa-icon icon=\"bold\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.italic\" data-command=\"italic\"><fa-icon icon=\"italic\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.underline\" data-command=\"underline\"><fa-icon icon=\"underline\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.strikethrough\" data-command=\"strikethrough\"><fa-icon icon=\"strikethrough\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.largeText\" data-command=\"fontSize|6\"><span style=\"font-size: 1.5em;\">A</span></button>\n        <button ion-button [hidden]=\"!options.largeText || !options.smallText\" data-command=\"removeFormat\"><span style=\"font-size: 1.0em;\">A</span></button>\n        <button ion-button [hidden]=\"!options.smallText\" data-command=\"fontSize|1\"><span style=\"font-size: 0.6em;\">A</span></button>\n        <button ion-button [hidden]=\"!options.alignLeft\" data-command=\"justifyLeft\"><fa-icon icon=\"align-left\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.alignCenter\" data-command=\"justifyCenter\"><fa-icon icon=\"align-center\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.alignRight\" data-command=\"justifyRight\"><fa-icon icon=\"align-right\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.justify\" data-command=\"justifyFull\"><fa-icon icon=\"align-justify\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.lineJump\" data-command=\"insertHorizontalRule\"><ion-icon name=\"return-left\"></ion-icon></button>\n        <button ion-button [hidden]=\"!options.orderedList\" data-command=\"insertOrderedList\"><fa-icon icon=\"list-ol\"></fa-icon></button>\n        <button ion-button [hidden]=\"!options.unorderedList\" data-command=\"insertUnorderedList\"><fa-icon icon=\"list-ul\"></fa-icon></button>\n  \n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)=\"toggleDecorator()\" *ngIf=\"options.canClose\" float-right color=\"primary\">\n        <ion-icon [name]=\"showDecorator ? 'close' : 'create'\"></ion-icon>\n    </button>\n    </ion-buttons>\n  \n    </div>\n  \n  \n    <div #styler text-right>\n  \n  \n    </div>\n  \n    <ion-textarea #editor contenteditable=\"true\" style=\"-webkit-user-select:text; user-select:text;\" class=\"maineditor\" tappable [placeholder]=\"placeholderText\">\n  \n    </ion-textarea>\n  \n</div>\n\n  ";
var STYLE = ".rich-text [contenteditable=true] {\n    -webkit-user-select: auto !important;\n    padding: 2px;\n    margin: 2px;\n    border: 1px solid #CECECE;\n    overflow-x: scroll;\n    overflow-y: auto;\n    word-wrap: normal;\n    height: 20vh;\n    background-color: #fff;\n  }\n  .rich-text [contenteditable=true] img {\n    padding-left: 2px;\n    max-width: 95%;\n  }\n  .rich-text [contenteditable=true]:empty:before {\n    content: attr(data-placeholder-text);\n    display: block;\n    color: lightgrey;\n    font-weight: bold;\n  }\n  .rich-text div.decorator {\n    margin: 5px 1px 5px 1px;\n    text-align: center;\n  }\n  .rich-text div.decorator button {\n    background: #444;\n    color: #fff;\n    font-size: 1.1em;\n    height: 35px;\n    min-width: 30px;\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n  \n  ";
var RichTextComponent = (function () {
    function RichTextComponent() {
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
            unorderedList: this.options.unorderedList != undefined ? this.options.unorderedList : true,
            strikethrough: this.options.strikethrough != undefined ? this.options.strikethrough : true,
            canClose: this.options.canClose
        };
    };
    // private stringTools = {
    //   isNullOrWhiteSpace: (value: string) => {
    //     if (value == null || value == undefined) {
    //       return true;
    //     }
    //     value = value.replace(/[\n\r]/g, '');
    //     value = value.split(' ').join('');
    //     return value.length === 0;
    //   }
    // };
    // private stringTools = {
    //   isNullOrWhiteSpace: (value: string) => {
    //     if (value == null || value == undefined) {
    //       return true;
    //     }
    //     value = value.replace(/[\n\r]/g, '');
    //     value = value.split(' ').join('');
    //     return value.length === 0;
    //   }
    // };
    RichTextComponent.prototype.updateItem = 
    // private stringTools = {
    //   isNullOrWhiteSpace: (value: string) => {
    //     if (value == null || value == undefined) {
    //       return true;
    //     }
    //     value = value.replace(/[\n\r]/g, '');
    //     value = value.split(' ').join('');
    //     return value.length === 0;
    //   }
    // };
    function () {
        var _this = this;
        var element = this.editor.getNativeElement();
        element.innerHTML = this.formControlItem.value;
        var reactToChangeEvent = function () {
            // if (this.stringTools.isNullOrWhiteSpace(element.innerText)) {
            //   element.innerHTML = '<div></div>';
            //   this.formControlItem.setValue(null);
            // } else {
            // if (this.stringTools.isNullOrWhiteSpace(element.innerText)) {
            //   element.innerHTML = '<div></div>';
            //   this.formControlItem.setValue(null);
            // } else {
            _this.formControlItem.setValue(element.innerHTML);
            // }
        };
        element.onchange = reactToChangeEvent;
        element.onkeyup = reactToChangeEvent;
        element.onpaste = reactToChangeEvent;
        element.oninput = reactToChangeEvent;
    };
    RichTextComponent.prototype.wireupButtons = function () {
        var _this = this;
        var buttons = this.decorate.nativeElement.getElementsByTagName('button');
        var _loop_1 = function (i) {
            var button = buttons[i];
            var command = button.getAttribute('data-command');
            if (command) {
                if (command.includes('|')) {
                    var parameter_1 = command.split('|')[1];
                    command = command.split('|')[0];
                    button.addEventListener('click', function () {
                        document.execCommand(command, false, parameter_1);
                        _this.editor.getNativeElement().focus();
                    });
                }
                else {
                    button.addEventListener('click', function () {
                        document.execCommand(command);
                        _this.editor.getNativeElement().focus();
                    });
                }
            }
        };
        for (var i = 0; i < buttons.length; i++) {
            _loop_1(i);
        }
    };
    RichTextComponent.prototype.ngAfterContentInit = function () {
        this.updateItem();
        this.wireupButtons();
    };
    RichTextComponent.prototype.toggleDecorator = function () {
        this.showDecorator = !this.showDecorator;
        this.editor.getNativeElement().focus();
    };
    RichTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rich-text',
                    template: HTML,
                    styles: [STYLE]
                },] },
    ];
    /** @nocollapse */
    RichTextComponent.ctorParameters = function () { return []; };
    RichTextComponent.propDecorators = {
        "editor": [{ type: ViewChild, args: ['editor',] },],
        "decorate": [{ type: ViewChild, args: ['decorate',] },],
        "styler": [{ type: ViewChild, args: ['styler',] },],
        "formControlItem": [{ type: Input },],
        "options": [{ type: Input },],
        "placeholderText": [{ type: Input },],
        "canClose": [{ type: Input },],
    };
    return RichTextComponent;
}());
export { RichTextComponent };
//# sourceMappingURL=rich-text.component.js.map