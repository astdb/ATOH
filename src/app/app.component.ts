import { Component } from '@angular/core';

// decorator function specifying Angular metadata for this component
@Component({
  selector: 'app-root',     // the component's CSS elememnt selector
  templateUrl: './app.component.html',  // location of the component's template file
  styleUrls: ['./app.component.css']  // location of component's private CSS styles
})
export class AppComponent {
  title = 'ATOH';
}
