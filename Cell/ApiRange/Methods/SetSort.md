# SetSort

Sorts the cells in the given range by the parameters specified in the request.

## Syntax

expression.SetSort(key1, sSortOrder1, key2, sSortOrder2, key3, sSortOrder3, sHeader, sOrientation);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| key1 | Required | [ApiRange](../ApiRange.md) &#124; String | First sort field. |
| sSortOrder1 | Required | [SortOrder](../../../Enumerations/SortOrder.md) | The sort order for the values specified in Key1. |
| key2 | Required | [ApiRange](../ApiRange.md) &#124; String | Second sort field. |
| sSortOrder2 | Required | [SortOrder](../../../Enumerations/SortOrder.md) | The sort order for the values specified in Key2. |
| key3 | Required | [ApiRange](../ApiRange.md) &#124; String | Third sort field. |
| sSortOrder3 | Required | [SortOrder](../../../Enumerations/SortOrder.md) | The sort order for the values specified in Key3. |
| sHeader | Required | [SortHeader](../../../Enumerations/SortHeader.md) | Specifies whether the first row contains header information. |
| sOrientation | Required | [SortOrientation](../../../Enumerations/SortOrientation.md) | Specifies if the sort should be by row (default) or column. |

## Returns

This method doesn't return any data.

## Example

This example sorts the cells in the given range by the parameters specified in the request.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue(2015);
oWorksheet.GetRange("A3").SetValue(2018);
oWorksheet.GetRange("A4").SetValue(2014);
oWorksheet.GetRange("A5").SetValue(2010);
oWorksheet.GetRange("B1").SetValue(150);
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(260);
oWorksheet.GetRange("B4").SetValue(120);
oWorksheet.GetRange("B5").SetValue(100);
oWorksheet.GetRange("C1").SetValue("C");
oWorksheet.GetRange("C2").SetValue("B");
oWorksheet.GetRange("C3").SetValue("A");
oWorksheet.GetRange("C4").SetValue("G");
oWorksheet.GetRange("C5").SetValue("E");
oWorksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
builder.SaveFile("xlsx", "SetSort.xlsx");
builder.CloseFile();
```