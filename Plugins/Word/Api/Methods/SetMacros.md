# SetMacros

Sets macros to the document.

## Syntax

```javascript
expression.SetMacros(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [Macros](../../Enumeration/Macros.md) |  | The *Macros* object containing the data about all the macros from the document. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("SetMacros", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
