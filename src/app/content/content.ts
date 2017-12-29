import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `<div>
  <ej-listview id='content-list' [dataSource]='data' [fields]='fields' showHeader='false'>
                <ng-template #template let-data>
                    <span class='{{data.class}} icon'><span class='media'>{{data.category}}</span></span>
                </ng-template>
            </ej-listview></div>`
})
export class ContentComponent {
    public data: Object[] = [];
    public fields: Object = { text: 'category'};
}
