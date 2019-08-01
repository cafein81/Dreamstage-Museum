import { IgxColumnComponent } from '../../column.component';
import { IgxGridBaseComponent } from '../../grid-base.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export declare class IgxExcelStyleColumnMovingComponent {
    column: IgxColumnComponent;
    grid: IgxGridBaseComponent;
    displayDensity: DisplayDensity;
    constructor();
    private readonly visibleColumns;
    readonly canNotMoveLeft: boolean;
    readonly canNotMoveRight: boolean;
    onMoveButtonClicked(moveDirection: any): void;
    private findColumn;
}
