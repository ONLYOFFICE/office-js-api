# SetCustomFunctions

Updates a library of local custom functions.

## Syntax

```javascript
expression.SetCustomFunctions(jsonString);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jsonString | Required | string |  | A library of custom functions in JSON format. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("SetCustomFunctions", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
