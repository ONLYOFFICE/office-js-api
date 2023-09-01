# GetDefName

Returns the ApiName object by the range name.

## Syntax

expression.GetDefName(defName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| defName | Required | String | The range name. |

## Returns

[ApiName](../../ApiName/ApiName.md)

## Example

This example shows how to get the ApiName object by the range name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());
builder.SaveFile("xlsx", "GetDefName.xlsx");
builder.CloseFile();
```