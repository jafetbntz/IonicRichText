# Ionic 3 Rich Text

![npm](https://img.shields.io/npm/v/ionic-rich-text.svg)

A simple rich text editor (or HTML editor) for Ionic 3 applications. I took the idea of judgewest2000 and adapted it to my needs.

### Installing


```
npm i ionic-rich-text
```

Import it into your app.module

```typescript
import { RichTextModule } from 'ionic-rich-text/dist/rich-text-module';

.
.
.

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RichTextModule
  ],

```


If you are using lazy loading, you might have to import the module into the page's module as well.


### Usage

You can just use the editor with the tag <rich-text>
```HTML
<rich-text [formControlItem]="item"></rich-text>
```

and in your .ts file:

```typescript
constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.item = this.fb.control('');
  }
```

## Options

You can pass an object to the component to enable/disable some of its functionalities (disabled ones will not be visible)


| Option | Description |
| --- | --- |
| `bold` | If the bold option is enabled |
| `italic` | If the italic option is enabled |
| `underline` | If the underline option is enabled |
| `strikethrough` | If the strikethrough option is enabled |
| `largeText` | If the large text option is enabled |
| `smallText` | If the small text option is enabled |
| `alignLeft` | If the align left option is enabled |
| `alignCenter` | If the align center option is enabled |
| `alignRight` | If the align right option is enabled |
| `justify` | If the justify option is enabled |
| `lineJump` | If the line jump option is enabled |
| `orderedList` | If the ordered list option is enabled |
| `unorderedList` | If the unordered list option is enabled |
| `canClose` | If the editor can be opened/closed on demand |

There is a type for this object definition: 

```typescript
export interface RichTextOptions {
  undo?: boolean;
  redo?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  largeText?: boolean;
  smallText?: boolean;
  alignLeft?: boolean;
  alignCenter?: boolean;
  alignRight?: boolean;
  justify?: boolean;
  lineJump?: boolean;
  orderedList?: boolean;
  unorderedList?: boolean;
  strikethrough?: boolean;
  canClose?: boolean;
}
```
So you can do 

```HTML
<rich-text [formControlItem]="item" [options]="{canClose: true, lineJump: false}"></rich-text>
```

## Authors

* **Ismael Funes** - *Initial work* - [PurpleBooth](https://github.com/IsmaFunes)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://github.com/judgewest2000/Ionic3RichText

