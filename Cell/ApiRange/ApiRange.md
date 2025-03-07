# ApiRange

Represents the ApiRange class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Address | string | Returns the range address. |
| AlignHorizontal | 'left' \| 'right' \| 'center' \| 'justify' | Sets the text horizontal alignment to the current cell range. |
| AlignVertical | 'center' \| 'bottom' \| 'top' \| 'distributed' \| 'justify' | Sets the text vertical alignment to the current cell range. |
| Areas | [ApiAreas](../ApiAreas/ApiAreas.md) | Returns a collection of the areas. |
| Bold | boolean | Sets the bold property to the text characters from the current cell or cell range. |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents all the cells in the specified range or a specified cell. |
| Characters | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string. |
| Col | number | Returns the column number for the selected cell. |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the columns of the specified range. |
| ColumnWidth | number | Returns or sets the width of all the columns in the specified range measured in points. |
| Comments | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns the ApiComment collection that represents all the comments from the specified worksheet. |
| Count | number | Returns the rows or columns count. |
| DefName | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object. |
| FillColor | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns or sets the background color of the current cell range. |
| FontColor | [ApiColor](../ApiColor/ApiColor.md) | Sets the text color to the current cell range with the previously created color object. |
| FontName | string | Sets the specified font family as the font name for the current cell range. |
| FontSize | number | Sets the font size to the characters of the current cell range. |
| Formula | string | Returns a formula from the first cell of the specified range or sets it to this cell. |
| Height | number | Returns a value that represents the range height measured in points. |
| Hidden | boolean | Returns or sets the value hiding property. |
| Italic | boolean | Sets the italic property to the text characters in the current cell or cell range. |
| MergeArea | [ApiRange](../ApiRange/ApiRange.md) | Returns the cell or cell range from the merge area. |
| NumberFormat | string | Sets a value that represents the format code for the object. |
| Orientation | 'xlDownward' \| 'xlHorizontal' \| 'xlUpward' \| 'xlVertical' | Sets an angle to the current cell range. |
| PivotTable | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns the ApiPivotTable object that represents the pivot table report containing the upper-left corner of the specified range. |
| Row | number | Returns the row number for the selected cell. |
| RowHeight | number | Returns or sets the height of the first row in the specified range measured in points. |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the rows of the specified range. |
| Strikeout | boolean | Sets a value that indicates whether the contents of the current cell or cell range are displayed struck through. |
| Text | string | Returns the text from the first cell of the specified range or sets it to this cell. |
| Underline | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' | Sets the type of underline applied to the font. |
| Value | string | Returns a value from the first cell of the specified range or sets it to this cell. |
| Value2 | string | Returns the value2 (value without format) from the first cell of the specified range or sets it to this cell. |
| Width | number | Returns a value that represents the range width measured in points. |
| Worksheet | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the ApiWorksheet object that represents the worksheet containing the specified range. |
| WrapText | boolean | Returns the information about the wrapping cell style or specifies whether the words in the cell must be wrapped to fit the cell size or not. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Adds a comment to the current range. |
| [AutoFit](./Methods/AutoFit.md) | None | Changes the width of the columns or the height of the rows in the range to achieve the best fit. |
| [Clear](./Methods/Clear.md) | None | Clears the current range. |
| [Copy](./Methods/Copy.md) | None | Copies the range to the specified range or to the clipboard. |
| [Cut](./Methods/Cut.md) | None | Cuts the range and save it to the clipboard or paste it to the specified range. |
| [Delete](./Methods/Delete.md) | None | Deletes the Range object. |
| [End](./Methods/End.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the end in the specified direction in the specified range. |
| [Find](./Methods/Find.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Finds specific information in the current range. |
| [FindNext](./Methods/FindNext.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Continues a search that was begun with the [ApiRange#Find](../ApiRange/Methods/Find.md) method. Finds the next cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell. |
| [FindPrevious](./Methods/FindPrevious.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Continues a search that was begun with the [ApiRange#Find](../ApiRange/Methods/Find.md) method. Finds the previous cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell. |
| [ForEach](./Methods/ForEach.md) | None | Executes a provided function once for each cell. |
| [GetAddress](./Methods/GetAddress.md) | string \| null | Returns the range address. |
| [GetAreas](./Methods/GetAreas.md) | [ApiAreas](../ApiAreas/ApiAreas.md) | Returns a collection of the ranges. |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents all the cells in the specified range or a specified cell. |
| [GetCharacters](./Methods/GetCharacters.md) | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string. |
| [GetClassType](./Methods/GetClassType.md) | "range" | Returns a type of the ApiRange class. |
| [GetCol](./Methods/GetCol.md) | number | Returns a column number for the selected cell. |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the columns in the specified range. |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | number | Returns the column width value. |
| [GetComment](./Methods/GetComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns the ApiComment object of the current range. |
| [GetCount](./Methods/GetCount.md) | number | Returns the rows or columns count. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object of the current range. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns the background color for the current cell range. Returns 'No Fill' when the color of the background in the cell / cell range is null. |
| [GetFormula](./Methods/GetFormula.md) | string \| string[][] | Returns a formula of the specified range. |
| [GetHidden](./Methods/GetHidden.md) | boolean | Returns the value hiding property. The specified range must span an entire column or row. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string \| null | Returns a value that represents the format code for the current range. |
| [GetOrientation](./Methods/GetOrientation.md) | [Angle](../Enumeration/Angle.md) | Returns the current range angle. |
| [GetPivotTable](./Methods/GetPivotTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns the ApiPivotTable object that represents the pivot table report containing the upper-left corner of the specified range. |
| [GetRow](./Methods/GetRow.md) | number | Returns a row number for the selected cell. |
| [GetRowHeight](./Methods/GetRowHeight.md) | [pt](../Enumeration/pt.md) | Returns the row height value. |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row. |
| [GetText](./Methods/GetText.md) | string \| string[][] | Returns the text of the specified range. |
| [GetValue](./Methods/GetValue.md) | string \| string[][] | Returns a value of the specified range. |
| [GetValue2](./Methods/GetValue2.md) | string \| string[][] | Returns the Value2 property (value without format) of the specified range. |
| [GetWorksheet](./Methods/GetWorksheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the Worksheet object that represents the worksheet containing the specified range. It will be available in the read-only mode. |
| [GetWrapText](./Methods/GetWrapText.md) | boolean | Returns the information about the wrapping cell style. |
| [Insert](./Methods/Insert.md) | None | Inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space. |
| [Merge](./Methods/Merge.md) | None | Merges the selected cell range into a single cell or a cell row. |
| [Paste](./Methods/Paste.md) | None | Pastes the Range object to the specified range. |
| [PasteSpecial](./Methods/PasteSpecial.md) | None | Pastes the Range object to the specified range using the special paste options. |
| [Replace](./Methods/Replace.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Replaces specific information to another one in a range. |
| [Select](./Methods/Select.md) | None | Selects the current range. |
| [SetAlignHorizontal](./Methods/SetAlignHorizontal.md) | boolean | Sets the horizontal alignment of the text in the current cell range. |
| [SetAlignVertical](./Methods/SetAlignVertical.md) | boolean | Sets the vertical alignment of the text in the current cell range. |
| [SetAutoFilter](./Methods/SetAutoFilter.md) | None | Adds an AutoFilter to the current range. |
| [SetBold](./Methods/SetBold.md) | None | Sets the bold property to the text characters in the current cell or cell range. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border to the cell / cell range with the parameters specified. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | None | Sets the width of all the columns in the current range.\ One unit of column width is equal to the width of one character in the Normal style.\ For proportional fonts, the width of the character 0 (zero) is used. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the background color to the current cell range with the previously created color object.\ Sets 'No Fill' when previously created color object is null. |
| [SetFontColor](./Methods/SetFontColor.md) | None | Sets the text color to the current cell range with the previously created color object. |
| [SetFontName](./Methods/SetFontName.md) | None | Sets the specified font family as the font name for the current cell range. |
| [SetFontSize](./Methods/SetFontSize.md) | None | Sets the font size to the characters of the current cell range. |
| [SetHidden](./Methods/SetHidden.md) | None | Sets the value hiding property. The specified range must span an entire column or row. |
| [SetItalic](./Methods/SetItalic.md) | None | Sets the italic property to the text characters in the current cell or cell range. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text. |
| [SetOffset](./Methods/SetOffset.md) | None | Sets the cell offset. |
| [SetOrientation](./Methods/SetOrientation.md) | None | Sets an angle to the current cell range. |
| [SetRowHeight](./Methods/SetRowHeight.md) | None | Sets the row height value. |
| [SetSort](./Methods/SetSort.md) | None | Sorts the cells in the given range by the parameters specified in the request. |
| [SetStrikeout](./Methods/SetStrikeout.md) | None | Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents. |
| [SetUnderline](./Methods/SetUnderline.md) | None | Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character. |
| [SetValue](./Methods/SetValue.md) | boolean | Sets a value to the current cell or cell range. |
| [SetWrap](./Methods/SetWrap.md) | None | Specifies whether the words in the cell must be wrapped to fit the cell size or not. |
| [UnMerge](./Methods/UnMerge.md) | None | Splits the selected merged cell range into the single cells. |
