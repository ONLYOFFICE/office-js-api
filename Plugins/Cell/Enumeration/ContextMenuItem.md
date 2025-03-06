# ContextMenuItem

The context menu item.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | string | The item data (this data will be sent to the click event callback). |
| disabled | boolean | Specifies if the current item is disabled or not. |
| icons | string | The item icons (see the plugins [config](https://api.onlyoffice.com/docs/plugin-and-macros/structure/manifest/) documentation). |
| id | string | The item ID. |
| items | [ContextMenuItem](../Enumeration/ContextMenuItem.md)[] | An array containing the context menu items for the current item. |
| text | string | The item text. |
## Type

Object



## Example

```javascript
let contextMenuItems = function getContextMenuItems() {
	let settings = {
		guid: window.Asc.plugin.guid,
		items: [
			{
				id : 'onConvert',
				text : getMessage('Convert to Markdown or HTML')
			}
		]
	};
	return settings;
};

window.Asc.plugin.attachEvent('onContextMenuShow', function(options) {
	if (!options) return;

	if (options.type === 'Selection' || options.type === 'Target')
		this.executeMethod('AddContextMenuItem', [contextMenuItems]);
});
```
