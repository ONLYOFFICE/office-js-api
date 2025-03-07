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
| count | Optional | Number | 0 | Optional number of rows to freeze, or zero to unfreeze all rows. |

## Returns

This method doesn't return any data.

## Example

This example freezes the the top row.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);
```
