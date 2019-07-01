import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TextInput } from 'ionic-angular';
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
                    templateUrl: 'rich-text-component.html'
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