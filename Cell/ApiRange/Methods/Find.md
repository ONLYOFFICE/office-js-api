# Find

Finds specific information in the current range.

## Syntax

```javascript
expression.Find(What, After, LookIn, LookAt, SearchOrder, SearchDirection, MatchCase);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| What | Required | string \| undefined |  | The data to search for. |
| After | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range. |
| LookIn | Required | [XlFindLookIn](../../Enumeration/XlFindLookIn.md) |  | Search data type (formulas or values). |
| LookAt | Required | [XlLookAt](../../Enumeration/XlLookAt.md) |  | Specifies whether the whole search text or any part of the search text is matched. |
| SearchOrder | Required | [XlSearchOrder](../../Enumeration/XlSearchOrder.md) |  | Range search order - by rows or by columns. |
| SearchDirection | Required | [XlSearchDirection](../../Enumeration/XlSearchDirection.md) |  | Range search direction - next match or previous match. |
| MatchCase | Required | boolean |  | Case sensitive or not. The default value is "false". |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example finds specific information in the range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("A4").SetValue("Cost price");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(50);
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(120);
worksheet.GetRange("D2").SetValue(200);
worksheet.GetRange("D3").SetValue(200);
worksheet.GetRange("D4").SetValue(160);
let range = worksheet.GetRange("A2:D4");
let searchData = {
	What: "200",
	After: worksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
};
let oSearchRange = range.Find(searchData);
oSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
