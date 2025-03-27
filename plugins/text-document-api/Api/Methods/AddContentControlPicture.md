# AddContentControlPicture

Adds an empty content control picture to the document.

## Syntax

```javascript
expression.AddContentControlPicture(commonPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| commonPr | Optional | [ContentControlProperties](../../Enumeration/ContentControlProperties.md) | &#123;&#125; | The common content control properties. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("AddContentControlPicture", [{"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
