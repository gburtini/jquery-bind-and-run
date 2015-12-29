/*
 * A very light library to clean up a simple pattern. Instead of writing
 * 	var fun = function() { }
 * 	jQuery("...").click(fun);
 * 	fun();
 *
 * This gives a function bindAndRun and a function onAndRun
 *  jQuery("...").bindAndRun("click", function() { });
 */

(function(jq) {
	jq.fn.extend({
		bindAndRun: function (hooks, fn) {
			jQuery(this).bind(hooks, fn);
			fn.call(this);
		},
		onAndRun: function(hooks, filter, fn) {
			jQuery(this).on(hooks, filter, fn);
			fn.call(this);
		}
	});
})(jQuery);
