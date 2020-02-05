import { Component, OnInit } from "@angular/core";
import { Drawing } from "./Drawing.model";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  drawings: Drawing[] = [
    new Drawing(
      "Lincoln Sea",
      "82º 32' 30.3036\"N x 59º 54' 50.3814W\"",
      "July 24th, 2017",
      "../../assets/lincoln-sea.jpg"
    ),
    new Drawing(
      "Lincoln Sea",
      "82º 32' 30.3036\"N x 59º 54' 50.3814W\"",
      "July 24th, 2017",
      "../../assets/lincoln-sea.jpg"
    ),
    new Drawing(
      "Lincoln Sea",
      "82º 32' 30.3036\"N x 59º 54' 50.3814W\"",
      "July 24th, 2017",
      "../../assets/lincoln-sea.jpg"
    ),
    new Drawing(
      "Lincoln Sea",
      "82º 32' 30.3036\"N x 59º 54' 50.3814W\"",
      "July 24th, 2017",
      "../../assets/lincoln-sea.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
