# SearchAndReplace

Finds and replaces the text.

## Syntax

```javascript
expression.SearchAndReplace(oProperties);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | Required | Object |  | An object which contains the search and replacement strings. |
| oProperties.searchString | Required | string |  | The search string. |
| oProperties.replaceString | Required | string |  | The replacement string. |
| oProperties.matchCase | Optional | boolean | true | Case sensitive or not. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("SearchAndReplace", [
    {
        "searchString": "text1",
        "replaceString": "text2",
        "matchCase": true
    }
]);
```
