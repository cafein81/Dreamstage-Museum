import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  myStyle: object = {};

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  public ngOnInit() {
    this.galleryOptions = [
      {
        width: "800px",
        height: "550px",
        thumbnailsColumns: 3,
        thumbnailsRows: 1,
        imageAnimation: NgxGalleryAnimation.Slide,
        imagePercent: 70,
        thumbnailsPercent: 30,
        thumbnailsMargin: 2,
        thumbnailMargin: 2,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "550px",
        imagePercent: 30,
        thumbnailsPercent: 60,
        thumbnailsMargin: 2,
        thumbnailMargin: 2,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "assets/M02.JPG",
        medium: "assets/M02.JPG",
        big: "assets/M02.JPG"
      },
      {
        small: "assets/H02.JPG",
        medium: "assets/H02.JPG",
        big: "assets/H02.JPG"
      },
      {
        small: "assets/H03.JPG",
        medium: "assets/H03.JPG",
        big: "assets/H03.JPG"
      },
      {
        small: "assets/H05.JPG",
        medium: "assets/H05.JPG",
        big: "assets/H05.JPG"
      },
      {
        small: "assets/H06.JPG",
        medium: "assets/H06.JPG",
        big: "assets/H06.JPG"
      },
      {
        small: "assets/H08.JPG",
        medium: "assets/H08.JPG",
        big: "assets/H08.JPG"
      },
      {
        small: "assets/H10.JPG",
        medium: "assets/H10.JPG",
        big: "assets/H10.JPG"
      },
      {
        small: "assets/H12.JPG",
        medium: "assets/H12.JPG",
        big: "assets/H12.JPG"
      },
      {
        small: "assets/H14.JPG",
        medium: "assets/H14.JPG",
        big: "assets/H14.JPG"
      },
      {
        small: "assets/H16.JPG",
        medium: "assets/H16.JPG",
        big: "assets/H16.JPG"
      },
      {
        small: "assets/H17.JPG",
        medium: "assets/H17.JPG",
        big: "assets/H17.JPG"
      },
      {
        small: "assets/H19.JPG",
        medium: "assets/H19.JPG",
        big: "assets/H19.JPG"
      },
      {
        small: "assets/dr1.jpeg",
        medium: "assets/dr1.jpeg",
        big: "assets/dr1.jpeg"
      },
      {
        small: "assets/dr2.jpeg",
        medium: "assets/dr2.jpeg",
        big: "assets/dr2.jpeg"
      },
      {
        small: "assets/dr3.jpeg",
        medium: "assets/dr3.jpeg",
        big: "assets/dr3.jpeg"
      },
      {
        small: "assets/dr4.jpeg",
        medium: "assets/dr4.jpeg",
        big: "assets/dr4.jpeg"
      },
      {
        small: "assets/dr5.jpeg",
        medium: "assets/dr5.jpeg",
        big: "assets/dr5.jpeg"
      },
      {
        small: "assets/dr6.jpeg",
        medium: "assets/dr6.jpeg",
        big: "assets/dr6.jpeg"
      },
      {
        small: "assets/dr7.jpeg",
        medium: "assets/dr7.jpeg",
        big: "assets/dr7.jpeg"
      },
      {
        small: "assets/dr8.jpeg",
        medium: "assets/dr8.jpeg",
        big: "assets/dr8.jpeg"
      },
      {
        small: "assets/dr9.jpeg",
        medium: "assets/dr9.jpeg",
        big: "assets/dr9.jpeg"
      },
      {
        small: "assets/dr10.jpeg",
        medium: "assets/dr10.jpeg",
        big: "assets/dr10.jpeg"
      },
      {
        small: "assets/lib1.jpeg",
        medium: "assets/lib1.jpeg",
        big: "assets/lib1.jpeg"
      },
      {
        small: "assets/lib2.jpeg",
        medium: "assets/lib2.jpeg",
        big: "assets/lib2.jpeg"
      },
      {
        small: "assets/lib3.jpeg",
        medium: "assets/lib3.jpeg",
        big: "assets/lib3.jpeg"
      },
      {
        small: "assets/lib4.jpeg",
        medium: "assets/lib4.jpeg",
        big: "assets/lib4.jpeg"
      },
      {
        small: "assets/lib5.jpeg",
        medium: "assets/lib5.jpeg",
        big: "assets/lib5.jpeg"
      },
      {
        small: "assets/lib6.jpeg",
        medium: "assets/lib6.jpeg",
        big: "assets/lib6.jpeg"
      },
      {
        small: "assets/lib7.jpeg",
        medium: "assets/lib7.jpeg",
        big: "assets/lib7.jpeg"
      },
      {
        small: "assets/lib8.jpeg",
        medium: "assets/lib8.jpeg",
        big: "assets/lib8.jpeg"
      },
      {
        small: "assets/lib9.jpeg",
        medium: "assets/lib9.jpeg",
        big: "assets/lib9.jpeg"
      },
      {
        small: "assets/lib10.jpeg",
        medium: "assets/lib10.jpeg",
        big: "assets/lib10.jpeg"
      }
    ];

    this.myStyle = {
      width: "100%",
      height: "400px",
      background: "#00205b",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 175,
          density: {
            enable: true,
            value_area: 1420.4657549380909
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.5,
            sync: true
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: "#ffffff",
          opacity: 0.4,
          width: 0.5
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }
}
