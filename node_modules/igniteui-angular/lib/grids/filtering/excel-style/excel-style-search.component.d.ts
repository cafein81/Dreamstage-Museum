import { AfterViewInit } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { IChangeCheckboxEventArgs } from '../../../checkbox/checkbox.component';
import { IgxInputDirective } from '../../../directives/input/input.directive';
import { DisplayDensity } from '../../../core/density';
import { IgxForOfDirective } from '../../../directives/for-of/for_of.directive';
import { FilterListItem } from './grid.excel-style-filtering.component';
/**
 * @hidden
 */
export declare class IgxExcelStyleSearchComponent implements AfterViewInit {
    searchValue: any;
    data: FilterListItem[];
    column: IgxColumnComponent;
    searchInput: IgxInputDirective;
    displayDensity: DisplayDensity;
    protected virtDir: IgxForOfDirective<any>;
    constructor();
    ngAfterViewInit(): void;
    clearInput(): void;
    onCheckboxChange(eventArgs: IChangeCheckboxEventArgs): void;
    readonly itemSize: string;
}
