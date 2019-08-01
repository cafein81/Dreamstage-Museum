import { ChangeDetectorRef, ElementRef, NgZone, OnInit } from '@angular/core';
import { IgxGridCellComponent } from '../cell.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export declare class IgxTreeGridCellComponent extends IgxGridCellComponent implements OnInit {
    protected zone: NgZone;
    document: any;
    private treeGridAPI;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxSelectionAPIService, cdr: ChangeDetectorRef, element: ElementRef, zone: NgZone, document: any);
    /**
     * @hidden
     */
    expanded: boolean;
    /**
     * @hidden
     */
    level: number;
    /**
     * @hidden
     */
    showIndicator: boolean;
    indicator: ElementRef;
    indentationDiv: ElementRef;
    defaultContentElement: ElementRef;
    /**
     * @hidden
     */
    isLoading: boolean;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    toggle(event: Event): void;
    /**
     * @hidden
     */
    onIndicatorFocus(): void;
    /**
     * @hidden
     */
    onLoadingDblClick(event: Event): void;
    /**
     * @hidden
     */
    calculateSizeToFit(range: any): number;
}
