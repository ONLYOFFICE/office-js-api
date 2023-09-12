# Name

Returns or sets a name of the active sheet.

## Syntax

expression.Name; &#124; expression.Name = sName;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The name which will be displayed for the current sheet at the sheet tab. |

## Returns

String

## Example

This example sets a name to the active sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.Name = "sheet 1";
var sName = oWorksheet.Name;
oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
oWorksheet.GetRange("A1").AutoFit(false, true);
oWorksheet.GetRange("B1").SetValue(sName);
builder.SaveFile("xlsx", "Name.xlsx");
builder.CloseFile();
```