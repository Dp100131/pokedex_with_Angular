import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  stringImg: string | null = '';
  @Input('stringImg') set changeImg(newImg: string | null){
    this.stringImg = newImg;
  };

  imgDefault: string = 'src\assets\images\default.png';

  imgError(){
    this.stringImg = this.imgDefault;
  }

}
