# ApiRange

Represents the ApiRange class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "range" | Returns a type of the ApiRange class. |
| [GetRow](./Methods/GetRow.md) | number | Returns a row number for the selected cell. |
| [GetCol](./Methods/GetCol.md) | number | Returns a column number for the selected cell. |
| [Clear](./Methods/Clear.md) | None | Clears the current range. |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row. |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the columns in the specified range. |
| [End](./Methods/End.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the end in the specified direction in the specified range. |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents all the cells in the specified range or a specified cell. |
| [SetOffset](./Methods/SetOffset.md) | None | Sets the cell offset. |
| [GetAddress](./Methods/GetAddress.md) | string \| null | Returns the range address. |
| [GetCount](./Methods/GetCount.md) | number | Returns the rows or columns count. |
| [GetValue](./Methods/GetValue.md) | string \| string[][] | Returns a value of the specified range. |
| [SetValue](./Methods/SetValue.md) | boolean | Sets a value to the current cell or cell range. |
| [GetFormula](./Methods/GetFormula.md) | string \| string[][] | Returns a formula of the specified range. |
| [GetValue2](./Methods/GetValue2.md) | string \| string[][] | Returns the Value2 property (value without format) of the specified range. |
| [GetText](./Methods/GetText.md) | string \| string[][] | Returns the text of the specified range. |
| [SetFontColor](./Methods/SetFontColor.md) | None | Sets the text color to the current cell range with the previously created color object. |
| [GetHidden](./Methods/GetHidden.md) | boolean | Returns the value hiding property. The specified range must span an entire column or row. |
| [SetHidden](./Methods/SetHidden.md) | None | Sets the value hiding property. The specified range must span an entire column or row. |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | number | Returns the column width value. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | None | Sets the width of all the columns in the current range. One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used. |
| [GetRowHeight](./Methods/GetRowHeight.md) | [pt](../Enumeration/pt.md) | Returns the row height value. |
| [SetRowHeight](./Methods/SetRowHeight.md) | None | Sets the row height value. |
| [SetFontSize](./Methods/SetFontSize.md) | None | Sets the font size to the characters of the current cell range. |
| [SetFontName](./Methods/SetFontName.md) | None | Sets the specified font family as the font name for the current cell range. |
| [SetAlignVertical](./Methods/SetAlignVertical.md) | boolean | Sets the vertical alignment of the text in the current cell range. |
| [SetAlignHorizontal](./Methods/SetAlignHorizontal.md) | boolean | Sets the horizontal alignment of the text in the current cell range. |
| [SetBold](./Methods/SetBold.md) | None | Sets the bold property to the text characters in the current cell or cell range. |
| [SetItalic](./Methods/SetItalic.md) | None | Sets the italic property to the text characters in the current cell or cell range. |
| [SetUnderline](./Methods/SetUnderline.md) | None | Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character. |
| [SetStrikeout](./Methods/SetStrikeout.md) | None | Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents. |
| [SetWrap](./Methods/SetWrap.md) | None | Specifies whether the words in the cell must be wrapped to fit the cell size or not. |
| [GetWrapText](./Methods/GetWrapText.md) | boolean | Returns the information about the wrapping cell style. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the background color to the current cell range with the previously created color object. Sets 'No Fill' when previously created color object is null. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns the background color for the current cell range. Returns 'No Fill' when the color of the background in the cell / cell range is null. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string \| null | Returns a value that represents the format code for the current range. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border to the cell / cell range with the parameters specified. |
| [Merge](./Methods/Merge.md) | None | Merges the selected cell range into a single cell or a cell row. |
| [UnMerge](./Methods/UnMerge.md) | None | Splits the selected merged cell range into the single cells. |
| [ForEach](./Methods/ForEach.md) | None | Executes a provided function once for each cell. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Adds a comment to the current range. |
| [GetWorksheet](./Methods/GetWorksheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object of the current range. |
| [GetComment](./Methods/GetComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns the ApiComment object of the current range. |
| [Select](./Methods/Select.md) | None | Selects the current range. |
| [GetOrientation](./Methods/GetOrientation.md) | [Angle](../Enumeration/Angle.md) | Returns the current range angle. |
| [SetOrientation](./Methods/SetOrientation.md) | None | Sets an angle to the current cell range. |
| [SetSort](./Methods/SetSort.md) | None | Sorts the cells in the given range by the parameters specified in the request. |
| [Delete](./Methods/Delete.md) | None | Deletes the Range object. |
| [Insert](./Methods/Insert.md) | None | Inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space. |
| [AutoFit](./Methods/AutoFit.md) | None | Changes the width of the columns or the height of the rows in the range to achieve the best fit. |
| [GetAreas](./Methods/GetAreas.md) | [ApiAreas](../ApiAreas/ApiAreas.md) | Returns a collection of the ranges. |
| [Copy](./Methods/Copy.md) | None | Copies the range to the specified range or to the clipboard. |
| [Cut](./Methods/Cut.md) | None | Cuts the range and save it to the clipboard or paste it to the specified range. |
| [Paste](./Methods/Paste.md) | None | Pastes the Range object to the specified range. |
| [PasteSpecial](./Methods/PasteSpecial.md) | None | Pastes the Range object to the specified range using the special paste options. |
| [GetPivotTable](./Methods/GetPivotTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns the ApiPivotTable object that represents the pivot table report containing the upper-left corner of the specified range. |
| [Find](./Methods/Find.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Finds specific information in the current range. |
| [FindNext](./Methods/FindNext.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Continues a search that was begun with the &#123;@link ApiRange#Find&#125; method. Finds the next cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell. |
| [FindPrevious](./Methods/FindPrevious.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Continues a search that was begun with the &#123;@link ApiRange#Find&#125; method. Finds the previous cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell. |
| [Replace](./Methods/Replace.md) | None | Replaces specific information to another one in a range. |
| [GetCharacters](./Methods/GetCharacters.md) | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string. |
| [SetAutoFilter](./Methods/SetAutoFilter.md) | None | Adds an AutoFilter to the current range. |
