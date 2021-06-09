var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild, Input } from "@angular/core";
import { faBold, faItalic, faUnderline, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faListOl, faListUl, } from "@fortawesome/free-solid-svg-icons";
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
    RichTextComponent.prototype.updateItem = function () {
        var _this = this;
        // const element = this.editor.getNativeElement();
        // element.innerHTML = this.formControlItem.value;
        this.editor.value = this.formControlItem.value;
        var reactToChangeEvent = function () {
            // if (this.stringTools.isNullOrWhiteSpace(element.innerText)) {
            //   element.innerHTML = '<div></div>';
            //   this.formControlItem.setValue(null);
            // } else {
            // this.formControlItem.setValue(element.innerHTML);
            _this.formControlItem.setValue(_this.editor.value);
            // }
        };
        this.editor.ionChange.asObservable().subscribe(function () { return reactToChangeEvent(); });
        this.editor.ionInput.asObservable().subscribe(function () { return reactToChangeEvent(); });
        // element.onchange = reactToChangeEvent;
        // element.onkeyup = reactToChangeEvent;
        // element.onpaste = reactToChangeEvent;
        // element.oninput = reactToChangeEvent;
    };
    RichTextComponent.prototype.wireupButtons = function () {
        var _this = this;
        var buttons = this.decorate.nativeElement.getElementsByTagName("button");
        var _loop_1 = function (i) {
            var button = buttons[i];
            var command = button.getAttribute("data-command");
            if (command) {
                if (command.includes("|")) {
                    var parameter_1 = command.split("|")[1];
                    command = command.split("|")[0];
                    button.addEventListener("click", function () {
                        document.execCommand(command, false, parameter_1);
                        // this.editor.getNativeElement().focus();
                        _this.editor.setFocus();
                    });
                }
                else {
                    button.addEventListener("click", function () {
                        document.execCommand(command);
                        // this.editor.getNativeElement().focus();
                        _this.editor.setFocus();
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
        // this.editor.getNativeElement().focus();
        this.editor.setFocus();
    };
    __decorate([
        ViewChild("editor")
    ], RichTextComponent.prototype, "editor", void 0);
    __decorate([
        ViewChild("decorate")
    ], RichTextComponent.prototype, "decorate", void 0);
    __decorate([
        ViewChild("styler")
    ], RichTextComponent.prototype, "styler", void 0);
    __decorate([
        Input()
    ], RichTextComponent.prototype, "formControlItem", void 0);
    __decorate([
        Input()
    ], RichTextComponent.prototype, "options", void 0);
    __decorate([
        Input()
    ], RichTextComponent.prototype, "placeholderText", void 0);
    RichTextComponent = __decorate([
        Component({
            selector: "rich-text",
            templateUrl: "rich-text.component.html",
            styleUrls: ["rich-text.component.scss"],
        })
    ], RichTextComponent);
    return RichTextComponent;
}());
export { RichTextComponent };
//# sourceMappingURL=rich-text.component.js.map