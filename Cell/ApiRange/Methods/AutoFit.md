# AutoFit

Changes the width of the columns or the height of the rows in the range to achieve the best fit.

## Syntax

```javascript
expression.AutoFit(bRows, bCols);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRows | Required | bool |  | Specifies if the width of the columns will be autofit. |
| bCols | Required | bool |  | Specifies if the height of the rows will be autofit. |

## Returns

This method doesn't return any data.

## Example

This example changes the width of the columns or the height of the rows in the range to achieve the best fit.

```javascript editor-xlsx
// How to set an autofit for width or height for a range.

// Get a range and apply autofit property.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is an example of the column width autofit.");
oRange.AutoFit(false, true);
```
