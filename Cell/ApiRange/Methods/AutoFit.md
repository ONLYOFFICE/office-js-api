# AutoFit

Changes the width of the columns or the height of the rows in the range to achieve the best fit.

## Syntax

expression.AutoFit(bRows, bCols);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bRows | Required | Boolean | Specifies if the width of the columns will be autofit. |
| bCols | Required | Boolean | Specifies if the height of the rows will be autofit. |

## Returns

This method doesn't return any data.

## Example

This example changes the width of the columns or the height of the rows in the range to achieve the best fit.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is an example of the column width autofit.");
oRange.AutoFit(false, true);
builder.SaveFile("xlsx", "AutoFit.xlsx");
builder.CloseFile();
```