# TableStyleOverrideType

This simple type specifies possible values for the table sections to which the current conditional formatting properties will be applied when this selected table style is used.\n-**"topLeftCell"** - specifies that the table formatting is applied to the top left cell.\n-**"topRightCell"** - specifies that the table formatting is applied to the top right cell.\n-**"bottomLeftCell"** - specifies that the table formatting is applied to the bottom left cell.\n-**"bottomRightCell"** - specifies that the table formatting is applied to the bottom right cell.\n-**"firstRow"** - specifies that the table formatting is applied to the first row.\n-**"lastRow"** - specifies that the table formatting is applied to the last row.\n-**"firstColumn"** - specifies that the table formatting is applied to the first column. Any subsequent row which is in *table header* ([ApiTableRowPr#SetTableHeader](../ApiTableRowPr/Methods/SetTableHeader.md)) will also use this conditional format.\n-**"lastColumn"** - specifies that the table formatting is applied to the last column.\n-**"bandedColumn"** - specifies that the table formatting is applied to odd numbered groupings of rows.\n-**"bandedColumnEven"** - specifies that the table formatting is applied to even numbered groupings of rows.\n-**"bandedRow"** - specifies that the table formatting is applied to odd numbered groupings of columns.\n-**"bandedRowEven"** - specifies that the table formatting is applied to even numbered groupings of columns.\n-**"wholeTable"** - specifies that the conditional formatting is applied to the whole table.

## Type

Enumeration

## Values

- "topLeftCell"
- "topRightCell"
- "bottomLeftCell"
- "bottomRightCell"
- "firstRow"
- "lastRow"
- "firstColumn"
- "lastColumn"
- "bandedColumn"
- "bandedColumnEven"
- "bandedRow"
- "bandedRowEven"
- "wholeTable"


## Example

This example applys the created style (set shadow) to the top left cell of the table.

```javascript editor-xlsx
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
```
