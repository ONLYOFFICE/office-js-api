# UpdateContextMenuItem

Updates an item in the context menu with the specified items.

## Syntax

```javascript
expression.UpdateContextMenuItem(items);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | Required | [ContextMenuItem[]](../../Enumeration/ContextMenuItem.md) |  | An array containing the context menu items for the current item. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.attachEvent('onContextMenuShow', function(options) {
	if (!options) return;

	if (options.type === 'Selection' || options.type === 'Target')
		this.executeMethod('UpdateContextMenuItem', [getContextMenuItems()]);
});
```
