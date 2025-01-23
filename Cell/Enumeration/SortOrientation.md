# SortOrientation

Specifies if the sort should be by row or column.

## Type

Enumeration

## Values

- "xlSortColumns"
- "xlSortRows"


## Example

This example specify that the sort should be by column.

```javascript
worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
