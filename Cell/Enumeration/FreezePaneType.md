# FreezePaneType

Specifies a type of freeze panes.

## Type

Enumeration

## Values

- "row"
- "column"
- "cell"
- null


## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
```
