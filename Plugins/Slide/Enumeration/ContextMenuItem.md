# ContextMenuItem

The context menu item.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | The item ID. |
| text | string | The item text. |
| data | string | The item data (this data will be sent to the click event callback). |
| disabled | boolean | Specifies if the current item is disabled or not. |
| icons | string | The item icons (see the plugins &#123;@link /plugin/config config&#125; documentation). |
| items | [ContextMenuItem[]](../../Enumeration/ContextMenuItem.md) | An array containing the context menu items for the current item. |
## Type

Object



## Example

```javascript
var aContextMenuItems = function getContextMenuItems() &#123;
	let settings = &#123;
		guid: window.Asc.plugin.guid,
		items: [
			&#123;
				id : 'onConvert',
				text : getMessage('Convert to Markdown or HTML')
			&#125;
		]
	&#125;;
	return settings;
&#125;;

window.Asc.plugin.attachEvent('onContextMenuShow', function(options) &#123;
	if (!options) return;

	if (options.type === 'Selection' || options.type === 'Target')
		this.executeMethod('AddContextMenuItem', [aContextMenuItems]);
&#125;);
