# SetStrikeout

Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current cell / cell range are displayed struck through. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the contents of the cell is displayed with a single horizontal line through the center of the contents.

```javascript editor-xlsx
// How to add strikeout to the cell value.

// Get a range and add strikeout to its text.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Strickout text");
oWorksheet.GetRange("A2").SetStrikeout(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
```
