# resizeWindow

Defines the method used to change the window size updating the minimum/maximum sizes.
💡 This method is used for visual modal plugins only.

## Syntax

```javascript
expression.resizeWindow(width, height, minW, minH, maxW, maxH);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | number |  | The window width. |
| height | Required | number |  | The window height. |
| minW | Required | number |  | The window minimum width. |
| minH | Required | number |  | The window minimum height. |
| maxW | Required | number |  | The window maximum width. |
| maxH | Required | number |  | The window maximum height. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.init = function() {
    this.resizeWindow(392, 147, 392, 147, 392, 147);
};
```
