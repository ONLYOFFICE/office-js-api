# Find

Finds specific information in the current range.

## Syntax

expression.Find(What, After, LookIn, LookAt, SearchOrder, SearchDirection, MatchCase);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| What | Required | string | undefined |  | The data to search for. |
| After | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range. |
| LookIn | Required | [XlFindLookIn](../../Enumeration/XlFindLookIn.md) |  | Search data type (formulas or values). |
| LookAt | Required | [XlLookAt](../../Enumeration/XlLookAt.md) |  | Specifies whether the whole search text or any part of the search text is matched. |
| SearchOrder | Required | [XlSearchOrder](../../Enumeration/XlSearchOrder.md) |  | Range search order - by rows or by columns. |
| SearchDirection | Required | [XlSearchDirection](../../Enumeration/XlSearchDirection.md) |  | Range search direction - next match or previous match. |
| MatchCase | Required | boolean |  | Case sensitive or not. The default value is "false". |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) | null

## Example

This example finds specific information in the range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("A4").SetValue("Cost price");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("B4").SetValue(50);
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(120);
oWorksheet.GetRange("D2").SetValue(200);
oWorksheet.GetRange("D3").SetValue(200);
oWorksheet.GetRange("D4").SetValue(160);
var oRange = oWorksheet.GetRange("A2:D4");
var oSearchData = {
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
};
var oSearchRange = oRange.Find(oSearchData);
oSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
