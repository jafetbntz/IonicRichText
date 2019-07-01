import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RichTextComponent } from './components/rich-text.component';
var RichTextModule = (function () {
    function RichTextModule() {
    }
    RichTextModule.forRoot = function () {
        return {
            ngModule: RichTextModule
        };
    };
    RichTextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        RichTextComponent
                    ],
                    exports: [
                        RichTextComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RichTextModule.ctorParameters = function () { return []; };
    return RichTextModule;
}());
export { RichTextModule };
//# sourceMappingURL=rich-text-module.js.map