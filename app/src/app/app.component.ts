import { Component } from '@angular/core';
import { fadeAnimation } from '@shared/animations/fade';

@Component({
  selector: 'ang-root',
  template: `
    <main [@fadeAnimation]="getRouterOutletState(routerOutlet)">
        <router-outlet #routerOutlet="outlet"></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  public getRouterOutletState(routerOutlet: any) {
    return routerOutlet.isActivated ? routerOutlet.activatedRoute : '';
  }
}
