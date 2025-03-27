# ApiPivotField

Represents the ApiPivotField class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Caption | string | Returns or sets a value that represents the label text for the pivot field. |
| CurrentPage | string \| number | Returns the current page which is displayed for the page field (valid only for page fields). |
| DragToColumn | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the column position. |
| DragToData | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the data position. |
| DragToPage | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the page position. |
| DragToRow | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the row position. |
| Formula | number | Returns or sets a value that represents the object's formula. |
| Index | number | Returns an index for the pivot table field. |
| LayoutBlankLine | boolean | Returns and sets the setting which specifies whether to insert blank rows after each item. |
| LayoutCompactRow | boolean | Returns or sets the setting which specifies whether a pivot table field is compacted. |
| LayoutForm | number | Returns or sets the way the specified pivot table items appear — in table format or in outline format. |
| LayoutPageBreak | boolean | Returns or sets the setting which specifies whether to insert a page break after each field. |
| LayoutSubtotalLocation | number | Returns or sets the layout subtotal location. |
| LayoutSubtotals | boolean | Returns or sets the setting which specifies whether to show subtotals. |
| Name | string | Returns or sets a value representing the object name. |
| NumberFormat | string \| null | Returns or sets a value that represents the format code for the object. |
| Orientation | number | Returns or sets a pivot field orientation value that represents the location of the field in the specified pivot table report. |
| Parent | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the parent object for the current field. |
| PivotItems | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] | Returns an object that represents either a single pivot table item (the ApiPivotItem object)\ or a collection of all the visible and hidden items (an array of the ApiPivotItem objects) in the specified field. |
| Position | number | Returns or sets a value that represents the position of the field (first, second, third, and so on) among all the fields in its orientation (Rows, Columns, Pages, Data). |
| RepeatLabels | boolean | Returns or sets the setting which specifies whether to repeat items labels at each row. |
| ShowAllItems | boolean | Returns or sets the setting which specifies whether to show items with no data. |
| ShowingInAxis | boolean | Returns the setting which specifies whether the pivot table field is currently visible in the pivot table. |
| SourceName | string | Returns a source name for the pivot table field. |
| SubtotalName | string | Returns or sets the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| Subtotals | object | Returns or sets the subtotals. |
| Table | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the ApiPivotTable object which represents the pivot table for the current field. |
| Value | string | Returns or sets a value representing the name of the specified field in the pivot table report. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | None | Deletes all filters currently applied to the pivot field. |
| [ClearLabelFilters](./Methods/ClearLabelFilters.md) | None | Deletes all label filters or all date filters from the pivot filters collection. |
| [ClearManualFilters](./Methods/ClearManualFilters.md) | None | Deletes all manual filters from the pivot filters collection. |
| [ClearValueFilters](./Methods/ClearValueFilters.md) | None | Deletes all value filters from the pivot filters collection. |
| [GetCaption](./Methods/GetCaption.md) | string | Returns a value that represents the label text for the pivot field. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | string \| number | Returns the current page which is displayed for the page field (valid only for page fields). |
| [GetDragToColumn](./Methods/GetDragToColumn.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the column position. |
| [GetDragToData](./Methods/GetDragToData.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the data position. |
| [GetDragToPage](./Methods/GetDragToPage.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the page position. |
| [GetDragToRow](./Methods/GetDragToRow.md) | boolean | Returns the setting which specifies whether the specified field can be dragged to the row position. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns an index for the pivot table field. |
| [GetLayoutBlankLine](./Methods/GetLayoutBlankLine.md) | boolean | Returns the setting which specifies whether to insert blank rows after each item. |
| [GetLayoutCompactRow](./Methods/GetLayoutCompactRow.md) | boolean | Returns the setting which specifies whether a pivot table field is compacted. |
| [GetLayoutForm](./Methods/GetLayoutForm.md) | [PivotLayoutType](../Enumeration/PivotLayoutType.md) | Returns the way the specified pivot table items appear — in table format or in outline format. |
| [GetLayoutPageBreak](./Methods/GetLayoutPageBreak.md) | boolean | Returns the setting which specifies whether to insert a page break after each field. |
| [GetLayoutSubtotalLocation](./Methods/GetLayoutSubtotalLocation.md) | [LayoutSubtotalLocationType](../Enumeration/LayoutSubtotalLocationType.md) | Returns the layout subtotal location. |
| [GetLayoutSubtotals](./Methods/GetLayoutSubtotals.md) | boolean | Returns the setting which specifies whether to show subtotals. |
| [GetName](./Methods/GetName.md) | string | Returns a value representing the object name. |
| [GetOrientation](./Methods/GetOrientation.md) | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | Returns a pivot field orientation value that represents the location\ of the field in the specified pivot table report. |
| [GetParent](./Methods/GetParent.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the parent object for the current field. |
| [GetPivotItems](./Methods/GetPivotItems.md) | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| null | Returns an object that represents either a single pivot table item (the ApiPivotItem object)\ or a collection of all the visible and hidden items (an array of the ApiPivotItem objects) in the specified field. |
| [GetPosition](./Methods/GetPosition.md) | number | Returns a value that represents the position of the field (first, second, third, and so on)\ among all the fields in its orientation (Rows, Columns, Pages, Data). |
| [GetRepeatLabels](./Methods/GetRepeatLabels.md) | boolean | Returns the setting which specifies whether to repeat items labels at each row. |
| [GetShowAllItems](./Methods/GetShowAllItems.md) | boolean | Returns the setting which specifies whether to show items with no data. |
| [GetShowingInAxis](./Methods/GetShowingInAxis.md) | boolean | Returns the setting which specifies whether the pivot table field is currently visible in the pivot table. |
| [GetSourceName](./Methods/GetSourceName.md) | string | Returns a source name for the pivot table field. |
| [GetSubtotalName](./Methods/GetSubtotalName.md) | string | Returns the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| [GetSubtotals](./Methods/GetSubtotals.md) | [PivotFieldSubtotals](../Enumeration/PivotFieldSubtotals.md) | Returns an object that represents all subtotals. |
| [GetTable](./Methods/GetTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the ApiPivotTable object which represents the pivot table for the current field. |
| [GetValue](./Methods/GetValue.md) | string | Returns a value representing the name of the specified field in the pivot table report. |
| [Move](./Methods/Move.md) | None | Moves the current pivot field inside the category. |
| [Remove](./Methods/Remove.md) | None | Removes the current pivot field from the pivot table. |
| [SetCaption](./Methods/SetCaption.md) | None | Sets a value that represents the label text for the pivot field. |
| [SetDragToColumn](./Methods/SetDragToColumn.md) | None | Sets the setting which specifies whether the specified field can be dragged to the column position. |
| [SetDragToData](./Methods/SetDragToData.md) | None | Sets the setting which specifies whether the specified field can be dragged to the data position. |
| [SetDragToPage](./Methods/SetDragToPage.md) | None | Sets the setting which specifies whether the specified field can be dragged to the page position. |
| [SetDragToRow](./Methods/SetDragToRow.md) | None | Sets the setting which specifies whether the specified field can be dragged to the row position. |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | None | Sets the setting which specifies whether to insert blank rows after each item. |
| [SetLayoutCompactRow](./Methods/SetLayoutCompactRow.md) | None | Sets the setting which specifies whether a pivot table field is compacted. |
| [SetLayoutForm](./Methods/SetLayoutForm.md) | None | Sets the way the specified pivot table items appear — in table format or in outline format. |
| [SetLayoutPageBreak](./Methods/SetLayoutPageBreak.md) | None | Sets the setting which specifies whether to insert a page break after each field. |
| [SetLayoutSubtotalLocation](./Methods/SetLayoutSubtotalLocation.md) | None | Sets the layout subtotal location. |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | None | Sets the setting which specifies whether to show subtotals. |
| [SetName](./Methods/SetName.md) | None | Sets a value representing the object name. |
| [SetOrientation](./Methods/SetOrientation.md) | None | Sets a pivot field orientation value that represents the location\ of the field in the specified pivot table report. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets a value that represents the position of the field (first, second, third, and so on)\ among all the fields in its orientation (Rows, Columns, Pages, Data). |
| [SetRepeatLabels](./Methods/SetRepeatLabels.md) | None | Sets the setting which specifies whether to repeat items labels at each row. |
| [SetShowAllItems](./Methods/SetShowAllItems.md) | None | Sets the setting which specifies whether to show items with no data. |
| [SetSubtotalName](./Methods/SetSubtotalName.md) | None | Sets the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| [SetSubtotals](./Methods/SetSubtotals.md) | None | Sets an object that represents all subtotals. |
| [SetValue](./Methods/SetValue.md) | None | Sets a value representing the name of the specified field in the pivot table report. |
