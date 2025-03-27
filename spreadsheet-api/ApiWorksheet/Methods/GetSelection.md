# GetSelection

Returns an object that represents the selected range.

## Syntax

```javascript
expression.GetSelection();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents the selected range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");
```
