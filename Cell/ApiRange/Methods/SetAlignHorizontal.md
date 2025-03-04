# SetAlignHorizontal

Sets the horizontal alignment of the text in the current cell range.

## Syntax

```javascript
expression.SetAlignHorizontal(sAlignment);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlignment | Required | 'left' \| 'right' \| 'center' \| 'justify' |  | The horizontal alignment that will be applied to the cell contents. |

## Returns

boolean

## Example

This example sets the horizontal alignment of the text in the cell range.

```javascript editor-xlsx
// How to change the horizontal alignment of the cell content.

// Change the horizontal alignment of the ApiRange content to center.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");
```
