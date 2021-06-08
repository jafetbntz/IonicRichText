import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RichTextComponent } from './components/rich-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@NgModule({
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
export class RichTextModule {
    static forRoot(): ModuleWithProviders<RichTextModule> {
        return {
            ngModule: RichTextModule
        };
    }
}