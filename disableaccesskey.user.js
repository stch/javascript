// ==UserScript==
// @name			Disable Accesskey
// @namespace		
// @description		When you edit on some form of a website with Mac OS X, the website specific accesskey is annoying if it overlaped with emacs like keybinding
// @include			http*
// ==/UserScript==

(function(){
	 var forEach = function(arr,fun,obj) {
		for(var i=0,l=arr.length;i<l;i++) fun.call(obj,arr[i],i,arr);
	 };

	 var removeAnnoyingAccessKey = function(targetNode){
		var annoyingAccessKey = 'abdefhknpt';
		var targetAccesskey = targetNode.getAttribute('accesskey');
		if(targetAccesskey && (annoyingAccessKey.search(targetAccesskey)) >= 0){
			targetNode.removeAttribute('accesskey');
		}
	 };

	 var suspiciousTags = ['a','area','input','textarea','button','label','legend'];
	 forEach(suspiciousTags, function(suspiciousTag){
			var targetNodes = document.body.getElementsByTagName(suspiciousTag);
			forEach(targetNodes,removeAnnoyingAccessKey);
			 // this is not work..
//			while(targetNodes.length){removeAnnoyingAccessKey(targetNodes.shift());};
		 });
})();