# Replace

Replaces specific information to another one in a range.

## Syntax

```javascript
expression.Replace(What, Replacement, LookAt, SearchOrder, SearchDirection, MatchCase, ReplaceAll);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| What | Required | string \| undefined |  | The data to search for. |
| Replacement | Required | string |  | The replacement string. |
| LookAt | Required | [XlLookAt](../../Enumeration/XlLookAt.md) |  | Specifies whether the whole search text or any part of the search text is matched. |
| SearchOrder | Required | [XlSearchOrder](../../Enumeration/XlSearchOrder.md) |  | Range search order - by rows or by columns. |
| SearchDirection | Required | [XlSearchDirection](../../Enumeration/XlSearchDirection.md) |  | Range search direction - next match or previous match. |
| MatchCase | Required | boolean |  | Case sensitive or not. The default value is "false". |
| ReplaceAll | Required | boolean |  | Specifies if all the found data will be replaced or not. The default value is "true". |

## Returns

This method doesn't return any data.

## Example

This example replaces specific information to another one in a range.

```javascript editor-xlsx
// How to replace one data value with another in a range.

// Create a range and replace its data field value with a new one.

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
var oReplaceData = {
	What: "200", 
	Replacement: "0",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true,
	ReplaceAll: true
};
oRange.Replace(oReplaceData);
```
