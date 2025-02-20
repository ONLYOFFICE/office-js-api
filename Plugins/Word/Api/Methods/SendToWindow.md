# SendToWindow

Sends a message to the plugin modal window.

## Syntax

```javascript
expression.SendToWindow(windowID, name, data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| windowID | Required | string |  | The frame ID. |
| name | Required | string |  | The event name. |
| data | Required | object |  | The event data. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("SendToWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", "onWindowMessage", {config: oConfig}]);
```
