import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '22227 Paul miller BMW';
  percent="45.9/52";
       columnDefs = [
          {
              headerName: 'Stop Sales',
              field: 'stopSales',
               width: 120
          },
          {
              headerName: 'Defect Code',
              field: 'defectCode',
              width: 150,
          },
          {
              headerName: 'Defect Description',
              field: 'defectDescription',
               width: 300
          },
          {
              headerName: 'Bulletin Number',
              field: 'bulletinNumber',
               width: 120
          }, {
              headerName: 'Recall Number',
              field: 'recallNumber',
               width: 120
          },
          {
              headerName: 'Campaign Start Date',
              field: 'startDate',
               width: 150
          },
          {
              headerName: 'Eligibility Outreach Opportunity',
              field: 'EOO',
               width: 180
          },
          {
              headerName: 'Estimated FRU',
              field: 'EFRU',
              width: 150,
              unSortIcon: true
          },
             {
              headerName: 'Eligibility Outreach Opportunity Hours',
              field: 'EOOH',
               width: 180
          },{
              headerName: 'Dash Board',
              field: 'dashboard',width: 150
          }
      ];
  
      rowData = [
          {
              stopSales: 'Stop',
              defectCode: '0051270422',
              defectDescription: 'B510811 Recall check reapair spoilers',
              bulletinNumber: 'B510811',
              EOO: 3,
              recallNumber: '18-v-154',
              startDate: '03/20/2018',
              EFRU: 4,
              EOOH: 12,
              dashboard: '',
          },
          {
              stopSales: 'Stop',
              defectCode: '0051270432',
              defectDescription: 'B510561 Recall Tank leake check',
              bulletinNumber: 'B510561',
              EOO: 157,
              recallNumber: '',
              startDate: '03/20/2018',
              EFRU: 0,
              EOOH: 0,
              dashboard: '',
          },
          {
              stopSales: 'Stop',
              defectCode: '0051270442',
              defectDescription: 'B210561 Fix Breaks',
              bulletinNumber: 'B210561',
              EOO: 17,
              recallNumber: '15V-e3',
              startDate: '03/22/2018',
              EFRU: 8,
              EOOH: 4,
              dashboard: '',
          }
      ];
  }


