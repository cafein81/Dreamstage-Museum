/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridBaseAPIService } from '../api.service';
import { DataType } from '../../data-operations/data-util';
import { TransactionType } from '../../services';
import { mergeObjects } from '../../core/utils';
export class IgxTreeGridAPIService extends GridBaseAPIService {
    /**
     * @param {?=} transactions
     * @return {?}
     */
    get_all_data(transactions) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const data = transactions ? grid.dataWithAddedInTransactionRows : grid.flatData;
        return data ? data : [];
    }
    /**
     * @return {?}
     */
    get_summary_data() {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const data = grid.processedRootRecords.filter(row => row.isFilteredOutParent === undefined || row.isFilteredOutParent === false)
            .map(rec => rec.data);
        if (grid.transactions.enabled) {
            /** @type {?} */
            const deletedRows = grid.transactions.getTransactionLog().filter(t => t.type === TransactionType.DELETE).map(t => t.id);
            deletedRows.forEach(rowID => {
                /** @type {?} */
                const tempData = grid.primaryKey ? data.map(rec => rec[grid.primaryKey]) : data;
                /** @type {?} */
                const index = tempData.indexOf(rowID);
                if (index !== -1) {
                    data.splice(index, 1);
                }
            });
        }
        return data;
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    expand_row(rowID) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const expandedStates = grid.expansionStates;
        expandedStates.set(rowID, true);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    collapse_row(rowID) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const expandedStates = grid.expansionStates;
        expandedStates.set(rowID, false);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    toggle_row_expansion(rowID) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const expandedStates = grid.expansionStates;
        /** @type {?} */
        const treeRecord = grid.records.get(rowID);
        if (treeRecord) {
            /** @type {?} */
            const isExpanded = this.get_row_expansion_state(treeRecord);
            expandedStates.set(rowID, !isExpanded);
            grid.expansionStates = expandedStates;
        }
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    }
    /**
     * @param {?} row
     * @param {?} expanded
     * @param {?=} event
     * @param {?=} visibleColumnIndex
     * @return {?}
     */
    trigger_row_expansion_toggle(row, expanded, event, visibleColumnIndex) {
        /** @type {?} */
        const grid = this.grid;
        if (row.expanded === expanded ||
            ((!row.children || !row.children.length) && (!grid.loadChildrenOnDemand ||
                (grid.hasChildrenKey && !row.data[grid.hasChildrenKey])))) {
            return;
        }
        /** @type {?} */
        const args = {
            rowID: row.rowID,
            expanded: expanded,
            event: event,
            cancel: false
        };
        grid.onRowToggle.emit(args);
        if (args.cancel) {
            return;
        }
        visibleColumnIndex = visibleColumnIndex ? visibleColumnIndex : 0;
        /** @type {?} */
        const expandedStates = grid.expansionStates;
        expandedStates.set(row.rowID, expanded);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
        requestAnimationFrame(() => {
            /** @type {?} */
            const el = this.grid.selectionService.activeElement;
            if (el) {
                /** @type {?} */
                const cell = this.get_cell_by_visible_index(el.row, el.column);
                if (cell) {
                    cell.nativeElement.focus();
                }
            }
        });
    }
    /**
     * @param {?} record
     * @return {?}
     */
    expand_path_to_record(record) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const expandedStates = grid.expansionStates;
        while (record.parent) {
            record = record.parent;
            /** @type {?} */
            const expanded = this.get_row_expansion_state(record);
            if (!expanded) {
                expandedStates.set(record.rowID, true);
            }
        }
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    }
    /**
     * @param {?} record
     * @return {?}
     */
    get_row_expansion_state(record) {
        /** @type {?} */
        const grid = this.grid;
        /** @type {?} */
        const states = grid.expansionStates;
        /** @type {?} */
        const expanded = states.get(record.rowID);
        if (expanded !== undefined) {
            return expanded;
        }
        else {
            return record.children && record.children.length && record.level < grid.expansionDepth;
        }
    }
    /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    update_row_in_array(value, rowID, index) {
        /** @type {?} */
        const grid = this.grid;
        if (grid.primaryKey && grid.foreignKey) {
            super.update_row_in_array(value, rowID, index);
        }
        else {
            /** @type {?} */
            const record = grid.records.get(rowID);
            /** @type {?} */
            const childData = record.parent ? record.parent.data[grid.childDataKey] : grid.data;
            index = grid.primaryKey ? childData.map(c => c[grid.primaryKey]).indexOf(rowID) :
                childData.indexOf(rowID);
            childData[index] = value;
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    should_apply_number_style(column) {
        return column.dataType === DataType.Number && column.visibleIndex !== 0;
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    deleteRowById(rowID) {
        /** @type {?} */
        const treeGrid = this.grid;
        /** @type {?} */
        const flatDataWithCascadeOnDeleteAndTransactions = treeGrid.primaryKey &&
            treeGrid.foreignKey &&
            treeGrid.cascadeOnDelete &&
            treeGrid.transactions.enabled;
        if (flatDataWithCascadeOnDeleteAndTransactions) {
            treeGrid.transactions.startPending();
        }
        super.deleteRowById(rowID);
        if (flatDataWithCascadeOnDeleteAndTransactions) {
            treeGrid.transactions.endPending(true);
        }
    }
    /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    deleteRowFromData(rowID, index) {
        /** @type {?} */
        const treeGrid = this.grid;
        /** @type {?} */
        const record = treeGrid.records.get(rowID);
        if (treeGrid.primaryKey && treeGrid.foreignKey) {
            index = treeGrid.primaryKey ?
                treeGrid.data.map(c => c[treeGrid.primaryKey]).indexOf(rowID) :
                treeGrid.data.indexOf(rowID);
            super.deleteRowFromData(rowID, index);
            if (treeGrid.cascadeOnDelete) {
                if (record && record.children && record.children.length > 0) {
                    for (let i = 0; i < record.children.length; i++) {
                        /** @type {?} */
                        const child = record.children[i];
                        super.deleteRowById(child.rowID);
                    }
                }
            }
        }
        else {
            /** @type {?} */
            const collection = record.parent ? record.parent.data[treeGrid.childDataKey] : treeGrid.data;
            index = treeGrid.primaryKey ?
                collection.map(c => c[treeGrid.primaryKey]).indexOf(rowID) :
                collection.indexOf(rowID);
            /** @type {?} */
            const selectedChildren = [];
            this.get_selected_children(record, selectedChildren);
            if (selectedChildren.length > 0) {
                treeGrid.deselectRows(selectedChildren);
            }
            if (treeGrid.transactions.enabled) {
                /** @type {?} */
                const path = treeGrid.generateRowPath(rowID);
                treeGrid.transactions.add({
                    id: rowID,
                    type: TransactionType.DELETE,
                    newValue: null,
                    path: path
                }, collection[index]);
            }
            else {
                collection.splice(index, 1);
            }
        }
    }
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @protected
     * @param {?} grid Grid to update data for
     * @param {?} rowID ID of the row to update
     * @param {?} rowValueInDataSource Initial value of the row as it is in data source
     * @param {?} rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param {?} rowNewValue New value of the row
     * @return {?}
     */
    updateData(grid, rowID, rowValueInDataSource, rowCurrentValue, rowNewValue) {
        if (grid.transactions.enabled) {
            /** @type {?} */
            const path = grid.generateRowPath(rowID);
            /** @type {?} */
            const transaction = {
                id: rowID,
                type: TransactionType.UPDATE,
                newValue: rowNewValue,
                path: path
            };
            grid.transactions.add(transaction, rowCurrentValue);
        }
        else {
            mergeObjects(rowValueInDataSource, rowNewValue);
        }
    }
    /**
     * @param {?} record
     * @param {?} selectedRowIDs
     * @return {?}
     */
    get_selected_children(record, selectedRowIDs) {
        /** @type {?} */
        const grid = this.grid;
        if (!record.children || record.children.length === 0) {
            return;
        }
        for (const child of record.children) {
            if (grid.selection.is_item_selected(grid.id, child.rowID)) {
                selectedRowIDs.push(child.rowID);
            }
            this.get_selected_children(child, selectedRowIDs);
        }
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    row_deleted_transaction(rowID) {
        return this.row_deleted_parent(rowID) || super.row_deleted_transaction(rowID);
    }
    /**
     * @private
     * @param {?} rowID
     * @return {?}
     */
    row_deleted_parent(rowID) {
        /** @type {?} */
        const grid = this.grid;
        if (!grid) {
            return false;
        }
        if ((grid.cascadeOnDelete && grid.foreignKey) || grid.childDataKey) {
            /** @type {?} */
            let node = grid.records.get(rowID);
            while (node) {
                /** @type {?} */
                const state = grid.transactions.getState(node.rowID);
                if (state && state.type === TransactionType.DELETE) {
                    return true;
                }
                node = node.parent;
            }
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJM0QsT0FBTyxFQUEyQixlQUFlLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUF3Qzs7Ozs7SUFDeEUsWUFBWSxDQUFDLFlBQXNCOztjQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7O2NBQ2hCLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDL0UsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxnQkFBZ0I7O2NBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztjQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLG1CQUFtQixLQUFLLEtBQUssQ0FBQzthQUMzSCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7O2tCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLFlB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QyxlQUFlLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O2dCQUM1RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxFQUFFOztzQkFDSCxLQUFLLEdBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDM0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsTUFBTSxFQUFFO29CQUNoRCxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSVJvd1RvZ2dsZUV2ZW50QXJncyB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlLCBTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IG1lcmdlT2JqZWN0cyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRBUElTZXJ2aWNlIGV4dGVuZHMgR3JpZEJhc2VBUElTZXJ2aWNlPElneFRyZWVHcmlkQ29tcG9uZW50PiB7XG4gICAgcHVibGljIGdldF9hbGxfZGF0YSh0cmFuc2FjdGlvbnM/OiBib29sZWFuKTogYW55W10ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBkYXRhID0gdHJhbnNhY3Rpb25zID8gZ3JpZC5kYXRhV2l0aEFkZGVkSW5UcmFuc2FjdGlvblJvd3MgOiBncmlkLmZsYXREYXRhO1xuICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3N1bW1hcnlfZGF0YSgpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdyaWQucHJvY2Vzc2VkUm9vdFJlY29yZHMuZmlsdGVyKHJvdyA9PiByb3cuaXNGaWx0ZXJlZE91dFBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IHJvdy5pc0ZpbHRlcmVkT3V0UGFyZW50ID09PSBmYWxzZSlcbiAgICAgICAgICAgIC5tYXAocmVjID0+IHJlYy5kYXRhKTtcbiAgICAgICAgaWYgKGdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRSb3dzID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0VHJhbnNhY3Rpb25Mb2coKS5maWx0ZXIodCA9PiB0LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpLm1hcCh0ID0+IHQuaWQpO1xuICAgICAgICAgICAgZGVsZXRlZFJvd3MuZm9yRWFjaChyb3dJRCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcERhdGEgPSBncmlkLnByaW1hcnlLZXkgPyBkYXRhLm1hcChyZWMgPT4gcmVjW2dyaWQucHJpbWFyeUtleV0pIDogZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRlbXBEYXRhLmluZGV4T2Yocm93SUQpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBleHBhbmRfcm93KHJvd0lEOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRTdGF0ZXMgPSBncmlkLmV4cGFuc2lvblN0YXRlcztcbiAgICAgICAgZXhwYW5kZWRTdGF0ZXMuc2V0KHJvd0lELCB0cnVlKTtcbiAgICAgICAgZ3JpZC5leHBhbnNpb25TdGF0ZXMgPSBleHBhbmRlZFN0YXRlcztcbiAgICAgICAgaWYgKGdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsYXBzZV9yb3cocm93SUQ6IGFueSkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBleHBhbmRlZFN0YXRlcyA9IGdyaWQuZXhwYW5zaW9uU3RhdGVzO1xuICAgICAgICBleHBhbmRlZFN0YXRlcy5zZXQocm93SUQsIGZhbHNlKTtcbiAgICAgICAgZ3JpZC5leHBhbnNpb25TdGF0ZXMgPSBleHBhbmRlZFN0YXRlcztcbiAgICAgICAgaWYgKGdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVfcm93X2V4cGFuc2lvbihyb3dJRDogYW55KSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkU3RhdGVzID0gZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG4gICAgICAgIGNvbnN0IHRyZWVSZWNvcmQgPSBncmlkLnJlY29yZHMuZ2V0KHJvd0lEKTtcblxuICAgICAgICBpZiAodHJlZVJlY29yZCkge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IHRoaXMuZ2V0X3Jvd19leHBhbnNpb25fc3RhdGUodHJlZVJlY29yZCk7XG4gICAgICAgICAgICBleHBhbmRlZFN0YXRlcy5zZXQocm93SUQsICFpc0V4cGFuZGVkKTtcbiAgICAgICAgICAgIGdyaWQuZXhwYW5zaW9uU3RhdGVzID0gZXhwYW5kZWRTdGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyX3Jvd19leHBhbnNpb25fdG9nZ2xlKHJvdzogSVRyZWVHcmlkUmVjb3JkLCBleHBhbmRlZDogYm9vbGVhbiwgZXZlbnQ/OiBFdmVudCwgdmlzaWJsZUNvbHVtbkluZGV4Pykge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgICAgIGlmIChyb3cuZXhwYW5kZWQgPT09IGV4cGFuZGVkIHx8XG4gICAgICAgICAgICAoKCFyb3cuY2hpbGRyZW4gfHwgIXJvdy5jaGlsZHJlbi5sZW5ndGgpICYmICghZ3JpZC5sb2FkQ2hpbGRyZW5PbkRlbWFuZCB8fFxuICAgICAgICAgICAgKGdyaWQuaGFzQ2hpbGRyZW5LZXkgJiYgIXJvdy5kYXRhW2dyaWQuaGFzQ2hpbGRyZW5LZXldKSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzOiBJUm93VG9nZ2xlRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgcm93SUQ6IHJvdy5yb3dJRCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgZ3JpZC5vblJvd1RvZ2dsZS5lbWl0KGFyZ3MpO1xuXG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZpc2libGVDb2x1bW5JbmRleCA9IHZpc2libGVDb2x1bW5JbmRleCA/IHZpc2libGVDb2x1bW5JbmRleCA6IDA7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkU3RhdGVzID0gZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG4gICAgICAgIGV4cGFuZGVkU3RhdGVzLnNldChyb3cucm93SUQsIGV4cGFuZGVkKTtcbiAgICAgICAgZ3JpZC5leHBhbnNpb25TdGF0ZXMgPSBleHBhbmRlZFN0YXRlcztcblxuICAgICAgICBpZiAoZ3JpZC5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5ncmlkLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldF9jZWxsX2J5X3Zpc2libGVfaW5kZXgoZWwucm93LCBlbC5jb2x1bW4pO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZF9wYXRoX3RvX3JlY29yZChyZWNvcmQ6IElUcmVlR3JpZFJlY29yZCkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBleHBhbmRlZFN0YXRlcyA9IGdyaWQuZXhwYW5zaW9uU3RhdGVzO1xuXG4gICAgICAgIHdoaWxlIChyZWNvcmQucGFyZW50KSB7XG4gICAgICAgICAgICByZWNvcmQgPSByZWNvcmQucGFyZW50O1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmdldF9yb3dfZXhwYW5zaW9uX3N0YXRlKHJlY29yZCk7XG5cbiAgICAgICAgICAgIGlmICghZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZFN0YXRlcy5zZXQocmVjb3JkLnJvd0lELCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncmlkLmV4cGFuc2lvblN0YXRlcyA9IGV4cGFuZGVkU3RhdGVzO1xuXG4gICAgICAgIGlmIChncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBncmlkLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3Jvd19leHBhbnNpb25fc3RhdGUocmVjb3JkOiBJVHJlZUdyaWRSZWNvcmQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3Qgc3RhdGVzID0gZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gc3RhdGVzLmdldChyZWNvcmQucm93SUQpO1xuXG4gICAgICAgIGlmIChleHBhbmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLmNoaWxkcmVuICYmIHJlY29yZC5jaGlsZHJlbi5sZW5ndGggJiYgcmVjb3JkLmxldmVsIDwgZ3JpZC5leHBhbnNpb25EZXB0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVfcm93X2luX2FycmF5KHZhbHVlOiBhbnksIHJvd0lEOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgaWYgKGdyaWQucHJpbWFyeUtleSAmJiBncmlkLmZvcmVpZ25LZXkpIHtcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZV9yb3dfaW5fYXJyYXkodmFsdWUsIHJvd0lELCBpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSBncmlkLnJlY29yZHMuZ2V0KHJvd0lEKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LmRhdGFbZ3JpZC5jaGlsZERhdGFLZXldIDogZ3JpZC5kYXRhO1xuICAgICAgICAgICAgaW5kZXggPSBncmlkLnByaW1hcnlLZXkgPyBjaGlsZERhdGEubWFwKGMgPT4gY1tncmlkLnByaW1hcnlLZXldKS5pbmRleE9mKHJvd0lEKSA6XG4gICAgICAgICAgICAgICAgY2hpbGREYXRhLmluZGV4T2Yocm93SUQpO1xuICAgICAgICAgICAgY2hpbGREYXRhW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3VsZF9hcHBseV9udW1iZXJfc3R5bGUoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyICYmIGNvbHVtbi52aXNpYmxlSW5kZXggIT09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVJvd0J5SWQocm93SUQ6IGFueSkge1xuICAgICAgICBjb25zdCB0cmVlR3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZmxhdERhdGFXaXRoQ2FzY2FkZU9uRGVsZXRlQW5kVHJhbnNhY3Rpb25zID1cbiAgICAgICAgdHJlZUdyaWQucHJpbWFyeUtleSAmJlxuICAgICAgICB0cmVlR3JpZC5mb3JlaWduS2V5ICYmXG4gICAgICAgIHRyZWVHcmlkLmNhc2NhZGVPbkRlbGV0ZSAmJlxuICAgICAgICB0cmVlR3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZDtcblxuICAgICAgICBpZiAoZmxhdERhdGFXaXRoQ2FzY2FkZU9uRGVsZXRlQW5kVHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICB0cmVlR3JpZC50cmFuc2FjdGlvbnMuc3RhcnRQZW5kaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZWxldGVSb3dCeUlkKHJvd0lEKTtcblxuICAgICAgICBpZiAoZmxhdERhdGFXaXRoQ2FzY2FkZU9uRGVsZXRlQW5kVHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICB0cmVlR3JpZC50cmFuc2FjdGlvbnMuZW5kUGVuZGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVSb3dGcm9tRGF0YShyb3dJRDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCByZWNvcmQgPSB0cmVlR3JpZC5yZWNvcmRzLmdldChyb3dJRCk7XG5cbiAgICAgICAgaWYgKHRyZWVHcmlkLnByaW1hcnlLZXkgJiYgdHJlZUdyaWQuZm9yZWlnbktleSkge1xuICAgICAgICAgICAgaW5kZXggPSB0cmVlR3JpZC5wcmltYXJ5S2V5ID9cbiAgICAgICAgICAgICAgICB0cmVlR3JpZC5kYXRhLm1hcChjID0+IGNbdHJlZUdyaWQucHJpbWFyeUtleV0pLmluZGV4T2Yocm93SUQpIDpcbiAgICAgICAgICAgICAgICB0cmVlR3JpZC5kYXRhLmluZGV4T2Yocm93SUQpO1xuICAgICAgICAgICAgc3VwZXIuZGVsZXRlUm93RnJvbURhdGEocm93SUQsIGluZGV4KTtcblxuICAgICAgICAgICAgaWYgKHRyZWVHcmlkLmNhc2NhZGVPbkRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmNoaWxkcmVuICYmIHJlY29yZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlY29yZC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLmRlbGV0ZVJvd0J5SWQoY2hpbGQucm93SUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LmRhdGFbdHJlZUdyaWQuY2hpbGREYXRhS2V5XSA6IHRyZWVHcmlkLmRhdGE7XG4gICAgICAgICAgICBpbmRleCA9IHRyZWVHcmlkLnByaW1hcnlLZXkgP1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ubWFwKGMgPT4gY1t0cmVlR3JpZC5wcmltYXJ5S2V5XSkuaW5kZXhPZihyb3dJRCkgOlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uaW5kZXhPZihyb3dJRCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0X3NlbGVjdGVkX2NoaWxkcmVuKHJlY29yZCwgc2VsZWN0ZWRDaGlsZHJlbik7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdHJlZUdyaWQuZGVzZWxlY3RSb3dzKHNlbGVjdGVkQ2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJlZUdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gdHJlZUdyaWQuZ2VuZXJhdGVSb3dQYXRoKHJvd0lEKTtcbiAgICAgICAgICAgICAgICB0cmVlR3JpZC50cmFuc2FjdGlvbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJvd0lELFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGUuREVMRVRFLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25baW5kZXhdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyByZWxhdGVkIHJvdyBvZiBwcm92aWRlZCBncmlkJ3MgZGF0YSBzb3VyY2Ugd2l0aCBwcm92aWRlZCBuZXcgcm93IHZhbHVlXG4gICAgICogQHBhcmFtIGdyaWQgR3JpZCB0byB1cGRhdGUgZGF0YSBmb3JcbiAgICAgKiBAcGFyYW0gcm93SUQgSUQgb2YgdGhlIHJvdyB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0gcm93VmFsdWVJbkRhdGFTb3VyY2UgSW5pdGlhbCB2YWx1ZSBvZiB0aGUgcm93IGFzIGl0IGlzIGluIGRhdGEgc291cmNlXG4gICAgICogQHBhcmFtIHJvd0N1cnJlbnRWYWx1ZSBDdXJyZW50IHZhbHVlIG9mIHRoZSByb3cgYXMgaXQgaXMgd2l0aCBhcHBsaWVkIHByZXZpb3VzIHRyYW5zYWN0aW9uc1xuICAgICAqIEBwYXJhbSByb3dOZXdWYWx1ZSBOZXcgdmFsdWUgb2YgdGhlIHJvd1xuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVEYXRhKFxuICAgICAgICBncmlkOiBJZ3hUcmVlR3JpZENvbXBvbmVudCxcbiAgICAgICAgcm93SUQ6IGFueSxcbiAgICAgICAgcm93VmFsdWVJbkRhdGFTb3VyY2U6IGFueSxcbiAgICAgICAgcm93Q3VycmVudFZhbHVlOiBhbnksXG4gICAgICAgIHJvd05ld1ZhbHVlOiB7IFt4OiBzdHJpbmddOiBhbnkgfSkge1xuICAgICAgICBpZiAoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGdyaWQuZ2VuZXJhdGVSb3dQYXRoKHJvd0lEKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93SUQsXG4gICAgICAgICAgICAgICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlLlVQREFURSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogcm93TmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdyaWQudHJhbnNhY3Rpb25zLmFkZCh0cmFuc2FjdGlvbiwgcm93Q3VycmVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlT2JqZWN0cyhyb3dWYWx1ZUluRGF0YVNvdXJjZSwgcm93TmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9zZWxlY3RlZF9jaGlsZHJlbihyZWNvcmQ6IElUcmVlR3JpZFJlY29yZCwgc2VsZWN0ZWRSb3dJRHM6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGlmICghcmVjb3JkLmNoaWxkcmVuIHx8IHJlY29yZC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHJlY29yZC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGdyaWQuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQoZ3JpZC5pZCwgY2hpbGQucm93SUQpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJRHMucHVzaChjaGlsZC5yb3dJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldF9zZWxlY3RlZF9jaGlsZHJlbihjaGlsZCwgc2VsZWN0ZWRSb3dJRHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJvd19kZWxldGVkX3RyYW5zYWN0aW9uKHJvd0lEOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93X2RlbGV0ZWRfcGFyZW50KHJvd0lEKSB8fCBzdXBlci5yb3dfZGVsZXRlZF90cmFuc2FjdGlvbihyb3dJRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3dfZGVsZXRlZF9wYXJlbnQocm93SUQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGdyaWQuY2FzY2FkZU9uRGVsZXRlICYmIGdyaWQuZm9yZWlnbktleSkgfHwgZ3JpZC5jaGlsZERhdGFLZXkpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZ3JpZC5yZWNvcmRzLmdldChyb3dJRCk7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlOiBTdGF0ZSA9IGdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKG5vZGUucm93SUQpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==