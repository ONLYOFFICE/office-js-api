# SortOrder

Specifies the sort order.

## Type

String

## Properties

- "xlAscending" 
- "xlDescending"

## Example

This example specify that the sort order for the values specified in "A1:A5" is ascending.

```javascript
oWorksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```