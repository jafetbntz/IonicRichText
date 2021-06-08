var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RichTextComponent } from './components/rich-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
var RichTextModule = /** @class */ (function () {
    function RichTextModule() {
    }
    RichTextModule_1 = RichTextModule;
    RichTextModule.forRoot = function () {
        return {
            ngModule: RichTextModule_1
        };
    };
    var RichTextModule_1;
    RichTextModule = RichTextModule_1 = __decorate([
        NgModule({
            imports: [
                IonicModule,
                FontAwesomeModule
            ],
            declarations: [
                RichTextComponent
            ],
            exports: [
                RichTextComponent
            ]
        })
    ], RichTextModule);
    return RichTextModule;
}());
export { RichTextModule };
//# sourceMappingURL=rich-text-module.js.map