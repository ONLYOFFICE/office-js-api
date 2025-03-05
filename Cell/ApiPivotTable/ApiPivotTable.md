# ApiPivotTable

Represents the ApiPivotTable class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddDataField](./Methods/AddDataField.md) | [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) | Adds a data field to the pivot table report. |
| [AddFields](./Methods/AddFields.md) | None | Adds the row, column, and page fields to the pivot table report. |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | None | Deletes all filters currently applied to the pivot table. |
| [ClearTable](./Methods/ClearTable.md) | None | Clears the pivot table. |
| [GetData](./Methods/GetData.md) | number \| null | Returns the value for the data field in a pivot table. |
| [GetPivotData](./Methods/GetPivotData.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object with information about a data item in the pivot table report. |
| [GetPivotFields](./Methods/GetPivotFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] \| [ApiPivotField](../ApiPivotField/ApiPivotField.md) \| [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) \| null | Returns a collection that represents either a single pivot table field or a collection of both the visible and hidden fields in the pivot table report. |
| [PivotValueCell](./Methods/PivotValueCell.md) | number \| string \| null | Returns the value of a pivot table cell. |
| [ShowDetails](./Methods/ShowDetails.md) | boolean | Shows details of the pivot table cell. |
| [RefreshTable](./Methods/RefreshTable.md) | None | Refreshes the pivot table report from the source data. |
| [Update](./Methods/Update.md) | None | Updates the current pivot table. |
| [SetRepeatAllLabels](./Methods/SetRepeatAllLabels.md) | None | Specifies whether to repeat item labels for all pivot fields in the specified pivot table. |
| [SetRowAxisLayout](./Methods/SetRowAxisLayout.md) | None | Sets the way the specified pivot table items appear — in table format or in outline format. |
| [SetSubtotalLocation](./Methods/SetSubtotalLocation.md) | None | Sets the layout subtotal location in the pivot table. |
| [RemoveField](./Methods/RemoveField.md) | None | Removes the specified field from all the pivot table categories. |
| [MoveField](./Methods/MoveField.md) | None | Moves the specified field from one category to another. |
| [Select](./Methods/Select.md) | None | Selects the current pivot table. |
| [GetColumnFields](./Methods/GetColumnFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | Returns a collection that is currently displayed as column fields in the pivot table. |
| [GetDataFields](./Methods/GetDataFields.md) | [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md)[] \| [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) \| null | Returns a collection that represents either a single pivot table data field or a collection of all visible data fields. |
| [GetHiddenFields](./Methods/GetHiddenFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | Returns an array that represents all the hidden fields in the pivot table. |
| [GetVisibleFields](./Methods/GetVisibleFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | Returns an array that represents all the visible fields in the pivot table. |
| [GetPageFields](./Methods/GetPageFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | Returns a collection that represents either a single pivot table page field or a collection of all visible page fields. |
| [GetRowFields](./Methods/GetRowFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | Returns a collection that is currently displayed as row fields in the pivot table. |
| [GetName](./Methods/GetName.md) | string | Returns the pivot table name. |
| [SetName](./Methods/SetName.md) | None | Sets the pivot table name. |
| [GetColumnGrand](./Methods/GetColumnGrand.md) | boolean | Returns the **Grand Totals** setting of the pivot table columns. |
| [SetColumnGrand](./Methods/SetColumnGrand.md) | None | Sets the **Grand Totals** setting to the pivot table columns. |
| [GetRowGrand](./Methods/GetRowGrand.md) | boolean | Returns the **Grand Totals** setting of the pivot table rows. |
| [SetRowGrand](./Methods/SetRowGrand.md) | None | Sets the **Grand Totals** setting to the pivot table rows. |
| [GetDisplayFieldsInReportFilterArea](./Methods/GetDisplayFieldsInReportFilterArea.md) | [PivotTableFilterAreaInfo](../Enumeration/PivotTableFilterAreaInfo.md) | Returns the pivot table display fields in the report filter area settings. |
| [SetDisplayFieldsInReportFilterArea](./Methods/SetDisplayFieldsInReportFilterArea.md) | None | Sets the pivot table display fields in the report filter area settings. |
| [GetDisplayFieldCaptions](./Methods/GetDisplayFieldCaptions.md) | boolean | Returns the setting which specifies whether to display field headers for rows and columns. |
| [SetDisplayFieldCaptions](./Methods/SetDisplayFieldCaptions.md) | None | Returns the setting which specifies whether to display field headers for rows and columns. |
| [GetTitle](./Methods/GetTitle.md) | string | Returns the pivot table title. |
| [SetTitle](./Methods/SetTitle.md) | None | Sets the pivot table title. |
| [GetDescription](./Methods/GetDescription.md) | string | Returns the pivot table description. |
| [SetDescription](./Methods/SetDescription.md) | None | Sets the pivot table description. |
| [GetStyleName](./Methods/GetStyleName.md) | string | Returns the pivot table style name. |
| [SetStyleName](./Methods/SetStyleName.md) | None | Sets the pivot table style name. |
| [GetTableStyleRowHeaders](./Methods/GetTableStyleRowHeaders.md) | boolean | Returns the setting which specifies whether the row headers of the pivot table will be highlighted with the special formatting. |
| [SetTableStyleRowHeaders](./Methods/SetTableStyleRowHeaders.md) | None | Sets the setting which specifies whether the row headers of the pivot table will be highlighted with the special formatting. |
| [GetTableStyleColumnHeaders](./Methods/GetTableStyleColumnHeaders.md) | boolean | Returns the setting which specifies whether the column headers of the pivot table will be highlighted with the special formatting. |
| [SetTableStyleColumnHeaders](./Methods/SetTableStyleColumnHeaders.md) | None | Sets the setting which specifies whether the column headers of the pivot table will be highlighted with the special formatting. |
| [GetTableStyleRowStripes](./Methods/GetTableStyleRowStripes.md) | boolean | Returns the setting which specifies whether the background color alternation for odd and even rows will be enabled for the pivot table. |
| [SetTableStyleRowStripes](./Methods/SetTableStyleRowStripes.md) | None | Sets the setting which specifies whether the background color alternation for odd and even rows will be enabled for the pivot table. |
| [GetTableStyleColumnStripes](./Methods/GetTableStyleColumnStripes.md) | boolean | Returns the setting which specifies whether the background color alternation for odd and even columns will be enabled for the pivot table. |
| [SetTableStyleColumnStripes](./Methods/SetTableStyleColumnStripes.md) | None | Sets the setting which specifies whether the background color alternation for odd and even columns will be enabled for the pivot table. |
| [GetSource](./Methods/GetSource.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the source range for the pivot table. |
| [SetSource](./Methods/SetSource.md) | None | Sets the source range for the pivot table. |
| [GetColumnRange](./Methods/GetColumnRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the column area in the pivot table report. |
| [GetRowRange](./Methods/GetRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the row area in the pivot table report. |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the range of values in the pivot table. |
| [GetTableRange1](./Methods/GetTableRange1.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the entire pivot table report, but doesn't include page fields. |
| [GetTableRange2](./Methods/GetTableRange2.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the entire pivot table report, including page fields. |
| [GetGrandTotalName](./Methods/GetGrandTotalName.md) | string | Returns the text string label that is displayed in the grand total column or row heading in the specified pivot table report. |
| [SetGrandTotalName](./Methods/SetGrandTotalName.md) | None | Sets the text string label that is displayed in the grand total column or row heading in the specified pivot table report. |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | None | Sets the setting which specifies whether to insert blank rows after each item. |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | None | Sets the setting which specifies whether to show subtotals. |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent object for the current pivot table. |
