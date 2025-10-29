const addOleToPresentation = function () {
	const presentation = Api.GetPresentation();
	const slide = presentation.GetSlideByIndex(0);
	const oleObject = Api.CreateOleObject(
		'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
		130 * 36000, 90 * 36000,
		'https://youtu.be/SKGz4pmnpgY',
		'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
	);
	slide.AddObject(oleObject);

	return Api.GetPresentation().GetSlideByIndex(0).GetAllOleObjects()[0].Drawing.GetId();
};
Asc.plugin.callCommand(addOleToPresentation, false, true, (id) => {
	console.log('We added OLE object with id: ' + id);
	Asc.plugin.executeMethod('RemoveOleObject', [id]);
	console.log('We removed OLE object with id: ' + id);
});
