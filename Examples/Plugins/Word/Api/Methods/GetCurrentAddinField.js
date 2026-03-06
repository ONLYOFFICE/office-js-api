window.Asc.plugin.executeMethod("GetCurrentAddinField", [], function(data){
	if (null === data) {
		console.log("No addin field at the current cursor position");
	} else {
		console.log("Current addin field:", data);
	}
});