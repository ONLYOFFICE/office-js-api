# ApiRange

Represents the ApiRange class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Row | number | Returns the row number for the selected cell. |
| Col | number | Returns the column number for the selected cell. |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the rows of the specified range. |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object that represents the columns of the specified range. |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents all the cells in the specified range or a specified cell. |
| Count | number | Returns the rows or columns count. |
| Address | string | Returns the range address. |
| Value | string | Returns a value from the first cell of the specified range or sets it to this cell. |
| Formula | string | Returns a formula from the first cell of the specified range or sets it to this cell. |
| Value2 | string | Returns the value2 (value without format) from the first cell of the specified range or sets it to this cell. |
| Text | string | Returns the text from the first cell of the specified range or sets it to this cell. |
| FontColor | [ApiColor](../ApiColor/ApiColor.md) | Sets the text color to the current cell range with the previously created color object. |
| Hidden | boolean | Returns or sets the value hiding property. |
| ColumnWidth | number | Returns or sets the width of all the columns in the specified range measured in points. |
| Width | number | Returns a value that represents the range width measured in points. |
| RowHeight | number | Returns or sets the height of the first row in the specified range measured in points. |
| Height | number | Returns a value that represents the range height measured in points. |
| FontSize | number | Sets the font size to the characters of the current cell range. |
| FontName | string | Sets the specified font family as the font name for the current cell range. |
| AlignVertical | 'center' \| 'bottom' \| 'top' \| 'distributed' \| 'justify' | Sets the text vertical alignment to the current cell range. |
| AlignHorizontal | 'left' \| 'right' \| 'center' \| 'justify' | Sets the text horizontal alignment to the current cell range. |
| Bold | boolean | Sets the bold property to the text characters from the current cell or cell range. |
| Italic | boolean | Sets the italic property to the text characters in the current cell or cell range. |
| Underline | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' | Sets the type of underline applied to the font. |
| Strikeout | boolean | Sets a value that indicates whether the contents of the current cell or cell range are displayed struck through. |
| WrapText | boolean | Returns the information about the wrapping cell style or specifies whether the words in the cell must be wrapped to fit the cell size or not. |
| FillColor | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns or sets the background color of the current cell range. |
| NumberFormat | string | Sets a value that represents the format code for the object. |
| MergeArea | [ApiRange](../ApiRange/ApiRange.md) | Returns the cell or cell range from the merge area. |
| Worksheet | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the ApiWorksheet object that represents the worksheet containing the specified range. |
| DefName | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object. |
| Comments | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns the ApiComment collection that represents all the comments from the specified worksheet. |
| Orientation | 'xlDownward' \| 'xlHorizontal' \| 'xlUpward' \| 'xlVertical' | Sets an angle to the current cell range. |
| Areas | [ApiAreas](../ApiAreas/ApiAreas.md) | Returns a collection of the areas. |
| Characters | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string. |
| PivotTable | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns the ApiPivotTable object that represents the pivot table report containing the upper-left corner of the specified range. |
## Methods

- [GetClassType](./Methods/GetClassType.md)
- [GetRow](./Methods/GetRow.md)
- [GetCol](./Methods/GetCol.md)
- [Clear](./Methods/Clear.md)
- [GetRows](./Methods/GetRows.md)
- [GetCols](./Methods/GetCols.md)
- [End](./Methods/End.md)
- [GetCells](./Methods/GetCells.md)
- [SetOffset](./Methods/SetOffset.md)
- [GetAddress](./Methods/GetAddress.md)
- [GetCount](./Methods/GetCount.md)
- [GetValue](./Methods/GetValue.md)
- [SetValue](./Methods/SetValue.md)
- [GetFormula](./Methods/GetFormula.md)
- [GetValue2](./Methods/GetValue2.md)
- [GetText](./Methods/GetText.md)
- [SetFontColor](./Methods/SetFontColor.md)
- [GetHidden](./Methods/GetHidden.md)
- [SetHidden](./Methods/SetHidden.md)
- [GetColumnWidth](./Methods/GetColumnWidth.md)
- [SetColumnWidth](./Methods/SetColumnWidth.md)
- [GetRowHeight](./Methods/GetRowHeight.md)
- [SetRowHeight](./Methods/SetRowHeight.md)
- [SetFontSize](./Methods/SetFontSize.md)
- [SetFontName](./Methods/SetFontName.md)
- [SetAlignVertical](./Methods/SetAlignVertical.md)
- [SetAlignHorizontal](./Methods/SetAlignHorizontal.md)
- [SetBold](./Methods/SetBold.md)
- [SetItalic](./Methods/SetItalic.md)
- [SetUnderline](./Methods/SetUnderline.md)
- [SetStrikeout](./Methods/SetStrikeout.md)
- [SetWrap](./Methods/SetWrap.md)
- [GetWrapText](./Methods/GetWrapText.md)
- [SetFillColor](./Methods/SetFillColor.md)
- [GetFillColor](./Methods/GetFillColor.md)
- [GetNumberFormat](./Methods/GetNumberFormat.md)
- [SetNumberFormat](./Methods/SetNumberFormat.md)
- [SetBorders](./Methods/SetBorders.md)
- [Merge](./Methods/Merge.md)
- [UnMerge](./Methods/UnMerge.md)
- [ForEach](./Methods/ForEach.md)
- [AddComment](./Methods/AddComment.md)
- [GetWorksheet](./Methods/GetWorksheet.md)
- [GetDefName](./Methods/GetDefName.md)
- [GetComment](./Methods/GetComment.md)
- [Select](./Methods/Select.md)
- [GetOrientation](./Methods/GetOrientation.md)
- [SetOrientation](./Methods/SetOrientation.md)
- [SetSort](./Methods/SetSort.md)
- [Delete](./Methods/Delete.md)
- [Insert](./Methods/Insert.md)
- [AutoFit](./Methods/AutoFit.md)
- [GetAreas](./Methods/GetAreas.md)
- [Copy](./Methods/Copy.md)
- [Cut](./Methods/Cut.md)
- [Paste](./Methods/Paste.md)
- [PasteSpecial](./Methods/PasteSpecial.md)
- [GetPivotTable](./Methods/GetPivotTable.md)
- [Find](./Methods/Find.md)
- [FindNext](./Methods/FindNext.md)
- [FindPrevious](./Methods/FindPrevious.md)
- [Replace](./Methods/Replace.md)
- [GetCharacters](./Methods/GetCharacters.md)
- [SetAutoFilter](./Methods/SetAutoFilter.md)
