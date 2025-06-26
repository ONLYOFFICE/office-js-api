# AddContentControlList

Adds an empty content control list to the document.

## Syntax

```javascript
expression.AddContentControlList(type, List, commonPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ContentControlType](../../Enumeration/ContentControlType.md) |  | A numeric value that specifies the content control type. It can have one of the following values: -**1** (combo box), -**0** (dropdown list). |
| List | Optional | [ContentControlListElement](../../Enumeration/ContentControlListElement.md)[] |  | A list of the content control elements that consists of two items: -**Display** - an item that will be displayed to the user in the content control list, -**Value** - a value of each item from the content control list. |
| commonPr | Optional | [ContentControlProperties](../../Enumeration/ContentControlProperties.md) | &#123;&#125; | The common content control properties. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("AddContentControlList", [0,
    [
        {
            "Display": "Item1_D",
            "Value": "Item1_V"
        },
        {
            "Display": "Item2_D",
            "Value": "Item2_V"
        }
    ], 
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
