import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss']
})
export class GalleryContainerComponent implements OnInit {

  public currentPage = 1;

  public picturesArray: any;

  public currentLargeImage: any;

  public getSinglePic(id): void {
    this.galleryService.getImage(id).subscribe(data => {
      this.currentLargeImage = data;
    });
  }

  public loadMore(): void {
    ++this.currentPage;
    this.galleryService.getImages(this.currentPage).subscribe(data => {
      this.picturesArray = data.pictures;
    });
  }

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
    this.galleryService.getImages(this.currentPage).subscribe(data => {
      this.picturesArray = data.pictures;
    });
    this.loadMore();
  }

}
