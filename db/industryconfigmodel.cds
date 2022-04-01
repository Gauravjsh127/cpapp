namespace cpapp.industry;
using { cuid } from '@sap/cds/common';


entity Configuration {
    key project_id : String(20);
    config_1  : Integer;
    config_2  : Integer;
    config_3  : Integer;
    config_4  : Integer;
}