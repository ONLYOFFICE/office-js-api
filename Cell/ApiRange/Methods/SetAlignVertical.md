# SetAlignVertical

Sets the vertical alignment of the text in the current cell range.

## Syntax

expression.SetAlignVertical(sAligment);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAligment | Required | 'center' &#124; 'bottom' &#124; 'top' &#124; 'distributed' &#124; 'justify' |  | The vertical alignment that will be applied to the cell contents. |

## Returns

boolean

## Example

This example sets the vertical alignment of the text in the cell range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:D5");
oWorksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
oRange.SetAlignVertical("distributed");
```
