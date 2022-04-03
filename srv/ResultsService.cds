using { cpapp.results } from '../db/resultmodels';


service ResultsDataService@(path: '/ResultsDataService') {

    entity ResultsDataSet as projection on results.ResultsData;

}