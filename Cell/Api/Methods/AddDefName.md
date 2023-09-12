# AddDefName

Adds a new name to a range of cells.

## Syntax

expression.AddDefName(sName, sRef, isHidden);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The range name. |
| sRef | Required | String | The reference to the specified rangeIt must contain the sheet name, followed by sign ! and a range of cells. Example: "Sheet1!$A$1:$B$2". |
| isHidden | Required | Boolean | Defines if the range name is hidden or not. |

## Returns

Boolean (returns false if sName or sRef are invalid)

## Example

This example adds a new name to a range of cells.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oWorksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
builder.SaveFile("xlsx", "AddDefName.xlsx");
builder.CloseFile();
```