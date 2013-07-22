$(document).ready(function() {
	var viewModel = {
		name: ko.observable("Mike")
	};
 
	ko.applyBindings(viewModel);
	
	function viewModel() {
  		this.dayOfWeek = ko.observable('Sunday');
  		this.activity = ko.observable('rest');
	};
	ko.applyBindings(new viewModel());
	
});

