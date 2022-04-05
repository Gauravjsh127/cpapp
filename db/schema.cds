namespace cpapp.db;
using { cuid } from '@sap/cds/common';


entity Data {
    key project_id : String(20);
    input_1  : Integer;
    input_2  : Integer;
    input_3  : Integer;
    input_4  : Integer;
}

entity Config {
    key project_id : String(20);
    config_1  : Integer;
    config_2  : Integer;
    config_3  : Integer;
    config_4  : Integer;
}

entity Result {
    key project_id : String(20);
    output_1  : Integer;
    output_2  : Integer;
    output_3  : Integer;
    output_4  : Integer;
}

entity Excels {
  key ID : UUID;
  @Core.MediaType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  content : LargeBinary;
}