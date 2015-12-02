sap.designstudio.sdk.Component.subclass("com.sap.connectivity.dispatcher.Dispatcher", function() {

	var that = this;
	var _api="";
	var _paraList="[]";
	var _apiSignature="";
	var _domain="";
	var _visibility=true;

	this.init = function() {	
		this.$().append($("<div>Hide Me by Changing [Visibility] Property to false</div>"))
	};
	
	this.afterUpdate=function(){
		if(_visibility){
			this.$().removeClass("hideArea");
			this.$().addClass("visibleArea");
		}else{
			this.$().addClass("hideArea");
			this.$().removeClass("visibleArea");
		}
	}
	
	this.sendRequest=function(value){
		if(value!==undefined){
			try{
				eval(value);
			} catch(e) {
				alert(e.name+': '+e.message+'\nRequest Execution Failed!');
			} finally {
				return this;
			}
		}
	};
	
	this.visibility=function(value){
		if(value===undefined){
			return _visibility;
		}else{
			_visibility=value;
			return this;
		}
	}

	this.api = function(value) {
		if (value === undefined) {
			return _api;
		} else {
			if(value.indexOf('.')!=-1){
				alert('Top Level Object Denied!');
			}else{
				_api=value;
				return this;
			}
		}
	};
	
	this.paraList = function(value) {
		if (value === undefined) {
			return _paraList;
		} else {
			_paraList=value;
			return this;
		}
	};
});