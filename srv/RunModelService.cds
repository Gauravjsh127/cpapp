using { cpapp.project } from '../db/projectdatamodels';


service RunModelService@(path: '/RunModelService') {

    function runmodel(msg:String) returns String;

}