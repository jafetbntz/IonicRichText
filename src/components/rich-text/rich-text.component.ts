import { Component, ViewChild, ElementRef, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { RichTextOptions } from "./rich-text-options.interface";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faListOl,
  faListUl,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";


const HTML = `
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand -->
<div class="rich-text">
    <div #decorate class="decorator">
      <ion-buttons  [hidden]="!showDecorator && options.canClose">
            <ion-button [hidden]="!options.undo" (click)="excute('undo')">
              <ion-icon name="arrow-undo-circle-outline"></ion-icon>
            </ion-button>
            <ion-button [hidden]="!options.redo" (click)="excute('redo')">
              <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </ion-button>
            <ion-button [hidden]="!options.bold" (click)="excute('bold')">
              <fa-icon [icon]="faBold"></fa-icon>              
            </ion-button>
            <ion-button [hidden]="!options.italic" (click)="excute('italic')">
              <fa-icon [icon]="faItalic"></fa-icon>

            </ion-button>
            <ion-button [hidden]="!options.underline" (click)="excute('underline')">
              <fa-icon [icon]="faUnderline"></fa-icon>

            </ion-button>
            <ion-button [hidden]="!options.strikethrough" (click)="excute('strikethrough')">
              <fa-icon [icon]="faStrikethrough"></fa-icon>

            </ion-button>
            <ion-button [hidden]="!options.largeText" (click)="excute('fontSize|6')">
              <span style="font-size: 1.5em;">A</span>
            </ion-button>
            <ion-button [hidden]="!options.largeText || !options.smallText" (click)="excute('removeFormat')">
              <span style="font-size: 1.0em;">A</span>
            </ion-button>
            <ion-button [hidden]="!options.smallText" (click)="excute('fontSize|1')">
              <span style="font-size: 0.6em;">A</span>
            </ion-button>
            <ion-button [hidden]="!options.alignLeft" (click)="excute('justifyLeft')">
              <fa-icon [icon]="faStrikethrough"></fa-icon>

            </ion-button>
            <ion-button [hidden]="!options.alignCenter" (click)="excute('justifyCenter')">
              <fa-icon [icon]="faAlignCenter"></fa-icon>
            </ion-button>
            <ion-button [hidden]="!options.alignRight" (click)="excute('justifyRight')">
              <fa-icon [icon]="faAlignRight"></fa-icon>
            </ion-button>
            <ion-button [hidden]="!options.justify" (click)="excute('justifyFull')">
              <fa-icon [icon]="faAlignJustify"></fa-icon>
            </ion-button>
            <ion-button [hidden]="!options.lineJump" (click)="excute('insertHorizontalRule')">
              <ion-icon name="return-down-back-outline"></ion-icon>
            </ion-button>
            <ion-button [hidden]="!options.orderedList" (click)="excute('insertOrderedList')">
              <fa-icon [icon]="faListOl"></fa-icon>
            </ion-button>
            <ion-button [hidden]="!options.unorderedList" (click)="excute('insertUnorderedList')">
              <fa-icon [icon]="faListUl"></fa-icon>
            </ion-button>
    
      </ion-buttons>
      <ion-buttons end>
        <ion-button (click)="toggleDecorator()" *ngIf="options.canClose" float-right color="primary">
          <ion-icon [name]="showDecorator ? 'close' : 'create'"></ion-icon>
      </ion-button>
      </ion-buttons>
    
      </div>
    
    
      <div #styler text-right>
    
    
      </div>
    
      <div #editor contenteditable="true" style="-webkit-user-select:text; user-select:text;" class="maineditor"  [placeholder]="placeholderText">
    
      </div>
    
  </div>
`;

const STYLES = `
* {
  text-align: left;
}

.rich-text {
  color: black;
}


.rich-text [contenteditable=true] {
    -webkit-user-select: auto !important;
    user-select: auto !important;
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

  ion-textarear {
    color: black
  }

  ion-buttons {
    display: inline-block;
  }
`;

@Component({
  selector: "rich-text",
  template: HTML,
  styles: [STYLES],
})
export class RichTextComponent implements OnInit {
  faBold: IconDefinition = faBold;
  faItalic: IconDefinition = faItalic;
  faUnderline: IconDefinition = faUnderline;
  faStrikethrough: IconDefinition = faStrikethrough;
  faAlignLeft: IconDefinition = faAlignLeft;
  faAlignCenter: IconDefinition = faAlignCenter;
  faAlignRight: IconDefinition = faAlignRight;
  faAlignJustify: IconDefinition = faAlignJustify;
  faListOl: IconDefinition = faListOl;
  faListUl: IconDefinition = faListUl;

  constructor() {}

  @ViewChild("editor", {static: true}) editor: ElementRef;
  @ViewChild("decorate", {static: true}) decorate: ElementRef;
  @ViewChild("styler", {static: true}) styler: ElementRef;

  @Input('text') text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() options: RichTextOptions = {};
  @Input() placeholderText: string;

  uniqueId = `editor${Math.floor(Math.random() * 1000000)}`;
  showDecorator = false;

  ngOnInit() {
    this.options = {
      undo: this.options.undo != undefined ? this.options.undo : true,
      redo: this.options.redo != undefined ? this.options.redo : true,
      bold: this.options.bold != undefined ? this.options.bold : true,
      italic: this.options.italic != undefined ? this.options.italic : true,
      underline:
        this.options.underline != undefined ? this.options.underline : true,
      largeText:
        this.options.largeText != undefined ? this.options.largeText : true,
      smallText:
        this.options.smallText != undefined ? this.options.smallText : true,
      alignLeft:
        this.options.alignLeft != undefined ? this.options.alignLeft : true,
      alignCenter:
        this.options.alignCenter != undefined ? this.options.alignCenter : true,
      alignRight:
        this.options.alignRight != undefined ? this.options.alignRight : true,
      justify: this.options.justify != undefined ? this.options.justify : true,
      lineJump:
        this.options.lineJump != undefined ? this.options.lineJump : true,
      orderedList:
        this.options.orderedList != undefined ? this.options.orderedList : true,
      unorderedList:
        this.options.unorderedList != undefined
          ? this.options.unorderedList
          : true,
      strikethrough:
        this.options.strikethrough != undefined
          ? this.options.strikethrough
          : true,
      canClose: this.options.canClose,
    };
  }

  ngAfterContentInit() {
    this.updateItem();
  }

  private updateItem() {
    const element = this.editor.nativeElement;
    element.innerHTML = this.text ? this.text : '' ;

    const reactToChangeEvent = () => {
      this.textChange.emit(element.innerHTML);
    };

    element.onchange = reactToChangeEvent;
    element.onkeyup = reactToChangeEvent;
    element.onpaste = reactToChangeEvent;
    element.oninput = reactToChangeEvent;
  }

  public excute(command: string) {
    if (!command) { return; }

    if (command.includes("|")) {
      let parameter = command.split("|")[1];
      command = command.split("|")[0];

        document.execCommand(command, false, parameter);
        this.editor.nativeElement.focus();

    } else {

        document.execCommand(command);
        this.editor.nativeElement.focus();

    }
  }


  public toggleDecorator() {
    this.showDecorator = !this.showDecorator;
    this.editor.nativeElement.focus();
  }
}
