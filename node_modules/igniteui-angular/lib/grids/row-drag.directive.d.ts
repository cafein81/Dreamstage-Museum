import { OnDestroy } from '@angular/core';
import { IgxDragDirective } from '../directives/dragdrop/dragdrop.directive';
/**
 * @hidden
 */
export declare class IgxRowDragDirective extends IgxDragDirective implements OnDestroy {
    private row;
    private subscription$;
    private _rowDragStarted;
    data: any;
    onPointerDown(event: any): void;
    onPointerMove(event: any): void;
    onPointerUp(event: any): void;
    protected createDragGhost(event: any): void;
    private _unsubscribe;
    private endDragging;
    private transitionEndEvent;
}
/**
 * @hidden
 */
export declare class IgxDragIndicatorIconDirective {
}
export declare class IgxRowDragModule {
}
