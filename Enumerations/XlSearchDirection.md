# XlSearchDirection

Range search direction - next match or previous match.

## Type

type

## Properties

- "xlNext" 
- "xlPrevious"

## Example

This example specify that the whole text match will be searched in the range.

```javascript
var oSearchRange = oRange.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```