$(function() {
	$('.modalButton').on('click', function() {
	  $(".modal").addClass('visible');
	});

	$(".closeModal").on('click', function() {
		$('.modal').removeClass('visible');
	});
});