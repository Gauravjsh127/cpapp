using { cpapp.project } from '../db/projectdatamodels';


service RunModelService@(path: '/RunModelService') {

    function runmodel(project_id:String) returns String;

}