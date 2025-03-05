# ApiPivotDataField

Represents the ApiPivotDataField class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Remove](./Methods/Remove.md) | None | Removes  the current data field from the category. |
| [Move](./Methods/Move.md) | None | Moves the current data field inside the category. |
| [SetFunction](./Methods/SetFunction.md) | None | Sets a function to the current data field. |
| [GetFunction](./Methods/GetFunction.md) | [DataConsolidateFunctionType](../Enumeration/DataConsolidateFunctionType.md) | Returns a function performed in the data field. |
| [GetPosition](./Methods/GetPosition.md) | number | Returns a value that represents the data field position within a category. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets a value that represents the data field position within a category. |
| [GetOrientation](./Methods/GetOrientation.md) | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | Returns a data field orientation value that represents the data field location in the specified pivot table report. |
| [GetValue](./Methods/GetValue.md) | string | Returns a value representing the name of the specified data field in the pivot table report. |
| [SetValue](./Methods/SetValue.md) | None | Sets a value representing the name of the specified data field in the pivot table report. |
| [GetCaption](./Methods/GetCaption.md) | string | Returns a value that represents the label text for the data field. |
| [SetCaption](./Methods/SetCaption.md) | None | Sets a value that represents the label text for the data field. |
| [GetName](./Methods/GetName.md) | string | Returns a value representing the object name. |
| [SetName](./Methods/SetName.md) | None | Sets a value representing the object name. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string \| null | Returns a value that represents the format code for the object. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Sets a value that represents the format code for the object. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns an index of the data field. |
| [GetPivotField](./Methods/GetPivotField.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md) | Returns the pivot field from which the data field was created. |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | None | Deletes all filters currently applied to the pivot field. |
| [ClearLabelFilters](./Methods/ClearLabelFilters.md) | None | Deletes all label filters or all date filters from the pivot filters collection. |
| [ClearManualFilters](./Methods/ClearManualFilters.md) | None | Deletes all manual filters from the pivot filters collection. |
| [ClearValueFilters](./Methods/ClearValueFilters.md) | None | Deletes all value filters from the pivot filters collection. |
| [GetPivotItems](./Methods/GetPivotItems.md) | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| null | Returns an object that represents either a single pivot table item (the ApiPivotItem object) or a collection of all the visible and hidden items (an array of the ApiPivotItem objects) in the specified field. |
| [Move](./Methods/Move.md) | None | Moves the current pivot field inside the category. |
| [Remove](./Methods/Remove.md) | None | Removes the current pivot field from the pivot table. |
| [GetPosition](./Methods/GetPosition.md) | number | Returns a value that represents the position of the field (first, second, third, and so on) among all the fields in its orientation (Rows, Columns, Pages, Data). |
| [SetPosition](./Methods/SetPosition.md) | None | Sets a value that represents the position of the field (first, second, third, and so on) among all the fields in its orientation (Rows, Columns, Pages, Data). |
| [GetOrientation](./Methods/GetOrientation.md) | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | Returns a pivot field orientation value that represents the location of the field in the specified pivot table report. |
| [SetOrientation](./Methods/SetOrientation.md) | None | Sets a pivot field orientation value that represents the location of the field in the specified pivot table report. |
| [GetValue](./Methods/GetValue.md) | string | Returns a value representing the name of the specified field in the pivot table report. |
| [SetValue](./Methods/SetValue.md) | None | Sets a value representing the name of the specified field in the pivot table report. |
| [GetCaption](./Methods/GetCaption.md) | string | Returns a value that represents the label text for the pivot field. |
| [SetCaption](./Methods/SetCaption.md) | None | Sets a value that represents the label text for the pivot field. |
| [GetName](./Methods/GetName.md) | string | Returns a value representing the object name. |
| [SetName](./Methods/SetName.md) | None | Sets a value representing the object name. |
| [GetSourceName](./Methods/GetSourceName.md) | string | Returns a source name for the pivot table field. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns an index for the pivot table field. |
| [GetTable](./Methods/GetTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the ApiPivotTable object which represents the pivot table for the current field. |
| [GetParent](./Methods/GetParent.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the parent object for the current field. |
| [GetLayoutCompactRow](./Methods/GetLayoutCompactRow.md) | boolean | Returns the setting which specifies whether a pivot table field is compacted. |
| [SetLayoutCompactRow](./Methods/SetLayoutCompactRow.md) | None | Sets the setting which specifies whether a pivot table field is compacted. |
| [GetLayoutForm](./Methods/GetLayoutForm.md) | [PivotLayoutType](../Enumeration/PivotLayoutType.md) | Returns the way the specified pivot table items appear — in table format or in outline format. |
| [SetLayoutForm](./Methods/SetLayoutForm.md) | None | Sets the way the specified pivot table items appear — in table format or in outline format. |
| [GetLayoutPageBreak](./Methods/GetLayoutPageBreak.md) | boolean | Returns the setting which specifies whether to insert a page break after each field. |
| [SetLayoutPageBreak](./Methods/SetLayoutPageBreak.md) | None | Sets the setting which specifies whether to insert a page break after each field. |
| [GetShowingInAxis](./Methods/GetShowingInAxis.md) | boolean | Returns the setting which specifies whether the pivot table field is currently visible in the pivot table. |
| [GetRepeatLabels](./Methods/GetRepeatLabels.md) | boolean | Returns the setting which specifies whether to repeat items labels at each row. |
| [SetRepeatLabels](./Methods/SetRepeatLabels.md) | None | Sets the setting which specifies whether to repeat items labels at each row. |
| [GetLayoutBlankLine](./Methods/GetLayoutBlankLine.md) | boolean | Returns the setting which specifies whether to insert blank rows after each item. |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | None | Sets the setting which specifies whether to insert blank rows after each item. |
| [GetShowAllItems](./Methods/GetShowAllItems.md) | boolean | Returns the setting which specifies whether to show items with no data. |
| [SetShowAllItems](./Methods/SetShowAllItems.md) | None | Sets the setting which specifies whether to show items with no data. |
| [GetLayoutSubtotals](./Methods/GetLayoutSubtotals.md) | boolean | Returns the setting which specifies whether to show subtotals. |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | None | Sets the setting which specifies whether to show subtotals. |
| [GetLayoutSubtotalLocation](./Methods/GetLayoutSubtotalLocation.md) | [LayoutSubtotalLocationType](../Enumeration/LayoutSubtotalLocationType.md) | Returns the layout subtotal location. |
| [SetLayoutSubtotalLocation](./Methods/SetLayoutSubtotalLocation.md) | None | Sets the layout subtotal location. |
| [GetSubtotalName](./Methods/GetSubtotalName.md) | string | Returns the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| [SetSubtotalName](./Methods/SetSubtotalName.md) | None | Sets the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| [GetSubtotals](./Methods/GetSubtotals.md) | [PivotFieldSubtotals](../Enumeration/PivotFieldSubtotals.md) | Returns an object that represents all subtotals. |
| [SetSubtotals](./Methods/SetSubtotals.md) | None | Sets an object that represents all subtotals. |
| [GetDragToColumn](./Methods/GetDragToColumn.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the column position. |
| [SetDragToColumn](./Methods/SetDragToColumn.md) | None | Sets the setting which specifies whether the specified field can be dragged to the column position. |
| [GetDragToRow](./Methods/GetDragToRow.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the row position. |
| [SetDragToRow](./Methods/SetDragToRow.md) | None | Sets the setting which specifies whether the specified field can be dragged to the row position. |
| [GetDragToData](./Methods/GetDragToData.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the data position. |
| [SetDragToData](./Methods/SetDragToData.md) | None | Sets the setting which specifies whether the specified field can be dragged to the data position. |
| [GetDragToPage](./Methods/GetDragToPage.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the page position. |
| [SetDragToPage](./Methods/SetDragToPage.md) | None | Sets the setting which specifies whether the specified field can be dragged to the page position. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | string \| number | Returns the current page which is displayed for the page field (valid only for page fields). |
