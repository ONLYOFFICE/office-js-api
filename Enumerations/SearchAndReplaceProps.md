# SearchAndReplaceProps

description

## Type

Object

## Properties

| **Name**  | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| searchString | Required | String | Search string. |
| replaceString | Required | String | Replacement string. |
| matchCase | Optional | String | Case sensitive or not. Default value is "true". |

## Example

This example replaces text "first" to the text "second".

```javascript
oDocument.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```