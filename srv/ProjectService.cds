using { cpapp.project } from '../db/projectdatamodels';


service ProjectService@(path: '/ProjectService') {

    entity ProjectDataSet @(restrict : [
        {
            grant : [ 'READ' ],
            to : [ 'Client' ]
        },
        {
            grant : [ '*' ],
            to : [ 'Admin' ]
        }
    ]) as projection on project.ProjectData;

}