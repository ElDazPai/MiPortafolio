import { Component, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-seccion-four',
  standalone: true,
  imports: [],
  templateUrl: './seccion-four.component.html',
  styleUrl: './seccion-four.component.css'
})
export class SeccionFourComponent implements AfterViewInit {
  @ViewChild('certificatesScroll') certificatesScroll!: ElementRef;

  scrollAmount = 400; // Cantidad de píxeles a desplazar

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Esperar a que el DOM esté listo
      setTimeout(() => {
        if (window.innerWidth <= 768) { // Para dispositivos móviles
          const container = this.certificatesScroll.nativeElement;
          const cardWidth = 300; // Ancho de la tarjeta
          const scrollPosition = cardWidth * 2; // Posición de la tercera tarjeta
          container.scrollLeft = scrollPosition;
        }
      }, 100);
    }
  }

  scrollLeft() {
    if (isPlatformBrowser(this.platformId)) {
      const container = this.certificatesScroll.nativeElement;
      container.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (isPlatformBrowser(this.platformId)) {
      const container = this.certificatesScroll.nativeElement;
      container.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  async downloadImage(imageUrl: string, title: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      // Crear un elemento de imagen
      const img = new Image();
      img.crossOrigin = 'anonymous';  // Importante para CORS
      
      img.onload = () => {
        // Crear un canvas
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Dibujar la imagen en el canvas
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          
          // Convertir a blob
          canvas.toBlob((blob) => {
            if (blob) {
              // Crear URL del blob
              const url = window.URL.createObjectURL(blob);
              
              // Crear enlace de descarga
              const link = document.createElement('a');
              link.href = url;
              
              // Determinar la extensión
              const extension = imageUrl.toLowerCase().endsWith('.jpg') || 
                              imageUrl.toLowerCase().endsWith('.jpeg') ? 'jpg' : 'png';
              
              link.download = `${title.toLowerCase().replace(/ /g, '_')}_certificado.${extension}`;
              
              // Simular clic y limpiar
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
            }
          }, 'image/jpeg', 1.0);
        }
      };
      
      img.src = imageUrl;
      
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
      alert('Hubo un error al descargar la imagen. Por favor, inténtalo de nuevo.');
    }
  }
}
