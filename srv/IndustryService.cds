using cpapp.industry as cpapp from '../db/industryconfigmodel';

service IndustryService {
    entity Config as select from cpapp.Config;
}