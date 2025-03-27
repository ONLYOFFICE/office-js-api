# SetRowHeight

Sets the row height value.

## Syntax

```javascript
expression.SetRowHeight(nHeight);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nHeight | Required | [pt](../../Enumeration/pt.md) |  | The row height in the current range measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the row height value.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);
```
