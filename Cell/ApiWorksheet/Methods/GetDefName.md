# GetDefName

Returns the ApiName object by the worksheet name.

## Syntax

```javascript
expression.GetDefName(defName);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| defName | Required | string |  | The worksheet name. |

## Returns

[ApiName](../../ApiName/ApiName.md) \| null

## Example

This example shows how to get the ApiName object by the worksheet name.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = worksheet.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
