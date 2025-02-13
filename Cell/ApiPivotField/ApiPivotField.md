# ApiPivotField

Represents the ApiPivotField class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Position | number | Returns or sets a value that represents the position of the field (first, second, third, and so on) among all the fields in its orientation (Rows, Columns, Pages, Data). |
| Orientation | number | Returns or sets a pivot field orientation value that represents the location of the field in the specified pivot table report. |
| Caption | string | Returns or sets a value that represents the label text for the pivot field. |
| Name | string | Returns or sets a value representing the object name. |
| Value | string | Returns or sets a value representing the name of the specified field in the pivot table report. |
| SourceName | string | Returns a source name for the pivot table field. |
| Index | number | Returns an index for the pivot table field. |
| Table | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the ApiPivotTable object which represents the pivot table for the current field. |
| Parent | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Returns the parent object for the current field. |
| LayoutCompactRow | boolean | Returns or sets the setting which specifies whether a pivot table field is compacted. |
| LayoutForm | number | Returns or sets the way the specified pivot table items appear — in table format or in outline format. |
| LayoutPageBreak | boolean | Returns or sets the setting which specifies whether to insert a page break after each field. |
| ShowingInAxis | boolean | Returns the setting which specifies whether the pivot table field is currently visible in the pivot table. |
| RepeatLabels | boolean | Returns or sets the setting which specifies whether to repeat items labels at each row. |
| LayoutBlankLine | boolean | Returns and sets the setting which specifies whether to insert blank rows after each item. |
| ShowAllItems | boolean | Returns or sets the setting which specifies whether to show items with no data. |
| LayoutSubtotals | boolean | Returns or sets the setting which specifies whether to show subtotals. |
| LayoutSubtotalLocation | number | Returns or sets the layout subtotal location. |
| SubtotalName | string | Returns or sets the text label displayed in the subtotal column or row heading in the specified pivot table report. |
| Subtotals | object | Returns or sets the subtotals. |
| Formula | number | Returns or sets a value that represents the object's formula. |
| DragToColumn | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the column position. |
| DragToRow | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the row position. |
| DragToData | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the data position. |
| DragToPage | boolean | Returns or sets the setting which specifies whether the specified field can be dragged to the page position. |
| NumberFormat | string \| null | Returns or sets a value that represents the format code for the object. |
| CurrentPage | string \| number | Returns the current page which is displayed for the page field (valid only for page fields). |
| PivotItems | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| [ApiPivotItem[]](../ApiPivotItem/ApiPivotItem.md) | Returns an object that represents either a single pivot table item (the ApiPivotItem object) or a collection of all the visible and hidden items (an array of the ApiPivotItem objects) in the specified field. |
## Methods

- [ClearAllFilters](./Methods/ClearAllFilters.md)
- [ClearLabelFilters](./Methods/ClearLabelFilters.md)
- [ClearManualFilters](./Methods/ClearManualFilters.md)
- [ClearValueFilters](./Methods/ClearValueFilters.md)
- [GetPivotItems](./Methods/GetPivotItems.md)
- [Move](./Methods/Move.md)
- [Remove](./Methods/Remove.md)
- [GetPosition](./Methods/GetPosition.md)
- [SetPosition](./Methods/SetPosition.md)
- [GetOrientation](./Methods/GetOrientation.md)
- [SetOrientation](./Methods/SetOrientation.md)
- [GetValue](./Methods/GetValue.md)
- [SetValue](./Methods/SetValue.md)
- [GetCaption](./Methods/GetCaption.md)
- [SetCaption](./Methods/SetCaption.md)
- [GetName](./Methods/GetName.md)
- [SetName](./Methods/SetName.md)
- [GetSourceName](./Methods/GetSourceName.md)
- [GetIndex](./Methods/GetIndex.md)
- [GetTable](./Methods/GetTable.md)
- [GetParent](./Methods/GetParent.md)
- [GetLayoutCompactRow](./Methods/GetLayoutCompactRow.md)
- [SetLayoutCompactRow](./Methods/SetLayoutCompactRow.md)
- [GetLayoutForm](./Methods/GetLayoutForm.md)
- [SetLayoutForm](./Methods/SetLayoutForm.md)
- [GetLayoutPageBreak](./Methods/GetLayoutPageBreak.md)
- [SetLayoutPageBreak](./Methods/SetLayoutPageBreak.md)
- [GetShowingInAxis](./Methods/GetShowingInAxis.md)
- [GetRepeatLabels](./Methods/GetRepeatLabels.md)
- [SetRepeatLabels](./Methods/SetRepeatLabels.md)
- [GetLayoutBlankLine](./Methods/GetLayoutBlankLine.md)
- [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md)
- [GetShowAllItems](./Methods/GetShowAllItems.md)
- [SetShowAllItems](./Methods/SetShowAllItems.md)
- [GetLayoutSubtotals](./Methods/GetLayoutSubtotals.md)
- [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md)
- [GetLayoutSubtotalLocation](./Methods/GetLayoutSubtotalLocation.md)
- [SetLayoutSubtotalLocation](./Methods/SetLayoutSubtotalLocation.md)
- [GetSubtotalName](./Methods/GetSubtotalName.md)
- [SetSubtotalName](./Methods/SetSubtotalName.md)
- [GetSubtotals](./Methods/GetSubtotals.md)
- [SetSubtotals](./Methods/SetSubtotals.md)
- [GetDragToColumn](./Methods/GetDragToColumn.md)
- [SetDragToColumn](./Methods/SetDragToColumn.md)
- [GetDragToRow](./Methods/GetDragToRow.md)
- [SetDragToRow](./Methods/SetDragToRow.md)
- [GetDragToData](./Methods/GetDragToData.md)
- [SetDragToData](./Methods/SetDragToData.md)
- [GetDragToPage](./Methods/GetDragToPage.md)
- [SetDragToPage](./Methods/SetDragToPage.md)
- [GetCurrentPage](./Methods/GetCurrentPage.md)
