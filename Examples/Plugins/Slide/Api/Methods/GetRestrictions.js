window.Asc.plugin.executeMethod("GetRestrictions", [], function(restrictions) {
	if (restrictions & 0x80)
		console.log("The presentation cannot be changed");
});
