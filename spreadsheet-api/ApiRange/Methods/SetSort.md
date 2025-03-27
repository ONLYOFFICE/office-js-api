# SetSort

Sorts the cells in the given range by the parameters specified in the request.

## Syntax

```javascript
expression.SetSort(key1, sSortOrder1, key2, sSortOrder2, key3, sSortOrder3, sHeader, sOrientation);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| key1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | First sort field. |
| sSortOrder1 | Required | [SortOrder](../../Enumeration/SortOrder.md) |  | The sort order for the values specified in Key1. |
| key2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | Second sort field. |
| sSortOrder2 | Required | [SortOrder](../../Enumeration/SortOrder.md) |  | The sort order for the values specified in Key2. |
| key3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | Third sort field. |
| sSortOrder3 | Required | [SortOrder](../../Enumeration/SortOrder.md) |  | The sort order for the values specified in Key3. |
| sHeader | Required | [SortHeader](../../Enumeration/SortHeader.md) |  | Specifies whether the first row contains header information. |
| sOrientation | Required | [SortOrientation](../../Enumeration/SortOrientation.md) |  | Specifies if the sort should be by row (default) or column. |

## Returns

This method doesn't return any data.

## Example

This example sorts the cells in the given range by the parameters specified in the request.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(2016);
worksheet.GetRange("A2").SetValue(2015);
worksheet.GetRange("A3").SetValue(2018);
worksheet.GetRange("A4").SetValue(2014);
worksheet.GetRange("A5").SetValue(2010);
worksheet.GetRange("B1").SetValue(150);
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(260);
worksheet.GetRange("B4").SetValue(120);
worksheet.GetRange("B5").SetValue(100);
worksheet.GetRange("C1").SetValue("C");
worksheet.GetRange("C2").SetValue("B");
worksheet.GetRange("C3").SetValue("A");
worksheet.GetRange("C4").SetValue("G");
worksheet.GetRange("C5").SetValue("E");
worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
