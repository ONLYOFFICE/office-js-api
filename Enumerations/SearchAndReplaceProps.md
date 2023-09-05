# SearchAndReplaceProps

description

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| searchString | String | Search string. |
| replaceString | String | Replacement string. |
| matchCase | String | Case sensitive or not. |

## Example

This example replaces text "first" to the text "second".

```javascript
oDocument.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```