# RemoveContentControl

Removes the currently selected content control retaining all its contents. The content control where the mouse cursor is currently positioned will be removed.

## Syntax

```javascript
expression.RemoveContentControl(InternalId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InternalId | Required | string |  | A unique internal identifier of the content control. |

## Returns

[ContentControlParentPr](../../Enumeration/ContentControlParentPr.md)

## Example

```javascript
window.buttonIDChangeState_click = undefined;
if (null == returnValue) {
    window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Lock" : 0, "Tag" : "{some text}"}]);
}
else {
    window.Asc.plugin.executeMethod ("RemoveContentControl", [returnValue]);
}
```
