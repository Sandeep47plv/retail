import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-dealer',
    templateUrl: './dealer.component.html',
    styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

    title = '22227 Paul Miller BMW';
    campaigneTypes: SelectItem[];
    verticalCampaigneTypes: SelectItem[];
    selectedCampaigneType: any;
    columnDefs: any[];
    rowData: any[];
    lineTypes: SelectItem[];
    selectedLineType: any;
    fromDate: any = "";
    toDate: any = "";
    selectedVerticalType: any;
    subFromDate: any;
    subToDate: any;
    percent = "45.9/52";
    descEFRUOrder = 1;

    constructor() {
        this.columnDefs = [
            {
                headerName: 'Stop Sales',
                field: 'stopSales',
                width: 120,
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
                width: 180,
                sortable: true
            },
            {
                headerName: 'Estimated FRU',
                field: 'EFRU',
                width: 150,

            },
            {
                headerName: 'Eligibility Outreach Opportunity Hours',
                field: 'EOOH',
                width: 180
            }, {
                headerName: 'Dash Board',
                field: 'dashboard', width: 150
            }
        ];

        this.rowData = [
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
                defectCode: '1051270432',
                defectDescription: 'B510561 Recall Tank leake check',
                bulletinNumber: 'C510561',
                EOO: 157,
                recallNumber: '',
                startDate: '03/20/2018',
                EFRU: 0,
                EOOH: 0,
                dashboard: '',
            },
            {
                stopSales: 'Stop',
                defectCode: '2051270442',
                defectDescription: 'B210561 Fix Breaks',
                bulletinNumber: 'D210561',
                EOO: 17,
                recallNumber: '15V-e3',
                startDate: '03/22/2018',
                EFRU: 8,
                EOOH: 4,
                dashboard: '',
            }
        ];

        this.verticalCampaigneTypes = [
            { label: 'Vehical for Which all Campaign(s) can be fixed', value: 'Vehical for Which all Campaign(s) can be fixed' },
            { label: 'Action', value: 'action' },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 }
        ];

        this.campaigneTypes = [
            { label: 'ALL', value: 'All' },
            { label: 'E-Emission', value: 'E-Emission' },
            { label: 'Other', value: 'Other' },
            { label: 'S-Saftey', value: 'S-Saftey' },
        ];

        this.lineTypes = [
            { label: 'ALL', value: 'All' },
            { label: 'SUV', value: 'suv' },
            { label: 'MINI', value: 'mini' },
        ]
    }

    ngOnInit() {

        this.selectedCampaigneType = this.campaigneTypes.slice(0, 1).map(a => a.value);
        this.selectedLineType = this.lineTypes.slice(0, 1).map(a => a.value);
        this.selectedVerticalType = this.verticalCampaigneTypes.slice(0, 1).map(a => a.value);
    }
    private getDate() {
        let fromDate: any = this.fromDate;
        let toDate: any = this.toDate;

        if (!!fromDate && !!toDate) {
            return new Date(fromDate).toLocaleDateString("en-US") + "-" + new Date(toDate).toLocaleDateString("en-US");
        }
        else {
            return "All";
        }

    }

    private clear() {
        this.selectedCampaigneType = this.campaigneTypes.slice(0, 1).map(a => a.value);
        this.selectedLineType = this.lineTypes.slice(0, 1).map(a => a.value);
        this.selectedVerticalType = "";
        this.fromDate = "";
        this.toDate = "";
    }
}
