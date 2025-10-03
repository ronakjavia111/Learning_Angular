import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  @Input() name: string = 'default-name';
  @Input() countNumber = 0;
  @ContentChild('projectedParagraph') content!: ElementRef;
  @ViewChild('myPara') view!: ElementRef;

  ngAfterContentInit() {
    // console.log('ngAfterContentInit - projected content is ready');
    // console.log('Projected text:', this.content.nativeElement.innerText);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit - child view ready');
    // console.log('Paragraph text:', this.view.nativeElement.innerText);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked - projected content checked');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked - child view checked');
  }

  // Called After ngOnChange on 1st call
  ngOnInit() {
    // console.log('OnInit Called: ', this.name);
    this.name = 'OnInit_Name';
  }

  // Called 1st
  constructor() {
    // console.log('Contructor Called: ', this.name);
    this.name = 'Constructor_Name';
  }

  // If @Input() exist then called before ngOnInit on 1st call
  ngOnChanges() {
    // console.log('OnChanges Called: ', this.name);
  }

  updateName(val: string) {
    this.name = val;
  }

  ngOnDestroy() {
    // console.log('OnDestroy Called: ', this.name);
  }

  ngDoCheck() {
    // console.log('OnCheck Called: ', this.name);
  }
}
