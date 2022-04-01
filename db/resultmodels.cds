namespace cpapp.results;
using { cuid } from '@sap/cds/common';

entity ResultsData {
    key project_id : String(20);
    output_1  : Integer;
    output_2  : Integer;
    output_3  : Integer;
    output_4  : Integer;
}