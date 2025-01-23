# GetDefName

Returns the ApiName object by the worksheet name.

## Syntax

expression.GetDefName(defName);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| defName | Required | string |  | The worksheet name. |

## Returns

[ApiName](../../ApiName/ApiName.md) | null

## Example

This example shows how to get the ApiName object by the worksheet name.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = oWorksheet.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());
```
