# TableStyleOverrideType

This simple type specifies possible values for the table sections to which the current conditional formatting properties will be applied when this selected table style is used.

## Type

String

## Properties

- "topLeftCell" - specifies that the table formatting is applied to the top left cell.
- "topRightCell" - specifies that the table formatting is applied to the top right cell.
- "bottomLeftCell" - specifies that the table formatting is applied to the bottom left cell.
- "bottomRightCell" - specifies that the table formatting is applied to the bottom right cell.
- "firstRow" - specifies that the table formatting is applied to the first row.
- "lastRow" - specifies that the table formatting is applied to the last row.
- "firstColumn" - specifies that the table formatting is applied to the first column. Any subsequent row which is in table header (ApiTableRowPr#SetTableHeader) will also use this conditional format.
- "lastColumn" - specifies that the table formatting is applied to the last column.
- "bandedColumn" - specifies that the table formatting is applied to odd numbered groupings of rows.
- "bandedColumnEven" - specifies that the table formatting is applied to even numbered groupings of rows.
- "bandedRow" - specifies that the table formatting is applied to odd numbered groupings of columns.
- "bandedRowEven" - specifies that the table formatting is applied to even numbered groupings of columns.
- "wholeTable" - specifies that the conditional formatting is applied to the whole table.

## Example

This example applys the created style (set shadow) to the top left cell of the table.

```javascript
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
```