# AddDefName

Adds a new name to the current worksheet.

## Syntax

```javascript
expression.AddDefName(sName, sRef, isHidden);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The range name. |
| sRef | Required | string |  | Must contain the sheet name, followed by sign ! and a range of cells.\nExample: "Sheet1!$A$1:$B$2". |
| isHidden | Required | boolean |  | Defines if the range name is hidden or not. |

## Returns

boolean

## Example

This example adds a new name to the worksheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
```
