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