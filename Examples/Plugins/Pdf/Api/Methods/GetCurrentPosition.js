let savedPosition = null;

window.Asc.plugin.executeMethod("GetCurrentPosition", [], function(position) {
	savedPosition = position;
});

function restorePosition() {
	if (savedPosition)
		window.Asc.plugin.executeMethod("GoToPage", [savedPosition.page, [savedPosition.x, savedPosition.y]]);
}
