# SetDisplayHeadings

Specifies whether the current sheet row/column headers must be displayed or not.

## Syntax

expression.SetDisplayHeadings(isDisplayed?);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isDisplayed | Optional | Boolean | Specifies whether the current sheet row/column headers must be displayed or not. Default value is "true". |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the sheet row/column headers must be displayed or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
oWorksheet.SetDisplayHeadings(false);
builder.SaveFile("xlsx", "SetDisplayHeadings.xlsx");
builder.CloseFile();
```