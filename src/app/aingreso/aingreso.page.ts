import { Component, ElementRef, OnInit, ViewChild, AfterViewInit,ViewChildren } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { LoadingController, ToastController,IonAvatar,AnimationController,Animation } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import jsQR from 'jsqr';

@Component({
  selector: 'app-aingreso',
  templateUrl: './aingreso.page.html',
  styleUrls: ['./aingreso.page.scss'],
})
export class AingresoPage implements OnInit, AfterViewInit {
  code: any;
  scanActive = false;
  scanResult = null;
  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  @ViewChild(IonAvatar, { read: ElementRef }) avatar!: ElementRef<HTMLIonAvatarElement>;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  loading!: HTMLIonLoadingElement;
  public alertButtons = ['OK'];
  private animation!: Animation;
  public user = {
    usuario: '',
    password: '',
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private animationCtrl: AnimationController
  ) {}

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');

    this.animation = this.animationCtrl
      .create()
      .addElement(this.avatar.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
  }
  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }



  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    });
  }
  
  

  async captar() {
    try {
      const options: BarcodeScannerOptions = {
        prompt: 'Scan the QR Code',  // Puedes personalizar el mensaje
      };
      
      const barcodeData = await this.barcodeScanner.scan(options);
      this.code = barcodeData.text;
      console.log('Barcode data', barcodeData);
    } catch (err) {
      console.log('Error', err);
    }
  }

  async starscan() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.srcObject = stream;
      this.videoElement.setAttribute('playsinline', true);
      this.videoElement.play();
      this.loading = await this.loadingCtrl.create({});
      await this.loading.present();
      requestAnimationFrame(this.scan.bind(this));
    } catch (error) {
      console.error('Error accessing camera', error);
    }
  }

  scan() {
    console.log('SCAN');
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        this.loading.dismiss().then(() => {
          this.loading!;
          this.scanActive = true;
        });
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      console.log('code: ', code);

      if (code) {
        this.scanActive = false;
        this.scanResult!;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  reset() {
    this.scanResult = null;
  }

  stopscan() {
    this.scanActive = false;
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: 'top',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(this.scanResult!, '_system', 'location=yes');
          },
        },
      ],
    });
    toast.present();
  }
  
}
