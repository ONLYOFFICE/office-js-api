# SetAlignHorizontal

Sets the horizontal alignment of the text in the current cell range.

## Syntax

expression.SetAlignHorizontal(sAlignment);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlignment | Required | 'left' &#124; 'right' &#124; 'center' &#124; 'justify' |  | The horizontal alignment that will be applied to the cell contents. |

## Returns

boolean

## Example

This example sets the horizontal alignment of the text in the cell range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");
```
