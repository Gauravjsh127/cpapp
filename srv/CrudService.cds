using cpapp.db as cpapp from '../db/schema';

service CrudService@(path: '/CrudService') {

    entity Config @(restrict : [
        {
            grant : [ 'READ' ],
            to : [ 'Client' ]
        },
        {
            grant : [ '*' ],
            to : [ 'Admin' ]
        }
    ]) as select from cpapp.Config;

    entity Data as projection on cpapp.Data;

    @readonly entity Result as projection on cpapp.Result;

}