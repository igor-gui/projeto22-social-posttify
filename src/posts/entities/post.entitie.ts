export class Post {
    private _text: string;
    private _title: string;
    private _image: string;

    constructor({ text, title, image }) {
        if (!image) {
            this._image = '';
            this._text = text
            this._title = title;

        }
        else {
            this._image = image;
            this._text = text
            this._title = title;
        }
    }


}