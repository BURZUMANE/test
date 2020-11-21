import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  @Output() unShowModal = new EventEmitter();

  @Input() currentLargeImage: any;
  public isLoading = true;
  public showCopied = false;

  public imgSrc: string;
  public scale = 1;

  public zoom(type): void {
    if (type === 'in') {
      this.scale += 0.1;
    } else {
      if (this.scale > 1) {
        this.scale -= 0.1;
      }
    }
  }

  public closeModal(e): void {
    if (e.currentTarget !== e.target) {
      return;
    }
    this.unShowModal.emit();
  }

  public copyLink(link): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showCopied = true;

    setTimeout(() => {
      this.showCopied = false;
    }, 700);
  }


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentLargeImage) {
      this.imgSrc = this.currentLargeImage;
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
  }

}
