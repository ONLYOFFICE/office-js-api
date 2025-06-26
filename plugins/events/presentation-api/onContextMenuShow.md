# onContextMenuShow

The function called when the context menu has been shown.\
\
💡 If a plugin is listening for this event, it must call the &#123;@link /plugin/executeMethod/common/addcontextmenuitem AddContextMenuItem&#125; method (synchronously or not),\
because the editor waits for responses from all plugins before filling the context menu.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| options | [ContextMenuOptions](../../Enumeration/ContextMenuOptions.md) | Defines the context menu information. |

```javascript
window.Asc.plugin.attachEvent('onContextMenuShow', function(options) {
	if (!options) return;

	if (options.type === 'Selection' || options.type === 'Target')
		this.executeMethod('AddContextMenuItem', [getContextMenuItems()]);
});
```

