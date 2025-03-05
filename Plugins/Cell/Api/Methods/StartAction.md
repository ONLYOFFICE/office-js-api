# StartAction

Specifies the start action for long operations.

## Syntax

```javascript
expression.StartAction(type, description);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | number |  | A value which defines an action type which can take **0** if this is an *Information* action or **1** if this is a *BlockInteraction* action. |
| description | Required | string |  | A string value that specifies the description text for the start action of the operation. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-xlsx
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200););
});
```
