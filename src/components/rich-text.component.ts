import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IonInput } from '@ionic/angular';

const HTML = `<!-- https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand -->
<div class="rich-text">
  <div #decorate class="decorator">
    <ion-buttons start [hidden]="!showDecorator && options.canClose">
        <button ion-button [hidden]="!options.undo" data-command="undo"><ion-icon name="undo"></ion-icon></button>
        <button ion-button [hidden]="!options.redo" data-command="redo"><ion-icon name="redo"></ion-icon></button>
        <button ion-button [hidden]="!options.bold" data-command="bold"><fa-icon icon="bold"></fa-icon></button>
        <button ion-button [hidden]="!options.italic" data-command="italic"><fa-icon icon="italic"></fa-icon></button>
        <button ion-button [hidden]="!options.underline" data-command="underline"><fa-icon icon="underline"></fa-icon></button>
        <button ion-button [hidden]="!options.strikethrough" data-command="strikethrough"><fa-icon icon="strikethrough"></fa-icon></button>
        <button ion-button [hidden]="!options.largeText" data-command="fontSize|6"><span style="font-size: 1.5em;">A</span></button>
        <button ion-button [hidden]="!options.largeText || !options.smallText" data-command="removeFormat"><span style="font-size: 1.0em;">A</span></button>
        <button ion-button [hidden]="!options.smallText" data-command="fontSize|1"><span style="font-size: 0.6em;">A</span></button>
        <button ion-button [hidden]="!options.alignLeft" data-command="justifyLeft"><fa-icon icon="align-left"></fa-icon></button>
        <button ion-button [hidden]="!options.alignCenter" data-command="justifyCenter"><fa-icon icon="align-center"></fa-icon></button>
        <button ion-button [hidden]="!options.alignRight" data-command="justifyRight"><fa-icon icon="align-right"></fa-icon></button>
        <button ion-button [hidden]="!options.justify" data-command="justifyFull"><fa-icon icon="align-justify"></fa-icon></button>
        <button ion-button [hidden]="!options.lineJump" data-command="insertHorizontalRule"><ion-icon name="return-left"></ion-icon></button>
        <button ion-button [hidden]="!options.orderedList" data-command="insertOrderedList"><fa-icon icon="list-ol"></fa-icon></button>
        <button ion-button [hidden]="!options.unorderedList" data-command="insertUnorderedList"><fa-icon icon="list-ul"></fa-icon></button>
  
    </ion-buttons>
    <ion-buttons end>
      <button ion-button (click)="toggleDecorator()" *ngIf="options.canClose" float-right color="primary">
        <ion-icon [name]="showDecorator ? 'close' : 'create'"></ion-icon>
    </button>
    </ion-buttons>
  
    </div>
  
  
    <div #styler text-right>
  
  
    </div>
  
    <ion-textarea #editor contenteditable="true" style="-webkit-user-select:text; user-select:text;" class="maineditor" tappable [placeholder]="placeholderText">
  
    </ion-textarea>
  
</div>

  `;

  const STYLE = `.rich-text [contenteditable=true] {
    -webkit-user-select: auto !important;
    padding: 2px;
    margin: 2px;
    border: 1px solid #CECECE;
    overflow-x: scroll;
    overflow-y: auto;
    word-wrap: normal;
    height: 20vh;
    background-color: #fff;
  }
  .rich-text [contenteditable=true] img {
    padding-left: 2px;
    max-width: 95%;
  }
  .rich-text [contenteditable=true]:empty:before {
    content: attr(data-placeholder-text);
    display: block;
    color: lightgrey;
    font-weight: bold;
  }
  .rich-text div.decorator {
    margin: 5px 1px 5px 1px;
    text-align: center;
  }
  .rich-text div.decorator button {
    background: #444;
    color: #fff;
    font-size: 1.1em;
    height: 35px;
    min-width: 30px;
    padding-left: 1px;
    padding-right: 1px;
  }
  
  `;


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

@Component({
  selector: 'rich-text',
  template: HTML,
  styles: [STYLE]
})
export class RichTextComponent implements OnInit {


  constructor() {

  }

  @ViewChild('editor') editor: IonInput;
  @ViewChild('decorate') decorate: ElementRef;
  @ViewChild('styler') styler: ElementRef;

  @Input() formControlItem: FormControl;
  @Input() options: RichTextOptions = {};
  @Input() placeholderText: string;

  ngOnInit() {


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
    }
  }


  uniqueId = `editor${Math.floor(Math.random() * 1000000)}`;
  showDecorator = false;

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

  private updateItem() {
    // const element = this.editor.getNativeElement();
    // element.innerHTML = this.formControlItem.value;
    this.editor.value = this.formControlItem.value;


    const reactToChangeEvent = () => {

      // if (this.stringTools.isNullOrWhiteSpace(element.innerText)) {
      //   element.innerHTML = '<div></div>';
      //   this.formControlItem.setValue(null);
      // } else {
        // this.formControlItem.setValue(element.innerHTML);
        this.formControlItem.setValue(this.editor.value);
        
      // }
    };
    this.editor.ionChange.asObservable().subscribe(() => reactToChangeEvent());
    this.editor.ionInput.asObservable().subscribe(() => reactToChangeEvent());

    // element.onchange = reactToChangeEvent;
    // element.onkeyup = reactToChangeEvent;
    // element.onpaste = reactToChangeEvent;
    // element.oninput = reactToChangeEvent;
  }

  private wireupButtons() {
    let buttons = (this.decorate.nativeElement as HTMLDivElement).getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];

      let command = button.getAttribute('data-command');
      if (command) {
        if (command.includes('|')) {
          let parameter = command.split('|')[1];
          command = command.split('|')[0];

          button.addEventListener('click', () => {
            document.execCommand(command, false, parameter);
            // this.editor.getNativeElement().focus();
            this.editor.setFocus();
          });
        } else {
          button.addEventListener('click', () => {
            document.execCommand(command);
            // this.editor.getNativeElement().focus();
            this.editor.setFocus();
          });
        }
      }
    }

  }

  ngAfterContentInit() {

    this.updateItem();
    this.wireupButtons();

  }

  toggleDecorator(){
    this.showDecorator = !this.showDecorator;
    // this.editor.getNativeElement().focus();
    this.editor.setFocus();
  }

}
