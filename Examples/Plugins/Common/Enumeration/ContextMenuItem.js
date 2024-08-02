var aContextMenuItems = function getContextMenuItems() {
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
		this.executeMethod('AddContextMenuItem', [aContextMenuItems]);
});