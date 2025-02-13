# ApiPivotTable

Represents the ApiPivotTable class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Name | string | Returns or sets a name of the pivot table. |
| ColumnGrand | boolean | Returns or sets the **Grand Totals** setting for the pivot table columns. |
| RowGrand | boolean | Returns or sets the **Grand Totals** setting for the pivot table rows. |
| DisplayFieldCaptions | boolean | Returns or sets the setting which specifies whether to display field headers for rows and columns. |
| Title | string | Returns or sets the pivot table title. |
| Description | string | Returns or sets the pivot table description. |
| StyleName | string | Returns or sets the pivot table style name. |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent object for the current pivot table. |
| ShowTableStyleRowHeaders | boolean | Returns or sets the setting which specifies whether the row headers of the pivot table will be highlighted with the special formatting. |
| ShowTableStyleColumnHeaders | boolean | Returns or sets the setting which specifies whether the column headers of the pivot table will be highlighted with the special formatting. |
| ShowTableStyleRowStripes | boolean | Returns or sets the setting which specifies whether the background color alternation for odd and even rows will be enabled for the pivot table. |
| ShowTableStyleColumnStripes | boolean | Returns or sets the setting which specifies whether the background color alternation for odd and even columns will be enabled for the pivot table. |
| Source | [ApiRange](../ApiRange/ApiRange.md) | Returns or sets the source range for the pivot table. |
| ColumnRange | [ApiRange](../ApiRange/ApiRange.md) | null | Returns a Range object that represents the column area in the pivot table report. |
| RowRange | [ApiRange](../ApiRange/ApiRange.md) | null | Returns a Range object that represents the row area in the pivot table report. |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the range of values in the pivot table. |
| TableRange1 | [ApiRange](../ApiRange/ApiRange.md) | null | Returns a Range object that represents the entire pivot table report, but doesn't include page fields. |
| TableRange2 | [ApiRange](../ApiRange/ApiRange.md) | null | Returns a Range object that represents the entire pivot table report, including page fields. |
| GrandTotalName | string | Returns or sets the text string label that is displayed in the grand total column or row heading in the specified pivot table report. |
| RepeatAllLabels | boolean | Specifies whether to repeat item labels for all pivot fields in the specified pivot table. |
| RowAxisLayout | object | Sets the way the specified pivot table items appear — in table format or in outline format. |
| LayoutBlankLine | boolean | Sets the setting which specifies whether to insert blank rows after each item in the pivot table. |
| LayoutSubtotals | boolean | Sets the setting which specifies whether to show subtotals in the pivot table. |
| SubtotalLocation | number | Sets the layout subtotal location. |
| PivotFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns all pivot fields in the pivot table. |
| ColumnFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that is currently displayed as column fields in the pivot table. |
| DataFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that is currently displayed as data fields in the pivot table. |
| HiddenFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that represents all hidden fields in the pivot table. |
| VisibleFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that represents all visible fields in the pivot table. |
| PageFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that is currently displayed as page fields in the pivot table. |
| RowFields | [ApiPivotField[]](../ApiPivotField/ApiPivotField.md) | Returns an array that is currently displayed as row fields in the pivot table. |
## Methods

- [AddDataField](./Methods/AddDataField.md)
- [AddFields](./Methods/AddFields.md)
- [ClearAllFilters](./Methods/ClearAllFilters.md)
- [ClearTable](./Methods/ClearTable.md)
- [GetData](./Methods/GetData.md)
- [GetPivotData](./Methods/GetPivotData.md)
- [GetPivotFields](./Methods/GetPivotFields.md)
- [PivotValueCell](./Methods/PivotValueCell.md)
- [ShowDetails](./Methods/ShowDetails.md)
- [RefreshTable](./Methods/RefreshTable.md)
- [Update](./Methods/Update.md)
- [SetRepeatAllLabels](./Methods/SetRepeatAllLabels.md)
- [SetRowAxisLayout](./Methods/SetRowAxisLayout.md)
- [SetSubtotalLocation](./Methods/SetSubtotalLocation.md)
- [RemoveField](./Methods/RemoveField.md)
- [MoveField](./Methods/MoveField.md)
- [Select](./Methods/Select.md)
- [GetColumnFields](./Methods/GetColumnFields.md)
- [GetDataFields](./Methods/GetDataFields.md)
- [GetHiddenFields](./Methods/GetHiddenFields.md)
- [GetVisibleFields](./Methods/GetVisibleFields.md)
- [GetPageFields](./Methods/GetPageFields.md)
- [GetRowFields](./Methods/GetRowFields.md)
- [GetName](./Methods/GetName.md)
- [SetName](./Methods/SetName.md)
- [GetColumnGrand](./Methods/GetColumnGrand.md)
- [SetColumnGrand](./Methods/SetColumnGrand.md)
- [GetRowGrand](./Methods/GetRowGrand.md)
- [SetRowGrand](./Methods/SetRowGrand.md)
- [GetDisplayFieldsInReportFilterArea](./Methods/GetDisplayFieldsInReportFilterArea.md)
- [SetDisplayFieldsInReportFilterArea](./Methods/SetDisplayFieldsInReportFilterArea.md)
- [GetDisplayFieldCaptions](./Methods/GetDisplayFieldCaptions.md)
- [SetDisplayFieldCaptions](./Methods/SetDisplayFieldCaptions.md)
- [GetTitle](./Methods/GetTitle.md)
- [SetTitle](./Methods/SetTitle.md)
- [GetDescription](./Methods/GetDescription.md)
- [SetDescription](./Methods/SetDescription.md)
- [GetStyleName](./Methods/GetStyleName.md)
- [SetStyleName](./Methods/SetStyleName.md)
- [GetTableStyleRowHeaders](./Methods/GetTableStyleRowHeaders.md)
- [SetTableStyleRowHeaders](./Methods/SetTableStyleRowHeaders.md)
- [GetTableStyleColumnHeaders](./Methods/GetTableStyleColumnHeaders.md)
- [SetTableStyleColumnHeaders](./Methods/SetTableStyleColumnHeaders.md)
- [GetTableStyleRowStripes](./Methods/GetTableStyleRowStripes.md)
- [SetTableStyleRowStripes](./Methods/SetTableStyleRowStripes.md)
- [GetTableStyleColumnStripes](./Methods/GetTableStyleColumnStripes.md)
- [SetTableStyleColumnStripes](./Methods/SetTableStyleColumnStripes.md)
- [GetSource](./Methods/GetSource.md)
- [SetSource](./Methods/SetSource.md)
- [GetColumnRange](./Methods/GetColumnRange.md)
- [GetRowRange](./Methods/GetRowRange.md)
- [GetDataBodyRange](./Methods/GetDataBodyRange.md)
- [GetTableRange1](./Methods/GetTableRange1.md)
- [GetTableRange2](./Methods/GetTableRange2.md)
- [GetGrandTotalName](./Methods/GetGrandTotalName.md)
- [SetGrandTotalName](./Methods/SetGrandTotalName.md)
- [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md)
- [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md)
- [GetParent](./Methods/GetParent.md)
