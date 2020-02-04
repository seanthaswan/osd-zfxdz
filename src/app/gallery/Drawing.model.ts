export class Drawing {
  public title: string;
  public coordinates: string;
  public date: string;
  public imgPath: string;
  imgStyles: object;
  constructor(
    title: string,
    coordinates: string,
    date: string,
    imgPath: string
  ) {
    this.title = title;
    this.coordinates = coordinates;
    this.date = date;
    this.imgPath = imgPath;
    this.imgStyles = {
      background: `url(${this.imgPath}) center center no-repeat`,
      backgroundSize: "cover"
    };
  }
}
