# GetDefName

Returns the ApiName object by the worksheet name.

## Syntax

expression.GetDefName(sName);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The worksheet name. |

## Returns

[ApiName](../../ApiName/ApiName.md) | &#124; null (returns null if definition name doesn't exist)

## Example

This example shows how to get the ApiName object by the worksheet name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = oWorksheet.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());
builder.SaveFile("xlsx", "GetDefName.xlsx");
builder.CloseFile();
```