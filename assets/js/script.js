$(document).ready(function () {
	$('#OpenSidebar,#CloseSidebar').on('click', function () {
		$('#MobileSidebar').toggleClass('hidden');
	});
	$('#ProjectDropDownButton,#ProjectDropDownButtonMob').on(
		'click',
		function () {
			$('#ProjectDropDown,#ProjectDropDownMob').toggleClass('hidden');
		}
	);

	var swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		mousewheel: {
			releaseOnEdges: true,
		  },
		spaceBetween: 10,
		observer: true,
		observeParents: true,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
});

// $(document).ready(function(){
// 	$('#commercialTab').click(function(){
// 		$('#residentialTab').removeClass('bg-white border-gray-200 shadow-sm');
// 		$(this).addClass('bg-white border-gray-200 shadow-sm');
// 		$('#residential').hide();
// 		$('#commercial').show();
// 	});
// });

// $(document).ready(function(){
// 	$('#residentialTab').click(function(){
// 		$('#commercialTab').removeClass('bg-white border-gray-200 shadow-sm');
// 		$(this).addClass('bg-white border-gray-200 shadow-sm');
// 		$('#commercial').hide();
// 		$('#residential').show();
// 	});
// });
