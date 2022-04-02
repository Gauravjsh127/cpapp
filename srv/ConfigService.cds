using { cpapp.industry } from '../db/industryconfigmodel';


service ConfigurationService@(path: '/ConfigurationService-test') {

    entity ConfigurationSet @(restrict : [
        {
            grant : [ 'READ' ],
            to : [ 'Client' ]
        },
        {
            grant : [ '*' ],
            to : [ 'Admin' ]
        }
    ]) as projection on industry.Configuration;

}