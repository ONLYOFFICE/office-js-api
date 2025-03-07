# SearchData

Properties to make search.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| After | [ApiRange](../ApiRange/ApiRange.md) | The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range. |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | Specifies whether the whole search text or any part of the search text is matched. |
| LookIn | [XlFindLookIn](../Enumeration/XlFindLookIn.md) | Search data type (formulas or values). |
| MatchCase | boolean | Case sensitive or not. The default value is "false". |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | Range search direction - next match or previous match. |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | Range search order - by rows or by columns. |
| What | string \| undefined | The data to search for. |
