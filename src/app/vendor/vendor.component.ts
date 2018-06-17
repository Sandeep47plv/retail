import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  title: String = "22227 Paul Miller BMW";
  columnDefs: any[];
  rowData: any[];

  constructor(private router:Router) {
    this.columnDefs = [
      {
        headerName: 'Stop Sale',
        field: 'stopSales',
        width: 120,
      },
      {
        headerName: 'Overall Remedy Available',
        field: 'RemedyCode',
        width: 150,
      },
      {
        headerName: 'VIN',
        field: 'vin',
        width: 300
      },
      {
        headerName: 'Chassis',
        field: 'chasis',
        width: 120
      }, {
        headerName: 'In PMA',
        field: 'inPMA',
        width: 150
      },
      {
        headerName: 'Last service Date',
        field: 'serviceDate',
        width: 150
      },
      {
        headerName: 'Months Since Last Service',
        field: 'MSLD',
        width: 180,
      },
      {
        headerName: 'Minimum Oppurtunity Hours',
        field: 'MOH',
        width: 150,

      },
      {
        headerName: 'Remedy Status-All open Campaigns',
        field: 'ROOC',
        width: 480
      },
      {
        headerName: 'Engineering Series',
        field: 'ES',
        width: 100
      },
      {
        headerName: 'NA Model Code - Description',
        field: 'NAD',
        width: 100
      },
      {
        headerName: 'Model Year',
        field: 'MY',
        width: 100
      },
      {
        headerName: 'Customer Name',
        field: 'CN',
        width: 100
      }

    ];

    this.rowData = [
      {
        stopSales: 'Stop',
        remedyCode: 'yes',
        vin: '5UXTR9C503568',
        chasis: 'LC82187',
        inPMA: 'Yes',
        serviceDate: '03/20/2018',
        MSLD: '2',
        MOH: '0.3',
        ROOC: 'Y',
        ES: 'G01',
        NAD: 'X3',
        MY: '2017',
        CN: 'FRANK',
      },
      {
        stopSales: 'Stop',
        remedyCode: 'warn',
        vin: 'C410811 Recall check reapair spoilers',
        chasis: 'C510811',
        inPMA: 'NO',
        serviceDate: '03/20/2018',
        MSLD: '4',
        MOH: '0.2',
        ROOC: 'N',
        ES: 'Y01',
        NAD: 'D3',
        MY: '1999',
        CN: 'MARK',
      },
      {
        stopSales: 'Stop',
        remedyCode: 'stop',
        vin: 'B510811 Recall check reapair spoilers',
        chasis: 'B510811',
        inPMA: 'Yes',
        serviceDate: '03/20/2018',
        MSLD: '4',
        MOH: '0.2',
        ROOC: 'YN',
        ES: 'Z01',
        NAD: 'G3',
        MY: '2010',
        CN: 'JOHN',
      }
    ];

  }

  ngOnInit() {
  }

  goToRoute(path: string) {
    if (path !== '') {
        this.router.navigateByUrl(path);
    }
}
}
