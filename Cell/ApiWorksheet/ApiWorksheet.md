# ApiWorksheet

Represents the ApiWorksheet class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Visible | boolean | Returns or sets the state of sheet visibility. |
| Active | number | Makes the current sheet active. |
| ActiveCell | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents an active cell. |
| Selection | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use). |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells of the rows range. |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells of the columns range. |
| UsedRange | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents the used range on the specified worksheet. |
| Name | string | Returns or sets a name of the active sheet. |
| Index | number | Returns a sheet index. |
| LeftMargin | number | Returns or sets the size of the sheet left margin measured in points. |
| RightMargin | number | Returns or sets the size of the sheet right margin measured in points. |
| TopMargin | number | Returns or sets the size of the sheet top margin measured in points. |
| BottomMargin | number | Returns or sets the size of the sheet bottom margin measured in points. |
| PageOrientation | [PageOrientation](../Enumeration/PageOrientation.md) | Returns or sets the page orientation. |
| PrintHeadings | boolean | Returns or sets the page PrintHeadings property. |
| PrintGridlines | boolean | Returns or sets the page PrintGridlines property. |
| Defnames | Array | Returns an array of the ApiName objects. |
| Comments | Array | Returns all comments from the current worksheet. |
| FreezePanes | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | Returns the freeze panes for the current worksheet. |
| AllProtectedRanges | [ApiProtectedRange[]](../ApiProtectedRange/ApiProtectedRange.md) | Returns all protected ranges from the current worksheet. |
| PivotTables | [ApiPivotTable[]](../ApiPivotTable/ApiPivotTable.md) | Returns all pivot tables from the current worksheet. |
## Methods

- [GetVisible](./Methods/GetVisible.md)
- [SetVisible](./Methods/SetVisible.md)
- [SetActive](./Methods/SetActive.md)
- [GetActiveCell](./Methods/GetActiveCell.md)
- [GetSelection](./Methods/GetSelection.md)
- [GetCells](./Methods/GetCells.md)
- [GetRows](./Methods/GetRows.md)
- [GetCols](./Methods/GetCols.md)
- [GetUsedRange](./Methods/GetUsedRange.md)
- [GetName](./Methods/GetName.md)
- [SetName](./Methods/SetName.md)
- [GetIndex](./Methods/GetIndex.md)
- [GetRange](./Methods/GetRange.md)
- [GetRangeByNumber](./Methods/GetRangeByNumber.md)
- [FormatAsTable](./Methods/FormatAsTable.md)
- [SetColumnWidth](./Methods/SetColumnWidth.md)
- [SetRowHeight](./Methods/SetRowHeight.md)
- [SetDisplayGridlines](./Methods/SetDisplayGridlines.md)
- [SetDisplayHeadings](./Methods/SetDisplayHeadings.md)
- [SetLeftMargin](./Methods/SetLeftMargin.md)
- [GetLeftMargin](./Methods/GetLeftMargin.md)
- [SetRightMargin](./Methods/SetRightMargin.md)
- [GetRightMargin](./Methods/GetRightMargin.md)
- [SetTopMargin](./Methods/SetTopMargin.md)
- [GetTopMargin](./Methods/GetTopMargin.md)
- [SetBottomMargin](./Methods/SetBottomMargin.md)
- [GetBottomMargin](./Methods/GetBottomMargin.md)
- [SetPageOrientation](./Methods/SetPageOrientation.md)
- [GetPageOrientation](./Methods/GetPageOrientation.md)
- [GetPrintHeadings](./Methods/GetPrintHeadings.md)
- [SetPrintHeadings](./Methods/SetPrintHeadings.md)
- [GetPrintGridlines](./Methods/GetPrintGridlines.md)
- [SetPrintGridlines](./Methods/SetPrintGridlines.md)
- [GetDefNames](./Methods/GetDefNames.md)
- [GetDefName](./Methods/GetDefName.md)
- [AddDefName](./Methods/AddDefName.md)
- [GetComments](./Methods/GetComments.md)
- [Delete](./Methods/Delete.md)
- [SetHyperlink](./Methods/SetHyperlink.md)
- [AddChart](./Methods/AddChart.md)
- [AddShape](./Methods/AddShape.md)
- [AddImage](./Methods/AddImage.md)
- [GroupDrawings](./Methods/GroupDrawings.md)
- [AddWordArt](./Methods/AddWordArt.md)
- [AddOleObject](./Methods/AddOleObject.md)
- [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md)
- [GetAllDrawings](./Methods/GetAllDrawings.md)
- [GetAllImages](./Methods/GetAllImages.md)
- [GetAllShapes](./Methods/GetAllShapes.md)
- [GetAllCharts](./Methods/GetAllCharts.md)
- [GetAllOleObjects](./Methods/GetAllOleObjects.md)
- [Move](./Methods/Move.md)
- [GetPivotByName](./Methods/GetPivotByName.md)
- [GetAllPivotTables](./Methods/GetAllPivotTables.md)
- [RefreshAllPivots](./Methods/RefreshAllPivots.md)
- [GetFreezePanes](./Methods/GetFreezePanes.md)
- [AddProtectedRange](./Methods/AddProtectedRange.md)
- [GetProtectedRange](./Methods/GetProtectedRange.md)
- [GetAllProtectedRanges](./Methods/GetAllProtectedRanges.md)
- [Paste](./Methods/Paste.md)
