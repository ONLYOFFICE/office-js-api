# ApiWorksheet

Represents the ApiWorksheet class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetVisible](./Methods/GetVisible.md) | boolean | Returns the state of sheet visibility. |
| [SetVisible](./Methods/SetVisible.md) | None | Sets the state of sheet visibility. |
| [SetActive](./Methods/SetActive.md) | None | Makes the current sheet active. |
| [GetActiveCell](./Methods/GetActiveCell.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents an active cell. |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use). |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents all the cells on the rows range. |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents all the cells on the columns range. |
| [GetUsedRange](./Methods/GetUsedRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the used range on the specified worksheet. |
| [GetName](./Methods/GetName.md) | string | Returns a sheet name. |
| [SetName](./Methods/SetName.md) | None | Sets a name to the current active sheet. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns a sheet index. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns an object that represents the selected range of the current sheet. Can be a single cell - **A1**, or cells from a single row - **A1:E1**, or cells from a single column - **A1:A10**, or cells from several rows and columns - **A1:E10**. |
| [GetRangeByNumber](./Methods/GetRangeByNumber.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range of the current sheet using the **row/column** coordinates for the cell selection. |
| [FormatAsTable](./Methods/FormatAsTable.md) | None | Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header). 💡 As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | None | Sets the width of the specified column. One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used. |
| [SetRowHeight](./Methods/SetRowHeight.md) | None | Sets the height of the specified row measured in points. A point is 1/72 inch. |
| [SetDisplayGridlines](./Methods/SetDisplayGridlines.md) | None | Specifies whether the current sheet gridlines must be displayed or not. |
| [SetDisplayHeadings](./Methods/SetDisplayHeadings.md) | None | Specifies whether the current sheet row/column headers must be displayed or not. |
| [SetLeftMargin](./Methods/SetLeftMargin.md) | None | Sets the left margin of the sheet. |
| [GetLeftMargin](./Methods/GetLeftMargin.md) | number | Returns the left margin of the sheet. |
| [SetRightMargin](./Methods/SetRightMargin.md) | None | Sets the right margin of the sheet. |
| [GetRightMargin](./Methods/GetRightMargin.md) | number | Returns the right margin of the sheet. |
| [SetTopMargin](./Methods/SetTopMargin.md) | None | Sets the top margin of the sheet. |
| [GetTopMargin](./Methods/GetTopMargin.md) | number | Returns the top margin of the sheet. |
| [SetBottomMargin](./Methods/SetBottomMargin.md) | None | Sets the bottom margin of the sheet. |
| [GetBottomMargin](./Methods/GetBottomMargin.md) | number | Returns the bottom margin of the sheet. |
| [SetPageOrientation](./Methods/SetPageOrientation.md) | None | Sets the page orientation. |
| [GetPageOrientation](./Methods/GetPageOrientation.md) | [PageOrientation](../Enumeration/PageOrientation.md) | Returns the page orientation. |
| [GetPrintHeadings](./Methods/GetPrintHeadings.md) | boolean | Returns the page PrintHeadings property which specifies whether the current sheet row/column headings must be printed or not. |
| [SetPrintHeadings](./Methods/SetPrintHeadings.md) | None | Specifies whether the current sheet row/column headers must be printed or not. |
| [GetPrintGridlines](./Methods/GetPrintGridlines.md) | boolean | Returns the page PrintGridlines property which specifies whether the current sheet gridlines must be printed or not. |
| [SetPrintGridlines](./Methods/SetPrintGridlines.md) | None | Specifies whether the current sheet gridlines must be printed or not. |
| [GetDefNames](./Methods/GetDefNames.md) | [ApiName](../ApiName/ApiName.md)[] | Returns an array of ApiName objects. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) \| null | Returns the ApiName object by the worksheet name. |
| [AddDefName](./Methods/AddDefName.md) | boolean | Adds a new name to the current worksheet. |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current worksheet. |
| [Delete](./Methods/Delete.md) | None | Deletes the current worksheet. |
| [SetHyperlink](./Methods/SetHyperlink.md) | None | Adds a hyperlink to the specified range. |
| [AddChart](./Methods/AddChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart of the specified type from the selected data range of the current sheet. 💡 Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [AddShape](./Methods/AddShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Adds a shape to the current sheet with the parameters specified. 💡 Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set. |
| [AddImage](./Methods/AddImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Adds an image to the current sheet with the parameters specified. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current worksheet. |
| [AddWordArt](./Methods/AddWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Adds a Text Art object to the current sheet with the parameters specified. |
| [AddOleObject](./Methods/AddOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Adds an OLE object to the current sheet with the parameters specified. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with a new one. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns all drawings from the current sheet. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns all images from the current sheet. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns all shapes from the current sheet. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns all charts from the current sheet. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns all OLE objects from the current sheet. |
| [Move](./Methods/Move.md) | None | Moves the current sheet to another location in the workbook. |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns a pivot table by its name from the current worksheet, or null if it does not exist. |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables from the current worksheet. |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | None | Refreshes all pivot tables on the current worksheet. |
| [GetFreezePanes](./Methods/GetFreezePanes.md) | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | Returns the freeze panes from the current worksheet. |
| [AddProtectedRange](./Methods/AddProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | Creates a protected range of the specified type from the selected data range of the current sheet. |
| [GetProtectedRange](./Methods/GetProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | Returns a protected range object by its title. |
| [GetAllProtectedRanges](./Methods/GetAllProtectedRanges.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md)[] \| null | Returns all protected ranges from the current worksheet. |
| [Paste](./Methods/Paste.md) | None | Pastes the contents of the clipboard to the current sheet. |
