# GetReferenceStyle

Returns the cell reference style.

## Syntax

```javascript
expression.GetReferenceStyle();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ReferenceStyle](../../Enumeration/ReferenceStyle.md)

## Example

This example gets reference style.

```javascript editor-xlsx
// Get style of a reference.

// Insert a reference style into the cell.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
