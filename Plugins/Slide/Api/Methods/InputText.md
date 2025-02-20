# InputText

Inserts text into the document.

## Syntax

```javascript
expression.InputText(text, textReplace);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | A string value that specifies the text to be inserted into the document. |
| textReplace | Required | string |  | A string value that specifies the text to be replaced with a new text. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-pptx
window.Asc.plugin.executeMethod ("InputText", ["ONLYOFFICE Plugins", "ONLYOFFICE for developers"]);
```
