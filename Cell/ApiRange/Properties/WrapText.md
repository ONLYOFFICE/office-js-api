# WrapText

Returns the information about the wrapping cell style or specifies whether the words in the cell must be wrapped to fit the cell size or not.

## Syntax

expression.WrapText; &#124; expression.WrapText = isWrap;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isWrap | Required | Boolean | Specifies if the words in the cell will be wrapped to fit the cell size. |

## Returns

Boolean

## Example

This example specifies whether the words in the cell must be wrapped to fit the cell size or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is the text wrapped to fit the cell size.");
oRange.WrapText = true;
oWorksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + oRange.GetWrapText());
builder.SaveFile("xlsx", "WrapText.xlsx");
builder.CloseFile();
```