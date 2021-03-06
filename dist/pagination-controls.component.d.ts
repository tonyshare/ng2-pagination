import { EventEmitter } from '@angular/core';
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
export declare class PaginationControlsComponent {
    id: string;
    maxSize: number;
    directionLinks: boolean;
    autoHide: boolean;
    pageChange: EventEmitter<number>;
    private _directionLinks;
    private _autoHide;
}
