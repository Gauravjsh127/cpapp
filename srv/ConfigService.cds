using { cpapp.industry } from '../db/industryconfigmodel';


service ConfigService@(path: '/ConfigService') {

    @insertonly entity CreateConfig @(restrict : [
        {
            grant : [ '*' ],
            to : [ 'Admin' ]
        }
    ]) as projection on industry.Config;


    @readonly entity GetConfig as projection on industry.Config;

}