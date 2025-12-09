$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onTranslate: event => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: event => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Популярные категории - карусель
	$('.popular_cats .carousel').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		items: 15,
		margin: 5,
		autoWidth: true,
	})


	// Слайдер в тексте
	$('.text_block .text_slider').owlCarousel({
		items: 1,
		margin: 20,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 750
	})


	// Нам доверяют
	$('.partners .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				items: 3,
				margin: 20
			},
			1024: {
				items: 4,
				margin: 20
			},
			1320: {
				items: 5,
				margin: 20
			}
		}
	})


	// Страница категории
	$('.category_info .models .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 2,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 5
			},
			1024: {
				items: 7
			}
		}
	})


	// Карусель товаров
	$('.products .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			480: {
				items: 2,
				margin: 20
			},
			768: {
				items: 3,
				margin: 20
			},
			1024: {
				items: 4,
				margin: 20
			},
			1320: {
				items: 5,
				margin: 20
			}
		},
		onInitialized: event => {
			setTimeout(() => {
				productHeight($(event.target), $(event.target).find('.slide').length)

				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() * 0.5))
			}, 100)
		},
		onResized: event => {
			setTimeout(() => {
				productHeight($(event.target), $(event.target).find('.slide').length)

				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() * 0.5))
			}, 100)
		}
	})


	// Сравнение товаров
	$('.compare_info .products.slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		margin: 20,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 3
			},
			1320: {
				items: 4
			}
		},
		onInitialized: event => {
			setTimeout(() => {
				productHeight($(event.target), $(event.target).find('.slide').length)

				compareHeight()

				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() * 0.5))
			}, 100)
		},
		onResized: event => {
			setTimeout(() => {
				productHeight($(event.target), $(event.target).find('.slide').length)

				compareHeight()

				$(event.target).find('.owl-nav button').css('top', ($(event.target).find('.thumb').outerHeight() * 0.5))
			}, 100)
		}
	})


	// КУПИ СВОЙ СКУТЕР
	if ($('.cats_wall').length) {
		let titleHeight = $('.cats_wall .cat:last').position().top + $('.cats_wall .cat:last .thumb img').height()
		$('.cats_wall .block_title').height(titleHeight)
	}


	// Боковая колонка - фильтр
	$('aside .mob_filter_btn').click(function (e) {
		e.preventDefault()

		!$(this).hasClass('active')
			? $(this).toggleClass('active').next().slideDown(300)
			: $(this).toggleClass('active').next().slideUp(200)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 10000,
		max: 200000,
		from: 25000,
		to: 125000,
		step: 100,
		onChange: function (data) {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .price_range input.to').val().replace(/\s+/g, ''))
		})
	})


	$motorRange = $('.filter #motor_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 300,
		from: 0,
		to: 200,
		step: 1,
		onChange: function (data) {
			$('.filter .motor_range input.from').val(data.from.toLocaleString())
			$('.filter .motor_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .motor_range .input').keyup(function () {
		$motorRange.update({
			from: parseFloat($('.filter .motor_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .motor_range input.to').val().replace(/\s+/g, ''))
		})
	})


	$yearRange = $('.filter #year_range').ionRangeSlider({
		type: 'double',
		min: 1990,
		max: 2020,
		from: 1999,
		to: 2020,
		step: 1,
		onChange: function (data) {
			$('.filter .year_range input.from').val(data.from)
			$('.filter .year_range input.to').val(data.to)
		}
	}).data("ionRangeSlider")

	$('.filter .year_range .input').keyup(function () {
		$yearRange.update({
			from: parseFloat($('.filter .year_range input.from').val()),
			to: parseFloat($('.filter .year_range input.to').val())
		})
	})


	$('.filter .reset_btn').click(function () {
		$('.filter input').removeAttr('checked')

		$priceRange.reset()
		$motorRange.reset()
		$yearRange.reset()
	})


	// Личный кабинет
	$('.lk_personal .edit_info_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.lk_personal')

		parent.find('.btns button').removeClass('active')
		$(this).addClass('active')

		parent.find('.pass_form, .info').hide()
		parent.find('.pesonal_form').fadeIn(300)
	})

	$('.lk_personal .pesonal_form .cancel_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.lk_personal')

		parent.find('.btns button').removeClass('active')

		parent.find('.pass_form, .info').hide()
		parent.find('.pesonal_form').fadeIn(300)
	})

	$('.lk_personal .edit_pass_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.lk_personal')

		parent.find('.btns button').removeClass('active')
		$(this).addClass('active')

		parent.find('.pesonal_form, .info').hide()
		parent.find('.pass_form').fadeIn(300)
	})

	$('.lk_personal .form .cancel_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.lk_personal')

		parent.find('.btns button').removeClass('active')

		parent.find('.pass_form, .pesonal_form').hide()
		parent.find('.info').fadeIn(300)
	})


	// Личный кабинет - история
	$('.lk_history .item .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		if (parent.hasClass('active')) {
			parent.removeClass('active').find('.data').slideUp(300)
		} else {
			$('.lk_history .data').slideUp(300)
			$('.lk_history .item').removeClass('active')

			parent.addClass('active').find('.data').slideDown(300)
		}
	})


	// Страница товара - Изображения товара
	$('.product_info .images .big .slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: false,
		smartSpeed: 500,
		dots: false,
		onTranslate: event => {
			let parent = $(event.target).closest('.images')

			parent.find('.thumbs .slide button').removeClass('active')
			parent.find('.thumbs .slide:eq(' + event.item.index + ') button').addClass('active')
		},
		responsive: {
			0: {
				nav: true
			},
			768: {
				nav: false
			}
		}
	})

	$('.product_info .images .thumbs .slider').bxSlider({
		mode: 'vertical',
		infiniteLoop: false,
		speed: 500,
		slideMargin: 20,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		pager: false
	})

	$('.product_info .images .thumbs .slide button').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.images')

		parent.find('.big .slider').trigger('to.owl.carousel', $(this).data('slide-index'))
	})


	// Товар в сравнение
	$('body').on('click', '.product .compare_btn, .product_info .data .compare_btn', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			// добавление
			$(this).toggleClass('active')
		} else {
			// удаление
			$(this).toggleClass('active')
		}
	})


	// Товар в избранное
	$('body').on('click', '.product .favorite_btn, .product_info .data .favorite_btn', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			// добавление
			$(this).toggleClass('active')
		} else {
			// удаление
			$(this).toggleClass('active')
		}
	})


	// Товар в корзину
	$('body').on('click', '.product .buy_btn, .product_info .data .buy_btn', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			// добавление
			$(this).toggleClass('active')
		} else {
			// удаление
			$(this).toggleClass('active')
		}
	})


	// Корзина - удаление товара
	$('.cart_info table td.delete button').click(function (e) {
		e.preventDefault()

		$(this).closest('tr').remove()
		updateCartPrice()
	})


	// Страница менеджера - категории
	$('.manager_page .cats .tabs .link button.arrow').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$('.manager_page .cats .tabs .link button.arrow').removeClass('active')
			$('.manager_page .cats .tabs .sub').slideUp(300)

			$(this).closest('.link').next().slideDown(300)
			$(this).addClass('active')
		} else {
			$(this).closest('.link').next().slideUp(300)
			$(this).removeClass('active')
		}
	})

	// Страница менеджера - дерево категорий
	$('.manager_page .cats .tree .link').click(function (e) {
		e.preventDefault()

		let level = $(this).closest('.level')

		if (!$(this).hasClass('active')) {
			level.find('> * > .link').removeClass('active')
			level.find('> * > .level').slideUp(300)

			$(this).next().slideDown(300)
			$(this).addClass('active')
		} else {
			$(this).next().slideUp(300)
			$(this).removeClass('active')
		}
	})


	// Страница менеджера - видео
	$('.manager_page .product_edit .add_video_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.video'),
			template = parent.find('.template').html()

		$(this).closest('.line').before(template)
	})

	$('body').on('click', '.product_edit .video .delete_btn', function (e) {
		e.preventDefault()

		$(this).closest('.line').remove()
	})


	// Страница менеджера - документация
	$('body').on('change', '.product_edit .documents input[type=file]', function (e) {
		let val = $(this).val(),
			parent = $(this).closest('.document')

		parent.find('.file_path').val(val)
	})

	$('.manager_page .product_edit .add_document_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.documents'),
			template = parent.find('.template').html()

		$(this).closest('.line').before(template)
	})

	$('body').on('click', '.product_edit .documents .delete_btn', function (e) {
		e.preventDefault()

		$(this).closest('.document').remove()
	})


	// Страница менеджера - ключи
	$('.keys_select').select2({
		closeOnSelect: false
	})

	$('.keys_select').on('select2:select select2:unselect', function (e) {
		let data = e.params.data,
			checkboxes = $('.manager_page .product_edit .keys .checks')

		checkboxes.find('#' + data.id).toggleClass('show')
	})

	$('.manager_page .product_edit .keys .checks .field > *').click(function (e) {
		e.preventDefault()

		let keys = []

		$(this).removeClass('show')

		$('.manager_page .product_edit .keys .checks .field > *').each(function () {
			if ($(this).hasClass('show')) {
				keys.push($(this).attr('id'))
			}
		})

		$('.keys_select').val(keys)
		$('.keys_select').trigger('change')
	})


	$('.manager_page .product_edit .add_models_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.keys'),
			template = parent.find('.template').html()

		$(this).closest('.field').before(template)
	})

	$('body').on('click', '.product_edit .keys .delete_btn', function (e) {
		e.preventDefault()

		$(this).closest('.columns').remove()
	})


	// Страница менеджера - всплывашка выбора модели
	$('#model_choose_modal .tree .link').click(function (e) {
		e.preventDefault()

		let level = $(this).closest('.level')

		if (!$(this).hasClass('active')) {
			level.find('> * > .link').removeClass('active')
			level.find('> * > .level').slideUp(300)

			$(this).next().slideDown(300)
			$(this).addClass('active')
		} else {
			$(this).next().slideUp(300)
			$(this).removeClass('active')
		}
	})


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false,
			afterShow: (instance, current) => {
				setTimeout(() => {
					$.fancybox.close()
				}, 3000)
			}
		})
	})


	// Моб. меню
	$('header .cats .dropdown .tabs_container.level1 .mob_tab_btn').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$('header .cats .dropdown .tabs_container.level1 .mob_tab_btn').removeClass('active')
			$('header .cats .dropdown .tabs_container.level1 > .tab_content').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		} else {
			$(this).removeClass('active').next().slideUp(300)
		}
	})


	// Премиум
	$('.products .list .product .big_slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: false,
		smartSpeed: 500,
		dots: false,
		onTranslate: event => {
			let parent = $(event.target).closest('.images')

			parent.find('.thumbs .slide button').removeClass('active')
			parent.find('.thumbs .slide:eq(' + event.item.index + ') button').addClass('active')
		},
		responsive: {
			0: {
				nav: true
			},
			768: {
				nav: false
			}
		}
	})

	$('.products .list .product .thumbs_slider').bxSlider({
		mode: 'vertical',
		infiniteLoop: false,
		speed: 500,
		slideMargin: 17,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		pager: false
	})

	$('.products .list .product .thumbs .slide button').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.images')

		parent.find('.big_slider').trigger('to.owl.carousel', $(this).data('slide-index'))
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').mouseenter(function() {
		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	$('.modal_cont').mouseleave(function() {
		console.log('sdgsdgsdg')
		$('.mini_modal_btn').removeClass('active')
		$('.mini_modal').removeClass('active')
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Страница товара - Альтернативные товары
	$('.product_info .data .alternative').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 6,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 4
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		}
	})


	// Поиск
	$('.search_categories .sub .btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.section')

		$(this).toggleClass('active')

		parent.find('.sub .btn.active').length
			? parent.find('.name').addClass('inactive')
			: parent.find('.name').removeClass('inactive')
	})

	$('.search_categories .sub .delete_btn').click(function(e) {
		e.preventDefault()

		$(this).prev().toggleClass('active')

		let parent = $(this).closest('.section')

		parent.find('.sub .btn.active').length
			? parent.find('.name').addClass('inactive')
			: parent.find('.name').removeClass('inactive')
	})

	$('.search_categories .name').click(function(e) {
		e.preventDefault()

		if (!$(this).hasClass('inactive')) {
			$(this).toggleClass('active').next().slideToggle(300)
		}
	})


	// City
	$('header .city .info .yes_btn').click(function(e) {
		e.preventDefault()

		$('header .city .info').fadeOut(200)
	})


	$('#city_modal .search form .input').keyup(function(e) {
		e.preventDefault()

		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $('#city_modal .search form .clear_btn').addClass('show')
				: $('#city_modal .search form .clear_btn').removeClass('show')
		})
	})


	$('#city_modal .search form .clear_btn').click(function(e) {
		e.preventDefault()

		$('#city_modal .search form .input').val('')
		$('#city_modal .search form .clear_btn').removeClass('show')
	})


	// Быстрый просмотр товара
	$('body').on('click', '.product .quike_view_btn', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: $(this).data('product'),
			type: 'ajax',
			touch: false,
			afterLoad: (instance, current) => {
				// Изображения товара
				$('.modal.product .product_info .images .big .slider').owlCarousel({
					items: 1,
					margin: 20,
					loop: false,
					smartSpeed: 500,
					dots: false,
					onTranslate: event => {
						let parent = $(event.target).closest('.images')

						parent.find('.thumbs .slide button').removeClass('active')
						parent.find('.thumbs .slide:eq(' + event.item.index + ') button').addClass('active')
					},
					responsive: {
						0: {
							nav: true
						},
						768: {
							nav: false
						}
					}
				})

				$('.modal.product .product_info .images .thumbs .slider').bxSlider({
					infiniteLoop: false,
					speed: 500,
					slideMargin: 16,
					minSlides: 3,
					maxSlides: 3,
					moveSlides: 1,
					pager: false
				})

				$('.modal.product .product_info .images .thumbs .slide button').click(function (e) {
					e.preventDefault()

					let parent = $(this).closest('.images')

					parent.find('.big .slider').trigger('to.owl.carousel', $(this).data('slide-index'))
				})
			}
		})
	})


	// Видео товара
	// $('body').on('click', '.product .video_icon', function (e) {
	// 	e.preventDefault()

	// 	$.fancybox.close()

	// 	$.fancybox.open({
	// 		src: $(this).data('video'),
	// 		type: 'ajax',
	// 		touch: false
	// 	})
	// })
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.advantages .row').each(function () {
		advantageHeight($(this), parseInt($(this).css('--advantages_count')))
	})

	$('.popular_compare .row').each(function () {
		popularCompareHeight($(this), parseInt($(this).css('--compares_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.advantages .row').each(function () {
		advantageHeight($(this), parseInt($(this).css('--advantages_count')))
	})

	$('.popular_compare .row').each(function () {
		popularCompareHeight($(this), parseInt($(this).css('--compares_count')))
	})


	// КУПИ СВОЙ СКУТЕР
	if ($('.cats_wall').length) {
		let titleHeight = $('.cats_wall .cat:last').position().top + $('.cats_wall .cat:last .thumb img').height()
		$('.cats_wall .block_title').height(titleHeight)
	}
})



// Выравнивание преимуществ
function advantageHeight(context, step) {
	let start = 0,
		finish = step,
		$items = context.find('.item')

	$items.find('.name').height('auto')

	$items.each(() => {
		setHeight($items.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}


// Выравнивание сравнений
function popularCompareHeight(context, step) {
	let start = 0,
		finish = step,
		$compares = context.find('.compare')

	$compares.find('.product .name').height('auto')

	$compares.each(() => {
		setHeight($compares.slice(start, finish).find('.product .name'))

		start = start + step
		finish = finish + step
	})
}


// Выравнивание сравнений
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name').height('auto')

	$products.each(() => {
		setHeight($products.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}


function compareHeight() {
	$('.compare_features .list > *').height('auto')
	$('.compare_info .product_features > *').height('auto')

	let productFeatures = $('.compare_info .product_features'),
		compareFeatures = $('.compare_features .item'),
		sizes = new Object()

	productFeatures.each(function () {
		$(this).find('.list > *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	compareFeatures.each(function () {
		if (sizes[$(this).index()]) {
			if ($(this).outerHeight() > sizes[$(this).index()]) {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		} else {
			sizes[$(this).index()] = $(this).outerHeight()
		}
	})

	$.each(sizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.list > *:eq(' + key + ')').innerHeight(data)
		})

		$('.compare_features .list > *:eq(' + key + ')').innerHeight(data)
	})
}