# ApiWorksheet

Represents the ApiWorksheet class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Active | number | Makes the current sheet active. |
| ActiveCell | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents an active cell. |
| AllProtectedRanges | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md)[] | Returns all protected ranges from the current worksheet. |
| BottomMargin | number | Returns or sets the size of the sheet bottom margin measured in points. |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use). |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells of the columns range. |
| Comments | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current worksheet. |
| Defnames | [ApiName](../ApiName/ApiName.md)[] | Returns an array of the ApiName objects. |
| FreezePanes | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | Returns the freeze panes for the current worksheet. |
| Index | number | Returns a sheet index. |
| LeftMargin | number | Returns or sets the size of the sheet left margin measured in points. |
| Name | string | Returns or sets a name of the active sheet. |
| PageOrientation | [PageOrientation](../Enumeration/PageOrientation.md) | Returns or sets the page orientation. |
| PivotTables | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables from the current worksheet. |
| PrintGridlines | boolean | Returns or sets the page PrintGridlines property. |
| PrintHeadings | boolean | Returns or sets the page PrintHeadings property. |
| RightMargin | number | Returns or sets the size of the sheet right margin measured in points. |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents all the cells of the rows range. |
| Selection | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| TopMargin | number | Returns or sets the size of the sheet top margin measured in points. |
| UsedRange | [ApiRange](../ApiRange/ApiRange.md) | Returns ApiRange that represents the used range on the specified worksheet. |
| Visible | boolean | Returns or sets the state of sheet visibility. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddChart](./Methods/AddChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart of the specified type from the selected data range of the current sheet.\n💡 Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and\nrow cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [AddDefName](./Methods/AddDefName.md) | boolean | Adds a new name to the current worksheet. |
| [AddImage](./Methods/AddImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Adds an image to the current sheet with the parameters specified. |
| [AddOleObject](./Methods/AddOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Adds an OLE object to the current sheet with the parameters specified. |
| [AddProtectedRange](./Methods/AddProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | Creates a protected range of the specified type from the selected data range of the current sheet. |
| [AddShape](./Methods/AddShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Adds a shape to the current sheet with the parameters specified.\n💡 Please note that the horizontal and vertical offsets are\ncalculated within the limits of the specified column and row cells\nonly. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [AddWordArt](./Methods/AddWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Adds a Text Art object to the current sheet with the parameters specified. |
| [Delete](./Methods/Delete.md) | None | Deletes the current worksheet. |
| [FormatAsTable](./Methods/FormatAsTable.md) | None | Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header).\n💡 As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly. |
| [GetActiveCell](./Methods/GetActiveCell.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents an active cell. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns all charts from the current sheet. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns all drawings from the current sheet. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns all images from the current sheet. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns all OLE objects from the current sheet. |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables from the current worksheet. |
| [GetAllProtectedRanges](./Methods/GetAllProtectedRanges.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md)[] \| null | Returns all protected ranges from the current worksheet. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns all shapes from the current sheet. |
| [GetBottomMargin](./Methods/GetBottomMargin.md) | number | Returns the bottom margin of the sheet. |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use). |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents all the cells on the columns range. |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current worksheet. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) \| null | Returns the ApiName object by the worksheet name. |
| [GetDefNames](./Methods/GetDefNames.md) | [ApiName](../ApiName/ApiName.md)[] | Returns an array of ApiName objects. |
| [GetFreezePanes](./Methods/GetFreezePanes.md) | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | Returns the freeze panes from the current worksheet. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns a sheet index. |
| [GetLeftMargin](./Methods/GetLeftMargin.md) | number | Returns the left margin of the sheet. |
| [GetName](./Methods/GetName.md) | string | Returns a sheet name. |
| [GetPageOrientation](./Methods/GetPageOrientation.md) | [PageOrientation](../Enumeration/PageOrientation.md) | Returns the page orientation. |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns a pivot table by its name from the current worksheet, or null if it does not exist. |
| [GetPrintGridlines](./Methods/GetPrintGridlines.md) | boolean | Returns the page PrintGridlines property which specifies whether the current sheet gridlines must be printed or not. |
| [GetPrintHeadings](./Methods/GetPrintHeadings.md) | boolean | Returns the page PrintHeadings property which specifies whether the current sheet row/column headings must be printed or not. |
| [GetProtectedRange](./Methods/GetProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | Returns a protected range object by its title. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns an object that represents the selected range of the current sheet. Can be a single cell - -**A1**, or cells\nfrom a single row - -**A1:E1**, or cells from a single column - -**A1:A10**, or cells from several rows and columns - -**A1:E10**. |
| [GetRangeByNumber](./Methods/GetRangeByNumber.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range of the current sheet using the -**row/column** coordinates for the cell selection. |
| [GetRightMargin](./Methods/GetRightMargin.md) | number | Returns the right margin of the sheet. |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents all the cells on the rows range. |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| [GetTopMargin](./Methods/GetTopMargin.md) | number | Returns the top margin of the sheet. |
| [GetUsedRange](./Methods/GetUsedRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the used range on the specified worksheet. |
| [GetVisible](./Methods/GetVisible.md) | boolean | Returns the state of sheet visibility. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current worksheet. |
| [Move](./Methods/Move.md) | None | Moves the current sheet to another location in the workbook. |
| [Paste](./Methods/Paste.md) | None | Pastes the contents of the clipboard to the current sheet. |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | None | Refreshes all pivot tables on the current worksheet. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with a new one. |
| [SetActive](./Methods/SetActive.md) | None | Makes the current sheet active. |
| [SetBottomMargin](./Methods/SetBottomMargin.md) | None | Sets the bottom margin of the sheet. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | None | Sets the width of the specified column.\nOne unit of column width is equal to the width of one character in the Normal style.\nFor proportional fonts, the width of the character 0 (zero) is used. |
| [SetDisplayGridlines](./Methods/SetDisplayGridlines.md) | None | Specifies whether the current sheet gridlines must be displayed or not. |
| [SetDisplayHeadings](./Methods/SetDisplayHeadings.md) | None | Specifies whether the current sheet row/column headers must be displayed or not. |
| [SetHyperlink](./Methods/SetHyperlink.md) | None | Adds a hyperlink to the specified range. |
| [SetLeftMargin](./Methods/SetLeftMargin.md) | None | Sets the left margin of the sheet. |
| [SetName](./Methods/SetName.md) | None | Sets a name to the current active sheet. |
| [SetPageOrientation](./Methods/SetPageOrientation.md) | None | Sets the page orientation. |
| [SetPrintGridlines](./Methods/SetPrintGridlines.md) | None | Specifies whether the current sheet gridlines must be printed or not. |
| [SetPrintHeadings](./Methods/SetPrintHeadings.md) | None | Specifies whether the current sheet row/column headers must be printed or not. |
| [SetRightMargin](./Methods/SetRightMargin.md) | None | Sets the right margin of the sheet. |
| [SetRowHeight](./Methods/SetRowHeight.md) | None | Sets the height of the specified row measured in points.\nA point is 1/72 inch. |
| [SetTopMargin](./Methods/SetTopMargin.md) | None | Sets the top margin of the sheet. |
| [SetVisible](./Methods/SetVisible.md) | None | Sets the state of sheet visibility. |
