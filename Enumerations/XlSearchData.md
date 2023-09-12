# XlSearchData

The search data used to make search.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| What | Required | String &#124; undefined | The data to search for. |
| After | Required | [ApiRange](../ApiRange.md) | The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range. |
| LookIn | Required | [XlFindLookIn](./XlFindLookIn.md) | Search data type (formulas or values). |
| LookAt | Required | [XlLookAt](./XlLookAt.md) | Specifies whether the whole search text or any part of the search text is matched. |
| SearchOrder | Require  | [XlSearchOrder](./XlSearchOrder.md) | Range search order - by rows or by columns. |
| SearchDirection | Required | [XlSearchDirection](./XlSearchDirection.md) | Range search direction - next match or previous match. |
| MatchCase | Optional | Boolean | Case sensitive or not. The default value is "false". |

## Example

This example specify that the whole text match will be searched in the range.

```javascript
var oSearchRange = oRange.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```