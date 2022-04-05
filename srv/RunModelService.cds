using cpapp.db as cpapp from '../db/schema';

service RunModelService@(path: '/RunModelService') {

    function runmodel(project_id:String) returns String;

    entity Excels as projection on cpapp.Excels;

}