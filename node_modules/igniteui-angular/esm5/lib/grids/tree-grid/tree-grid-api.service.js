/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GridBaseAPIService } from '../api.service';
import { DataType } from '../../data-operations/data-util';
import { TransactionType } from '../../services';
import { mergeObjects } from '../../core/utils';
var IgxTreeGridAPIService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTreeGridAPIService, _super);
    function IgxTreeGridAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} transactions
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.get_all_data = /**
     * @param {?=} transactions
     * @return {?}
     */
    function (transactions) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = transactions ? grid.dataWithAddedInTransactionRows : grid.flatData;
        return data ? data : [];
    };
    /**
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.get_summary_data = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var data = grid.processedRootRecords.filter(function (row) { return row.isFilteredOutParent === undefined || row.isFilteredOutParent === false; })
            .map(function (rec) { return rec.data; });
        if (grid.transactions.enabled) {
            /** @type {?} */
            var deletedRows = grid.transactions.getTransactionLog().filter(function (t) { return t.type === TransactionType.DELETE; }).map(function (t) { return t.id; });
            deletedRows.forEach(function (rowID) {
                /** @type {?} */
                var tempData = grid.primaryKey ? data.map(function (rec) { return rec[grid.primaryKey]; }) : data;
                /** @type {?} */
                var index = tempData.indexOf(rowID);
                if (index !== -1) {
                    data.splice(index, 1);
                }
            });
        }
        return data;
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.expand_row = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var expandedStates = grid.expansionStates;
        expandedStates.set(rowID, true);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.collapse_row = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var expandedStates = grid.expansionStates;
        expandedStates.set(rowID, false);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.toggle_row_expansion = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var expandedStates = grid.expansionStates;
        /** @type {?} */
        var treeRecord = grid.records.get(rowID);
        if (treeRecord) {
            /** @type {?} */
            var isExpanded = this.get_row_expansion_state(treeRecord);
            expandedStates.set(rowID, !isExpanded);
            grid.expansionStates = expandedStates;
        }
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    };
    /**
     * @param {?} row
     * @param {?} expanded
     * @param {?=} event
     * @param {?=} visibleColumnIndex
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.trigger_row_expansion_toggle = /**
     * @param {?} row
     * @param {?} expanded
     * @param {?=} event
     * @param {?=} visibleColumnIndex
     * @return {?}
     */
    function (row, expanded, event, visibleColumnIndex) {
        var _this = this;
        /** @type {?} */
        var grid = this.grid;
        if (row.expanded === expanded ||
            ((!row.children || !row.children.length) && (!grid.loadChildrenOnDemand ||
                (grid.hasChildrenKey && !row.data[grid.hasChildrenKey])))) {
            return;
        }
        /** @type {?} */
        var args = {
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
        var expandedStates = grid.expansionStates;
        expandedStates.set(row.rowID, expanded);
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
        requestAnimationFrame(function () {
            /** @type {?} */
            var el = _this.grid.selectionService.activeElement;
            if (el) {
                /** @type {?} */
                var cell = _this.get_cell_by_visible_index(el.row, el.column);
                if (cell) {
                    cell.nativeElement.focus();
                }
            }
        });
    };
    /**
     * @param {?} record
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.expand_path_to_record = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var expandedStates = grid.expansionStates;
        while (record.parent) {
            record = record.parent;
            /** @type {?} */
            var expanded = this.get_row_expansion_state(record);
            if (!expanded) {
                expandedStates.set(record.rowID, true);
            }
        }
        grid.expansionStates = expandedStates;
        if (grid.rowEditable) {
            grid.endEdit(true);
        }
    };
    /**
     * @param {?} record
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.get_row_expansion_state = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        /** @type {?} */
        var grid = this.grid;
        /** @type {?} */
        var states = grid.expansionStates;
        /** @type {?} */
        var expanded = states.get(record.rowID);
        if (expanded !== undefined) {
            return expanded;
        }
        else {
            return record.children && record.children.length && record.level < grid.expansionDepth;
        }
    };
    /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.update_row_in_array = /**
     * @protected
     * @param {?} value
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    function (value, rowID, index) {
        /** @type {?} */
        var grid = this.grid;
        if (grid.primaryKey && grid.foreignKey) {
            _super.prototype.update_row_in_array.call(this, value, rowID, index);
        }
        else {
            /** @type {?} */
            var record = grid.records.get(rowID);
            /** @type {?} */
            var childData = record.parent ? record.parent.data[grid.childDataKey] : grid.data;
            index = grid.primaryKey ? childData.map(function (c) { return c[grid.primaryKey]; }).indexOf(rowID) :
                childData.indexOf(rowID);
            childData[index] = value;
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.should_apply_number_style = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.dataType === DataType.Number && column.visibleIndex !== 0;
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.deleteRowById = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var treeGrid = this.grid;
        /** @type {?} */
        var flatDataWithCascadeOnDeleteAndTransactions = treeGrid.primaryKey &&
            treeGrid.foreignKey &&
            treeGrid.cascadeOnDelete &&
            treeGrid.transactions.enabled;
        if (flatDataWithCascadeOnDeleteAndTransactions) {
            treeGrid.transactions.startPending();
        }
        _super.prototype.deleteRowById.call(this, rowID);
        if (flatDataWithCascadeOnDeleteAndTransactions) {
            treeGrid.transactions.endPending(true);
        }
    };
    /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.deleteRowFromData = /**
     * @param {?} rowID
     * @param {?} index
     * @return {?}
     */
    function (rowID, index) {
        /** @type {?} */
        var treeGrid = this.grid;
        /** @type {?} */
        var record = treeGrid.records.get(rowID);
        if (treeGrid.primaryKey && treeGrid.foreignKey) {
            index = treeGrid.primaryKey ?
                treeGrid.data.map(function (c) { return c[treeGrid.primaryKey]; }).indexOf(rowID) :
                treeGrid.data.indexOf(rowID);
            _super.prototype.deleteRowFromData.call(this, rowID, index);
            if (treeGrid.cascadeOnDelete) {
                if (record && record.children && record.children.length > 0) {
                    for (var i = 0; i < record.children.length; i++) {
                        /** @type {?} */
                        var child = record.children[i];
                        _super.prototype.deleteRowById.call(this, child.rowID);
                    }
                }
            }
        }
        else {
            /** @type {?} */
            var collection = record.parent ? record.parent.data[treeGrid.childDataKey] : treeGrid.data;
            index = treeGrid.primaryKey ?
                collection.map(function (c) { return c[treeGrid.primaryKey]; }).indexOf(rowID) :
                collection.indexOf(rowID);
            /** @type {?} */
            var selectedChildren = [];
            this.get_selected_children(record, selectedChildren);
            if (selectedChildren.length > 0) {
                treeGrid.deselectRows(selectedChildren);
            }
            if (treeGrid.transactions.enabled) {
                /** @type {?} */
                var path = treeGrid.generateRowPath(rowID);
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
    };
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @param grid Grid to update data for
     * @param rowID ID of the row to update
     * @param rowValueInDataSource Initial value of the row as it is in data source
     * @param rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param rowNewValue New value of the row
     */
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
    IgxTreeGridAPIService.prototype.updateData = /**
     * Updates related row of provided grid's data source with provided new row value
     * @protected
     * @param {?} grid Grid to update data for
     * @param {?} rowID ID of the row to update
     * @param {?} rowValueInDataSource Initial value of the row as it is in data source
     * @param {?} rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param {?} rowNewValue New value of the row
     * @return {?}
     */
    function (grid, rowID, rowValueInDataSource, rowCurrentValue, rowNewValue) {
        if (grid.transactions.enabled) {
            /** @type {?} */
            var path = grid.generateRowPath(rowID);
            /** @type {?} */
            var transaction = {
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
    };
    /**
     * @param {?} record
     * @param {?} selectedRowIDs
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.get_selected_children = /**
     * @param {?} record
     * @param {?} selectedRowIDs
     * @return {?}
     */
    function (record, selectedRowIDs) {
        var e_1, _a;
        /** @type {?} */
        var grid = this.grid;
        if (!record.children || record.children.length === 0) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(record.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (grid.selection.is_item_selected(grid.id, child.rowID)) {
                    selectedRowIDs.push(child.rowID);
                }
                this.get_selected_children(child, selectedRowIDs);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.row_deleted_transaction = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        return this.row_deleted_parent(rowID) || _super.prototype.row_deleted_transaction.call(this, rowID);
    };
    /**
     * @private
     * @param {?} rowID
     * @return {?}
     */
    IgxTreeGridAPIService.prototype.row_deleted_parent = /**
     * @private
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        /** @type {?} */
        var grid = this.grid;
        if (!grid) {
            return false;
        }
        if ((grid.cascadeOnDelete && grid.foreignKey) || grid.childDataKey) {
            /** @type {?} */
            var node = grid.records.get(rowID);
            while (node) {
                /** @type {?} */
                var state = grid.transactions.getState(node.rowID);
                if (state && state.type === TransactionType.DELETE) {
                    return true;
                }
                node = node.parent;
            }
        }
        return false;
    };
    return IgxTreeGridAPIService;
}(GridBaseAPIService));
export { IgxTreeGridAPIService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy90cmVlLWdyaWQvdHJlZS1ncmlkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTNELE9BQU8sRUFBMkIsZUFBZSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBQTJDLGlEQUF3QztJQUFuRjs7SUFrUkEsQ0FBQzs7Ozs7SUFqUlUsNENBQVk7Ozs7SUFBbkIsVUFBb0IsWUFBc0I7O1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEIsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtRQUMvRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLGdEQUFnQjs7O0lBQXZCOztZQUNVLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsbUJBQW1CLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLEVBQTFFLENBQTBFLENBQUM7YUFDM0gsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBUixDQUFRLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxD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QUFjLENBQUMsQ0FBQzthQUNyRDs7Ozs7Ozs7O0lBQ0wsQ0FBQzs7Ozs7SUFFTSx1REFBdUI7Ozs7SUFBOUIsVUFBK0IsS0FBVTtRQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBTSx1QkFBdUIsWUFBQyxLQUFLLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7SUFFTyxrREFBa0I7Ozs7O0lBQTFCLFVBQTJCLEtBQVU7O1lBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQzVELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEMsT0FBTyxJQUFJLEVBQUU7O29CQUNILEtBQUssR0FBVSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMzRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2hELE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RCO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBbFJELENBQTJDLGtCQUFrQixHQWtSNUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSVRyZWVHcmlkUmVjb3JkIH0gZnJvbSAnLi90cmVlLWdyaWQuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJUm93VG9nZ2xlRXZlbnRBcmdzIH0gZnJvbSAnLi90cmVlLWdyaWQuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblR5cGUsIFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgbWVyZ2VPYmplY3RzIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZEFQSVNlcnZpY2UgZXh0ZW5kcyBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4VHJlZUdyaWRDb21wb25lbnQ+IHtcbiAgICBwdWJsaWMgZ2V0X2FsbF9kYXRhKHRyYW5zYWN0aW9ucz86IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0cmFuc2FjdGlvbnMgPyBncmlkLmRhdGFXaXRoQWRkZWRJblRyYW5zYWN0aW9uUm93cyA6IGdyaWQuZmxhdERhdGE7XG4gICAgICAgIHJldHVybiBkYXRhID8gZGF0YSA6IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfc3VtbWFyeV9kYXRhKCkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBkYXRhID0gZ3JpZC5wcm9jZXNzZWRSb290UmVjb3Jkcy5maWx0ZXIocm93ID0+IHJvdy5pc0ZpbHRlcmVkT3V0UGFyZW50ID09PSB1bmRlZmluZWQgfHwgcm93LmlzRmlsdGVyZWRPdXRQYXJlbnQgPT09IGZhbHNlKVxuICAgICAgICAgICAgLm1hcChyZWMgPT4gcmVjLmRhdGEpO1xuICAgICAgICBpZiAoZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFJvd3MgPSBncmlkLnRyYW5zYWN0aW9ucy5nZXRUcmFuc2FjdGlvbkxvZygpLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gVHJhbnNhY3Rpb25UeXBlLkRFTEVURSkubWFwKHQgPT4gdC5pZCk7XG4gICAgICAgICAgICBkZWxldGVkUm93cy5mb3JFYWNoKHJvd0lEID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IGdyaWQucHJpbWFyeUtleSA/IGRhdGEubWFwKHJlYyA9PiByZWNbZ3JpZC5wcmltYXJ5S2V5XSkgOiBkYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGVtcERhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZF9yb3cocm93SUQ6IGFueSkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBleHBhbmRlZFN0YXRlcyA9IGdyaWQuZXhwYW5zaW9uU3RhdGVzO1xuICAgICAgICBleHBhbmRlZFN0YXRlcy5zZXQocm93SUQsIHRydWUpO1xuICAgICAgICBncmlkLmV4cGFuc2lvblN0YXRlcyA9IGV4cGFuZGVkU3RhdGVzO1xuICAgICAgICBpZiAoZ3JpZC5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxhcHNlX3Jvdyhyb3dJRDogYW55KSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkU3RhdGVzID0gZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG4gICAgICAgIGV4cGFuZGVkU3RhdGVzLnNldChyb3dJRCwgZmFsc2UpO1xuICAgICAgICBncmlkLmV4cGFuc2lvblN0YXRlcyA9IGV4cGFuZGVkU3RhdGVzO1xuICAgICAgICBpZiAoZ3JpZC5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZV9yb3dfZXhwYW5zaW9uKHJvd0lEOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRTdGF0ZXMgPSBncmlkLmV4cGFuc2lvblN0YXRlcztcbiAgICAgICAgY29uc3QgdHJlZVJlY29yZCA9IGdyaWQucmVjb3Jkcy5nZXQocm93SUQpO1xuXG4gICAgICAgIGlmICh0cmVlUmVjb3JkKSB7XG4gICAgICAgICAgICBjb25zdCBpc0V4cGFuZGVkID0gdGhpcy5nZXRfcm93X2V4cGFuc2lvbl9zdGF0ZSh0cmVlUmVjb3JkKTtcbiAgICAgICAgICAgIGV4cGFuZGVkU3RhdGVzLnNldChyb3dJRCwgIWlzRXhwYW5kZWQpO1xuICAgICAgICAgICAgZ3JpZC5leHBhbnNpb25TdGF0ZXMgPSBleHBhbmRlZFN0YXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JpZC5yb3dFZGl0YWJsZSkge1xuICAgICAgICAgICAgZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJfcm93X2V4cGFuc2lvbl90b2dnbGUocm93OiBJVHJlZUdyaWRSZWNvcmQsIGV4cGFuZGVkOiBib29sZWFuLCBldmVudD86IEV2ZW50LCB2aXNpYmxlQ29sdW1uSW5kZXg/KSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG5cbiAgICAgICAgaWYgKHJvdy5leHBhbmRlZCA9PT0gZXhwYW5kZWQgfHxcbiAgICAgICAgICAgICgoIXJvdy5jaGlsZHJlbiB8fCAhcm93LmNoaWxkcmVuLmxlbmd0aCkgJiYgKCFncmlkLmxvYWRDaGlsZHJlbk9uRGVtYW5kIHx8XG4gICAgICAgICAgICAoZ3JpZC5oYXNDaGlsZHJlbktleSAmJiAhcm93LmRhdGFbZ3JpZC5oYXNDaGlsZHJlbktleV0pKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3M6IElSb3dUb2dnbGVFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICByb3dJRDogcm93LnJvd0lELFxuICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBncmlkLm9uUm93VG9nZ2xlLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4ID0gdmlzaWJsZUNvbHVtbkluZGV4ID8gdmlzaWJsZUNvbHVtbkluZGV4IDogMDtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRTdGF0ZXMgPSBncmlkLmV4cGFuc2lvblN0YXRlcztcbiAgICAgICAgZXhwYW5kZWRTdGF0ZXMuc2V0KHJvdy5yb3dJRCwgZXhwYW5kZWQpO1xuICAgICAgICBncmlkLmV4cGFuc2lvblN0YXRlcyA9IGV4cGFuZGVkU3RhdGVzO1xuXG4gICAgICAgIGlmIChncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBncmlkLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdyaWQuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0X2NlbGxfYnlfdmlzaWJsZV9pbmRleChlbC5yb3csIGVsLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kX3BhdGhfdG9fcmVjb3JkKHJlY29yZDogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkU3RhdGVzID0gZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG5cbiAgICAgICAgd2hpbGUgKHJlY29yZC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZ2V0X3Jvd19leHBhbnNpb25fc3RhdGUocmVjb3JkKTtcblxuICAgICAgICAgICAgaWYgKCFleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkU3RhdGVzLnNldChyZWNvcmQucm93SUQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdyaWQuZXhwYW5zaW9uU3RhdGVzID0gZXhwYW5kZWRTdGF0ZXM7XG5cbiAgICAgICAgaWYgKGdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRfcm93X2V4cGFuc2lvbl9zdGF0ZShyZWNvcmQ6IElUcmVlR3JpZFJlY29yZCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBzdGF0ZXMgPSBncmlkLmV4cGFuc2lvblN0YXRlcztcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBzdGF0ZXMuZ2V0KHJlY29yZC5yb3dJRCk7XG5cbiAgICAgICAgaWYgKGV4cGFuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBhbmRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuY2hpbGRyZW4gJiYgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCAmJiByZWNvcmQubGV2ZWwgPCBncmlkLmV4cGFuc2lvbkRlcHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZV9yb3dfaW5fYXJyYXkodmFsdWU6IGFueSwgcm93SUQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBpZiAoZ3JpZC5wcmltYXJ5S2V5ICYmIGdyaWQuZm9yZWlnbktleSkge1xuICAgICAgICAgICAgc3VwZXIudXBkYXRlX3Jvd19pbl9hcnJheSh2YWx1ZSwgcm93SUQsIGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IGdyaWQucmVjb3Jkcy5nZXQocm93SUQpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGREYXRhID0gcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQuZGF0YVtncmlkLmNoaWxkRGF0YUtleV0gOiBncmlkLmRhdGE7XG4gICAgICAgICAgICBpbmRleCA9IGdyaWQucHJpbWFyeUtleSA/IGNoaWxkRGF0YS5tYXAoYyA9PiBjW2dyaWQucHJpbWFyeUtleV0pLmluZGV4T2Yocm93SUQpIDpcbiAgICAgICAgICAgICAgICBjaGlsZERhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICBjaGlsZERhdGFbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdWxkX2FwcGx5X251bWJlcl9zdHlsZShjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5OdW1iZXIgJiYgY29sdW1uLnZpc2libGVJbmRleCAhPT0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlUm93QnlJZChyb3dJRDogYW55KSB7XG4gICAgICAgIGNvbnN0IHRyZWVHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBmbGF0RGF0YVdpdGhDYXNjYWRlT25EZWxldGVBbmRUcmFuc2FjdGlvbnMgPVxuICAgICAgICB0cmVlR3JpZC5wcmltYXJ5S2V5ICYmXG4gICAgICAgIHRyZWVHcmlkLmZvcmVpZ25LZXkgJiZcbiAgICAgICAgdHJlZUdyaWQuY2FzY2FkZU9uRGVsZXRlICYmXG4gICAgICAgIHRyZWVHcmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkO1xuXG4gICAgICAgIGlmIChmbGF0RGF0YVdpdGhDYXNjYWRlT25EZWxldGVBbmRUcmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgIHRyZWVHcmlkLnRyYW5zYWN0aW9ucy5zdGFydFBlbmRpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlbGV0ZVJvd0J5SWQocm93SUQpO1xuXG4gICAgICAgIGlmIChmbGF0RGF0YVdpdGhDYXNjYWRlT25EZWxldGVBbmRUcmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgIHRyZWVHcmlkLnRyYW5zYWN0aW9ucy5lbmRQZW5kaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVJvd0Zyb21EYXRhKHJvd0lEOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZUdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IHRyZWVHcmlkLnJlY29yZHMuZ2V0KHJvd0lEKTtcblxuICAgICAgICBpZiAodHJlZUdyaWQucHJpbWFyeUtleSAmJiB0cmVlR3JpZC5mb3JlaWduS2V5KSB7XG4gICAgICAgICAgICBpbmRleCA9IHRyZWVHcmlkLnByaW1hcnlLZXkgP1xuICAgICAgICAgICAgICAgIHRyZWVHcmlkLmRhdGEubWFwKGMgPT4gY1t0cmVlR3JpZC5wcmltYXJ5S2V5XSkuaW5kZXhPZihyb3dJRCkgOlxuICAgICAgICAgICAgICAgIHRyZWVHcmlkLmRhdGEuaW5kZXhPZihyb3dJRCk7XG4gICAgICAgICAgICBzdXBlci5kZWxldGVSb3dGcm9tRGF0YShyb3dJRCwgaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAodHJlZUdyaWQuY2FzY2FkZU9uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZCAmJiByZWNvcmQuY2hpbGRyZW4gJiYgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVjb3JkLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIuZGVsZXRlUm93QnlJZChjaGlsZC5yb3dJRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQuZGF0YVt0cmVlR3JpZC5jaGlsZERhdGFLZXldIDogdHJlZUdyaWQuZGF0YTtcbiAgICAgICAgICAgIGluZGV4ID0gdHJlZUdyaWQucHJpbWFyeUtleSA/XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5tYXAoYyA9PiBjW3RyZWVHcmlkLnByaW1hcnlLZXldKS5pbmRleE9mKHJvd0lEKSA6XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5pbmRleE9mKHJvd0lEKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgdGhpcy5nZXRfc2VsZWN0ZWRfY2hpbGRyZW4ocmVjb3JkLCBzZWxlY3RlZENoaWxkcmVuKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZENoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0cmVlR3JpZC5kZXNlbGVjdFJvd3Moc2VsZWN0ZWRDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0cmVlR3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSB0cmVlR3JpZC5nZW5lcmF0ZVJvd1BhdGgocm93SUQpO1xuICAgICAgICAgICAgICAgIHRyZWVHcmlkLnRyYW5zYWN0aW9ucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogcm93SUQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbltpbmRleF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHJlbGF0ZWQgcm93IG9mIHByb3ZpZGVkIGdyaWQncyBkYXRhIHNvdXJjZSB3aXRoIHByb3ZpZGVkIG5ldyByb3cgdmFsdWVcbiAgICAgKiBAcGFyYW0gZ3JpZCBHcmlkIHRvIHVwZGF0ZSBkYXRhIGZvclxuICAgICAqIEBwYXJhbSByb3dJRCBJRCBvZiB0aGUgcm93IHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSByb3dWYWx1ZUluRGF0YVNvdXJjZSBJbml0aWFsIHZhbHVlIG9mIHRoZSByb3cgYXMgaXQgaXMgaW4gZGF0YSBzb3VyY2VcbiAgICAgKiBAcGFyYW0gcm93Q3VycmVudFZhbHVlIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHJvdyBhcyBpdCBpcyB3aXRoIGFwcGxpZWQgcHJldmlvdXMgdHJhbnNhY3Rpb25zXG4gICAgICogQHBhcmFtIHJvd05ld1ZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgcm93XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZURhdGEoXG4gICAgICAgIGdyaWQ6IElneFRyZWVHcmlkQ29tcG9uZW50LFxuICAgICAgICByb3dJRDogYW55LFxuICAgICAgICByb3dWYWx1ZUluRGF0YVNvdXJjZTogYW55LFxuICAgICAgICByb3dDdXJyZW50VmFsdWU6IGFueSxcbiAgICAgICAgcm93TmV3VmFsdWU6IHsgW3g6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICAgIGlmIChncmlkLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZ3JpZC5nZW5lcmF0ZVJvd1BhdGgocm93SUQpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb246IEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiByb3dJRCxcbiAgICAgICAgICAgICAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGUuVVBEQVRFLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiByb3dOZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JpZC50cmFuc2FjdGlvbnMuYWRkKHRyYW5zYWN0aW9uLCByb3dDdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VPYmplY3RzKHJvd1ZhbHVlSW5EYXRhU291cmNlLCByb3dOZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3NlbGVjdGVkX2NoaWxkcmVuKHJlY29yZDogSVRyZWVHcmlkUmVjb3JkLCBzZWxlY3RlZFJvd0lEczogYW55W10pIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgaWYgKCFyZWNvcmQuY2hpbGRyZW4gfHwgcmVjb3JkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcmVjb3JkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZC5zZWxlY3Rpb24uaXNfaXRlbV9zZWxlY3RlZChncmlkLmlkLCBjaGlsZC5yb3dJRCkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0lEcy5wdXNoKGNoaWxkLnJvd0lEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0X3NlbGVjdGVkX2NoaWxkcmVuKGNoaWxkLCBzZWxlY3RlZFJvd0lEcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcm93X2RlbGV0ZWRfdHJhbnNhY3Rpb24ocm93SUQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dfZGVsZXRlZF9wYXJlbnQocm93SUQpIHx8IHN1cGVyLnJvd19kZWxldGVkX3RyYW5zYWN0aW9uKHJvd0lEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJvd19kZWxldGVkX3BhcmVudChyb3dJRDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZ3JpZC5jYXNjYWRlT25EZWxldGUgJiYgZ3JpZC5mb3JlaWduS2V5KSB8fCBncmlkLmNoaWxkRGF0YUtleSkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBncmlkLnJlY29yZHMuZ2V0KHJvd0lEKTtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGU6IFN0YXRlID0gZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUobm9kZS5yb3dJRCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19