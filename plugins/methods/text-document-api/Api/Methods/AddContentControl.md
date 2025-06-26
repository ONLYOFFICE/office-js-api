# AddContentControl

Adds an empty content control to the document.

## Syntax

```javascript
expression.AddContentControl(type, commonPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ContentControlType](../../Enumeration/ContentControlType.md) |  | A numeric value that specifies the content control type. It can have one of the following values: -**1** (block), -**2** (inline), -**3** (row), or -**4** (cell). |
| commonPr | Optional | [ContentControlProperties](../../Enumeration/ContentControlProperties.md) | &#123;&#125; | The common content control properties. |

## Returns

[ContentControl](../../Enumeration/ContentControl.md)

## Example

```javascript
window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
