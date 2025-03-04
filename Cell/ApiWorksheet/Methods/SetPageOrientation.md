# SetPageOrientation

Sets the page orientation.

## Syntax

```javascript
expression.SetPageOrientation(sPageOrientation);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPageOrientation | Required | [PageOrientation](../../Enumeration/PageOrientation.md) |  | The page orientation type. |

## Returns

This method doesn't return any data.

## Example

This example sets the page orientation.

```javascript editor-xlsx
// How to change a page orientation.

// Set a page orientation and display it in the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPageOrientation("xlPortrait");
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
```
