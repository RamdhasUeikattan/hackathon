import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<ej-listview id='sample-list' [dataSource]='data' [fields]='fields' showHeader='true' headerTitle='Categories' width=200>
                <ng-template #template let-data>
                    <span class='{{data.class}} icon'><span class='media'>{{data.category}}</span></span>
                </ng-template>
            </ej-listview>`
})
export class NavigationComponent {
    public data: Object[] = [];
    public fields: Object = { text: 'category'};
}
