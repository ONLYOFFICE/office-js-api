# ActivateWindow

Activates (moves forward) the plugin window/panel.

## Syntax

```javascript
expression.ActivateWindow(frameId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frameId | Required | string |  | The frame ID. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("ActivateWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}"]);
```
