# SearchNext

Finds and selects the next occurrence of the text starting at the current position.

## Syntax

```javascript
expression.SearchNext(oProperties, isForward);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | Required | Object |  | An object which contains the search string. |
| oProperties.searchString | Required | string |  | The search string. |
| oProperties.matchCase | Optional | boolean | true | Case sensitive or not. |
| isForward | Optional | boolean | true | Search direction. |

## Returns

boolean

## Example

```javascript
window.Asc.plugin.executeMethod ("SearchNext", [
    {
        "searchString": "text",
        "matchCase": true
    },
    true
]);
```
