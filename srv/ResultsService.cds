using { cpapp.results } from '../db/resultmodels';


service ResultsDataService@(path: '/ResultsDataService') {

    entity ResultsDataSet @(restrict : [
        {
            grant : [ 'READ' ],
            to : [ 'Client' ]
        },
        {
            grant : [ '*' ],
            to : [ 'Admin' ]
        }
    ]) as projection on results.ResultsData;

}