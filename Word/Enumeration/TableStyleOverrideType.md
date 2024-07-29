# TableStyleOverrideType

This simple type specifies possible values for the table sections to which the current conditional formatting properties will be applied when this selected table style is used.

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

```javascript
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
```