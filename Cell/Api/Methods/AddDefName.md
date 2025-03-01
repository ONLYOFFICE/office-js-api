# AddDefName

Adds a new name to a range of cells.

## Syntax

```javascript
expression.AddDefName(sName, sRef, isHidden);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The range name. |
| sRef | Required | string |  | The reference to the specified range. It must contain the sheet name, followed by sign ! and a range of cells. Example: "Sheet1!$A$1:$B$2". |
| isHidden | Required | boolean |  | Defines if the range name is hidden or not. |

## Returns

boolean

## Example

This example adds a new name to a range of cells.

```javascript editor-xlsx
// How to name a range of cells.

// Name a range according its purpose.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oWorksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
```
