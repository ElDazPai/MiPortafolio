import { Component } from '@angular/core';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SectionOneComponent } from './componentes/section-one/section-one.component';
import { SectionTwoComponent } from './componentes/section-two/section-two.component';  
import { SectionTrheComponent } from './componentes/section-trhe/section-trhe.component';
import { SeccionFourComponent } from './componentes/seccion-four/seccion-four.component';
import { SectionFiveComponent } from './componentes/section-five/section-five.component';
import { SectionSixComponent } from './componentes/section-six/section-six.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SectionOneComponent, SectionTwoComponent, SectionTrheComponent, SeccionFourComponent, 
    SectionFiveComponent, SectionSixComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
