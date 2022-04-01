namespace cpapp.project;
using { cuid } from '@sap/cds/common';

entity ProjectData {
    key project_id : String(20);
    input_1  : Integer;
    input_2  : Integer;
    input_3  : Integer;
    input_4  : Integer;
}
    