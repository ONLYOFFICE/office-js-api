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
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
