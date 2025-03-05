# SetRefersTo

Sets a formula that the name is defined to refer to.

## Syntax

```javascript
expression.SetRefersTo(sRef);
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRef | Required | string |  | The range reference which must contain the sheet name, followed by sign ! and a range of cells. Example: "Sheet1!$A$1:$B$2". |

## Returns

This method doesn't return any data.

## Example

This example sets a formula that the name is defined to refer to.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
```
