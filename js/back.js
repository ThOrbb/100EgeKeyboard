chrome.tabs.onUpdated.addListener(function(a, b, tab) {

	var EgeReg = new RegExp("^(http|https)\://100ege.ru/groups\?");
	if(EgeReg.test(tab.url))
	{
		if(b.status=="complete") { //после полной загрузки страницы встроить кнопку (код лежит в js/YoutubeToYCM.js)
			document.write(11);
			//var fram=document.getElementsByClassName("full_screen")[0].childNodes[0];
			//alert(fram);
			//chrome.tabs.executeScript(tab.id, {file: "js/core.js", runAt: "document_end"});
		}
	}
});