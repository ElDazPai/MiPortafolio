import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface Toast {
  mensaje: string;
  tipo: 'success' | 'error';
  visible: boolean;
}

@Component({
  selector: 'app-section-six',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section-six.component.html',
  styleUrl: './section-six.component.css'
})
export class SectionSixComponent {
  isLoading = false;
  toast: Toast = {
    mensaje: '',
    tipo: 'success',
    visible: false
  };
  
  contactForm: ContactForm = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  contactInfo = {
    email: 'daz201918@outlook.com',
    telefono: '+57 324 2359 227',
    ubicacion: 'Colombia, Barranquilla'
  };

  mostrarToast(mensaje: string, tipo: 'success' | 'error') {
    this.toast = {
      mensaje,
      tipo,
      visible: true
    };

    // Cerrar el toast después de 3 segundos
    setTimeout(() => {
      this.toast.visible = false;
    }, 3000);
  }

  async enviarMensaje() {
    if (this.isLoading) return;
    
    this.isLoading = true;
    try {
      const response = await emailjs.send(
        'service_vgugdtf',
        'template_f04nw97',
        {
          name: this.contactForm.nombre,
          email: this.contactForm.email,
          subject: this.contactForm.asunto,
          message: this.contactForm.mensaje,
          to_name: 'Daniel'
        },
        'n1AssFxSPiF8S2TbQ'
      );

      if (response.status === 200) {
        this.mostrarToast('¡Mensaje enviado con éxito!', 'success');
        // Limpiar el formulario
        this.contactForm = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      this.mostrarToast('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
    } finally {
      this.isLoading = false;
    }
  }
}
