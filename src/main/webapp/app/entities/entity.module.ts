import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterApplication5RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterApplication5CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterApplication5LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterApplication5DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterApplication5TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterApplication5EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterApplication5JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterApplication5JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterApplication5RegionMySuffixModule,
        JhipsterApplication5CountryMySuffixModule,
        JhipsterApplication5LocationMySuffixModule,
        JhipsterApplication5DepartmentMySuffixModule,
        JhipsterApplication5TaskMySuffixModule,
        JhipsterApplication5EmployeeMySuffixModule,
        JhipsterApplication5JobMySuffixModule,
        JhipsterApplication5JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterApplication5EntityModule {}
