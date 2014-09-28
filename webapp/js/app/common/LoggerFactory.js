/*
 * Factory to get Logger instances.
 */
define(function() {
	// constructor
	var Logger = function(name) {
		this.name = name;
	};

	var _convertArgs = function() {
		var args = arguments[0];
		args[0] = '[' + this.name + '] ' + args[0];
		return args;
	};

	Logger.prototype.log = function() {
		var args = _convertArgs.call(this, arguments);
		console.log.apply(console, args);
	};
	Logger.prototype.info = function() {
		var args = _convertArgs.call(this, arguments);
		console.info.apply(console, args);
	};
	Logger.prototype.debug = function() {
		var args = _convertArgs.call(this, arguments);
		console.debug.apply(console, args);
	};
	Logger.prototype.warn = function() {
		var args = _convertArgs.call(this, arguments);
		console.warn.apply(console, args);
	};
	Logger.prototype.error = function() {
		var args = _convertArgs.call(this, arguments);
		console.error.apply(console, args);
	};

	return {
		getLogger: function(name) {
			return new Logger(name);
		}
	}

});
