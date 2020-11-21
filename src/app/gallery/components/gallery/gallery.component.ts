import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Output() getSinglePic = new EventEmitter();
  @Output() loadMore = new EventEmitter();

  public showModal = false;
  public picsArray = [];

  @Input() picturesArray: any;
  @Input() currentLargeImage: any;

  public unShowModal(): void {
    this.currentLargeImage = null;
    this.showModal = false;
  }

  constructor() {
  }

  public openModal(id): void {
    this.getSinglePic.emit(id);
    this.showModal = !this.showModal;
  }

  public onScroll(): void {
    this.loadMore.emit();
  }

  ngOnChanges(changes: SimpleChanges): any {
    const { picturesArray } = changes;
    if (picturesArray.currentValue) {
      this.picsArray = [...this.picsArray, ...picturesArray.currentValue];
    }
  }


  ngOnInit(): void {
  }

}
