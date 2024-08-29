# ApiPivotTable

Represents the ApiPivotTable class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Name | string | Returns or sets name of the PivotTable. |
| ColumnGrand | boolean | Returns or sets PivotTable Grand Totals settings for columns. |
| RowGrand | boolean | Returns or sets PivotTable Grand Totals settings for rows. |
| DisplayFieldCaptions | boolean | Returns or set show field headers for rows and columns. |
| Title | string | Returns or sets the title of the PivotTable. |
| Description | string | Returns or sets the description of the PivotTable. |
| StyleName | string | Returns or sets the style name of the PivotTable. |
| ShowTableStyleRowHeaders | boolean | Returns or sets the row headers style for PivotTable. |
| ShowTableStyleColumnHeaders | boolean | Returns or sets the column headers style for PivotTable. |
| ShowTableStyleRowStripes | boolean | Returns or sets the banded rows style for PivotTable. |
| ShowTableStyleColumnStripes | boolean | Returns or sets the banded columns style for PivotTable. |
| Source | [ApiRange](../ApiRange/ApiRange.md) | Returns or sets source for the PivotTable. |
| ColumnRange | [ApiRange](../ApiRange/ApiRange.md) &#124; null | Returns a Range object that represents the range that contains the column area in the PivotTable report. |
| RowRange | [ApiRange](../ApiRange/ApiRange.md) &#124; null | Returns a Range object that represents the range that contains the row area in the PivotTable report. |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the range of values in a PivotTable. |
| TableRange1 | [ApiRange](../ApiRange/ApiRange.md) &#124; null | Returns a Range object that represents the range containing the entire PivotTable report, but doesn't include page fields. |
| TableRange2 | [ApiRange](../ApiRange/ApiRange.md) &#124; null | Returns a Range object that represents the range containing the entire PivotTable report, including page fields |
| GrandTotalName | string | Sets the text string label that is displayed in the grand total column or row heading in the specified PivotTable report. |
| RepeatAllLabels | boolean | Specifies whether to repeat item labels for all PivotFields in the specified PivotTable. |
| RowAxisLayout | object | Sets the way the specified PivotTable items appear—in table format or in outline format. |
| LayoutBlankLine | boolean | Sets PivotTable setting insert blank rows after each item. |
| LayoutSubtotals | boolean | Sets PivotTable setting show subtotals. |
| SubtotalLocation | number | Sets PivotTable setting layout subtotal location. |
| PivotFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns all PivotFields in PivotTable. |
| ColumnFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that are currently showing as column fields in PivotTable. |
| DataFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that are currently showing values fields in PivotTable. |
| HiddenFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that represents all not added fields in PivotTable. |
| VisibleFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that represents all not added fields in PivotTable. |
| PageFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that are currently showing as page fields in PivotTable. |
| RowFields | Array.<[ApiPivotField](../ApiPivotField/ApiPivotField.md)> | Returns array that are currently showing as row fields in PivotTable. |

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
