# XlFindLookIn

Search data type (formulas or values).

## Type

String

## Properties

- "xlFormulas" 
- "xlValues"

## Example

This example specify that the whole text match will be searched in the range.

```javascript
var oSearchRange = oRange.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```