import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-result',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered">
        <div class="title">No results</div>
        <div class="content">
          In this demo you can find results only for Milano and Roma
          <button type="submit" routerLink="search" >Back</button>
        </div>

      </div>

    </div>
  `,
  styles: []
})
export class NoResultComponent {

}
