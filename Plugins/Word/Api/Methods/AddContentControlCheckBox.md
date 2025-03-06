# AddContentControlCheckBox

Adds an empty content control checkbox to the document.

## Syntax

```javascript
expression.AddContentControlCheckBox(checkBoxPr, commonPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | Optional | [ContentControlCheckBoxProperties](../../Enumeration/ContentControlCheckBoxProperties.md) | &#123;&#125; | The content control checkbox properties. |
| commonPr | Optional | [ContentControlProperties](../../Enumeration/ContentControlProperties.md) | &#123;&#125; | The common content control properties. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("AddContentControlCheckBox", [
    {
        "Checked" : false,
        "CheckedSymbol" : 9756,
        "UncheckedSymbol" : 9744
    },
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
