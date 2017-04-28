$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		button.toggleClass("active");

		$(".filter.active").each(function () {
			var this_filter = $(this);
			var filter = this_filter.data("filter");



			if (filter === "all") {
				$(".item").addClass("active");
			} else {
				$("." + filter).addClass("active");
			}
			if (filter === "reset") {
				$(".item").removeClass("active");
			}


		});
	});
});
