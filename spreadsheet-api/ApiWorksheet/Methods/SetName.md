# SetName

Sets a name to the current active sheet.

## Syntax

```javascript
expression.SetName(sName);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name which will be displayed for the current sheet at the sheet tab. |

## Returns

This method doesn't return any data.

## Example

This example sets a name to the active sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.SetName("sheet 1");
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Worksheet name: ");
worksheet.GetRange("A1").AutoFit(false, true);
worksheet.GetRange("B1").SetValue(name);
```
