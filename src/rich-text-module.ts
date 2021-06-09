import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RichTextComponent } from './components/rich-text/rich-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

library.add(fas);

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        RichTextComponent
    ],
    exports: [
        RichTextComponent
    ]
  })
export class RichTextModule {}
