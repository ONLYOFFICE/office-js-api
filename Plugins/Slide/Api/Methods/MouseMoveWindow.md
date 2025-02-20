# MouseMoveWindow

Sends an event to the plugin when the mouse button is moved inside the plugin iframe.

## Syntax

```javascript
expression.MouseMoveWindow(frameId, x, y);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frameId | Required | string |  | The frame ID. |
| x | Required | number |  | The X coordinate. |
| y | Required | number |  | The Y coordinate. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-pptx
window.Asc.plugin.executeMethod ("MouseMoveWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40]);
```
