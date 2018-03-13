import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterApplication5SharedModule } from '../../shared';
import {
    JobMySuffixService,
    JobMySuffixPopupService,
    JobMySuffixComponent,
    JobMySuffixDetailComponent,
    JobMySuffixDialogComponent,
    JobMySuffixPopupComponent,
    JobMySuffixDeletePopupComponent,
    JobMySuffixDeleteDialogComponent,
    jobRoute,
    jobPopupRoute,
    JobMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...jobRoute,
    ...jobPopupRoute,
];

@NgModule({
    imports: [
        JhipsterApplication5SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        JobMySuffixComponent,
        JobMySuffixDetailComponent,
        JobMySuffixDialogComponent,
        JobMySuffixDeleteDialogComponent,
        JobMySuffixPopupComponent,
        JobMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        JobMySuffixComponent,
        JobMySuffixDialogComponent,
        JobMySuffixPopupComponent,
        JobMySuffixDeleteDialogComponent,
        JobMySuffixDeletePopupComponent,
    ],
    providers: [
        JobMySuffixService,
        JobMySuffixPopupService,
        JobMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterApplication5JobMySuffixModule {}
