# FreezeRows

Freezes the top row or rows of the current worksheet.

## Syntax

```javascript
expression.FreezeRows(count);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | false | Optional number of rows to freeze, or zero to unfreeze all rows. |

## Returns

This method doesn't return any data.

## Example

This example freezes the the top row.

```javascript editor-xlsx
// How to freeze rows using their indices.

// Get freeze panes and freeze a row using its index.

var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeRows(1);
```
