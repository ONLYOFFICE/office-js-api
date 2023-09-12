# AddDefName

Adds a new name to the current worksheet.

## Syntax

expression.AddDefName(sName, sRef, isHidden);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The range name. |
| sRef | Required | String | Must contain the sheet name, followed by sign ! and a range of cells. Example: "Sheet1!$A$1:$B$2". |
| isHidden | Required | Boolean | Defines if the range name is hidden or not. |

## Returns

Boolean (returns false if sName or sRef are invalid)

## Example

This example adds a new name to the worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oWorksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
builder.SaveFile("xlsx", "AddDefName.xlsx");
builder.CloseFile();
```