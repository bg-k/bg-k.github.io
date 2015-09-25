$(function() {// Major feature activation
	$.pjax({
		area: '#pjax-main',
		load: {
			head: 'base, meta, link',
			css: true,
			script: true
		},
    head: 'base, meta, link',
    css: true,
    script: true,
		cache: {
			click: true, submit: true, popstate: true,
			get: true, post: false
		},
		redirect: false,
		scope: {
			search: ['/search/'],
			$search: { form: 'form:not([method])' },
			'/': ['/', '#search', '!/contact/']
		}
	});
 
	// 6 events and 30 callbacks exists.
	$(document).bind('pjax:render', function() {
		$('#pjax-main').attr({
			'class': 'fadeInUp'
			});
		});
});