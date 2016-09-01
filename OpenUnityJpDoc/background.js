chrome.browserAction.onClicked.addListener(function()
{
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.match(/^file.*unity/i)) {
			var newurl = tab.url.replace(/^file.*unity.*\/en\//i, 'http://docs.unity3d.com/ja/current/');
			chrome.tabs.update({
				url: newurl
			});
		}
		else if (tab.url.match(/^(?!.*\/ja\/).*(?=http:\/\/docs\.unity3d\.com\/ScriptReference).*$/i))
		{
			var newurl = tab.url.replace(/^http:\/\/docs\.unity3d\.com\/S/i, 'http://docs.unity3d.com/ja/current/S');
			chrome.tabs.update({
				url: newurl
			});
		}
	});
});

