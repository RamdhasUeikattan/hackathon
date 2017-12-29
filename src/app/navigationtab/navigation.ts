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
    public data: Object[] = [
        { category: 'Style', id: 1, class: 'Style' },
        { category: 'Tech', id: 2, class: 'Tech' },
        { category: 'Health', id: 3, class: 'Health' },
        { category: 'Entertainment', id: 4, class: 'Entertainment' }];
    public fields: Object = { text: 'category'};
}
