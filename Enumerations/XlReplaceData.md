# XlReplaceData

The data used to make search and replace.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| What | Required | String &#124; undefined | The data to search for. |
| Replacement | Required | String | The replacement string. |
| LookAt | Required | [XlLookAt](./XlLookAt.md) | Specifies whether the whole search text or any part of the search text is matched. |
| SearchOrder | Required | [XlSearchOrder](./XlSearchOrder.md) | Range search order - by rows or by columns. |
| SearchDirection  | Required| [XlSearchDirection](./XlSearchDirection.md) | Range search direction - next match or previous match. |
| MatchCase | Optional | Boolean | Case sensitive or not. The default value is "false". |
| ReplaceAll | Optional | Boolean | Specifies if all the found data will be replaced or not. The default value is "true". |

## Example

This example replaces specific information to another one in a range.

```javascript
oRange.Replace( { What: "200", Replacement: "0", LookAt: "xlWhole", SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true, ReplaceAll: true } );
```