# CloseWindow

Closes the plugin modal window.

## Syntax

```javascript
expression.CloseWindow(frameId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frameId | Required | string |  | The frame ID. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-pptx
window.Asc.plugin.button = function(id, windowId) {
	if (!modalWindow)
		return;

	if (windowId) {
		switch (id) {
			case -1:
			default:
				window.Asc.plugin.executeMethod('CloseWindow', [windowId]);
		}
	}
};
```
