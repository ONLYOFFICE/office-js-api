# XlSearchOrder

Range search order - by rows or by columns.

## Type

String

## Properties

- "xlByRows" 
- "xlByColumns"

## Example

This example specify that the whole text match will be searched in the range.

```javascript
var oSearchRange = oRange.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```