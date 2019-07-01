# Ionic 3 Rich Text

![npm](https://img.shields.io/npm/v/ionic-rich-text.svg)

A simple rich text editor (or HTML editor) for Ionic 3 applications. I took the idea of judgewest2000 and adapted it to my needs.

### Installing


```
npm i ionic-rich-text
```

Import it into your app.module

```
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
```
<rich-text [formControlItem]="item"></rich-text>
```

and in your .ts file:

```
constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.item = this.fb.control('');
  }
```


## Authors

* **Ismael Funes** - *Initial work* - [PurpleBooth](https://github.com/IsmaFunes)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://github.com/judgewest2000/Ionic3RichText

