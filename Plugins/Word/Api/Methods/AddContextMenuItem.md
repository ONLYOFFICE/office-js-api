# AddContextMenuItem

Adds an item to the context menu.

## Syntax

```javascript
expression.AddContextMenuItem(items);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | Required | [ContextMenuItem[]](../../Enumeration/ContextMenuItem.md) |  | An array containing the context menu items. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.attachEvent('onContextMenuShow', function(options) {
	if (!options) return;

	if (options.type === 'Selection' || options.type === 'Target')
		this.executeMethod('AddContextMenuItem', [getContextMenuItems()]);
});
```
