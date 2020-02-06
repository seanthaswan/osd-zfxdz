import { Component, OnInit } from "@angular/core";
import { Drawing } from "./Drawing.model";
import * as OpenSeadragon from "openseadragon";

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
  handleOpenDziButtonClick: any;
  handleOsdBackButtonClick: any;
  handleOsdInfoButtonClick: any;
  osdViewer: HTMLCollection;
  osdInfoModalContainer: HTMLCollection;
  viewer: OpenSeadragon;
  constructor() {
    this.osdViewer = document.getElementsByClassName("osd-viewer");
    this.osdInfoModalContainer = document.getElementsByClassName(
      "controls-info-container"
    );
    this.handleOsdInfoButtonClick = $event => {
      this.osdInfoModalContainer[0].classList.remove("not-displayed");
    };
    this.handleOsdBackButtonClick = $event => {
      // this.viewer.destroy();
      this.viewer = null;
      this.osdViewer[0].classList.add("not-displayed");
    };
    this.handleOpenDziButtonClick = $event => {
      this.osdViewer[0].classList.remove("not-displayed");
      this.viewer = OpenSeadragon({
        id: "openseadragon",
        prefixUrl: "node_modules/openseadragon/build/openseadragon/images",
        tileSources: "../assets/tilesources/lincol-sea-dzi.dzi",
        showNavigator: false,
        defaultZoomLevel: 0,
        minZoomImageRatio: 1,
        maxZoomPixelRatio: 6,
        zoomInButton: "osd-zoom-in-button",
        zoomOutButton: "osd-zoom-out-button",
        fullPageButton: "osd-full-screen-button",
        homeButton: "osd-home-button",
        homeFillsViewer: true,
        visibilityRatio: 0.8,
        gestureSettingsMouse: {
          dblClickToZoom: true,
          clickToZoom: true
        },
        placeholderFillStyle: "rgba(0, 0, 0, 0.2)"
      });
      console.log($event);
    };
  }

  ngOnInit() {}
}
