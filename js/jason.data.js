(function(jk, undefined) {

var Node = function(o) {
	this.data = o;
	this.prev = null;
	this.next = null;
};

/*
 * List
 */
jk.List = function() {
	var first = null,
		last = null,
		size = 0;
};

jk.List.prototype.add = function(o) {
	var node = new Node(o);
	if (this.last == null) {
		this.last = node;
		this.first = node;
		this.size = 1;
	} else {
		this.last.next = node;
		node.prev = this.last;
		this.last = node;
		this.size++;
	}
};

jk.List.prototype.get = function(index) {
	if (index >= this.size || index < 0) {
		return null;
	} else {
		var pointer = this.last;
		for (var i = this.size - 1; i > index; i--)
			pointer = pointer.prev;
		return pointer.data;
	}
};

jk.List.prototype.remove = function(o, comparer) {
	if (arguments.length == 1 &&
		typeof(arguments[0]) == "number") {
		if (this.size <= o || o < 0)
			return null;

		if (this.size == 1) {
			this.first = null;
			this.last = null;
			this.size = 0;
		} else {
			var pointer = this.last;
			for (var i = this.size - 1; i > o; i--)
				pointer = pointer.prev;
			if (pointer.prev != null)
				pointer.prev.next = pointer.next;
			if (pointer.next != null)
				pointer.next.prev = pointer.prev;
			if (this.first == pointer)
				this.first = this.first.next;
			if (this.last == pointer)
				this.last = this.last.prev;
			pointer.prev = null;
			pointer.next = null;
			pointer.null;
			this.size--;
		}
	} else if (arguments.length == 2 &&
		typeof arguments[1]  == "function") {
		var pointer = this.last;
		while (pointer != null) {
			if (comparer(o) == comparer(pointer.data))
				break;
			else
				pointer = pointer.prev;
		}
		if (pointer.prev != null)
			pointer.prev.next = pointer.next;
		if (pointer.next != null)
			pointer.next.prev = pointer.prev;
		if (this.first == pointer)
			this.first = this.first.next;
		if (this.last == pointer)
			this.last = this.last.prev;
		pointer.prev = null;
		pointer.next = null;
		pointer.null;
		this.size--;
	}
};

jk.List.prototype.contains = function(o, comparer) {
	if (typeof comparer != "function")
		return;
	var pointer = this.last;
	while (pointer != null) {
		if (comparer(o) == comparer(pointer.data))
			return true;
		else
			pointer = pointer.prev;
	}
	return false;
};

jk.List.prototype.length = function(o) {
	return this.size;
};

jk.List.prototype.printAll = function(printer) {
	var pointer = this.first;
	while (pointer != null) {
		console.log(pointer.data);
		pointer = pointer.next;
	}
};

/*
 * Queue
 */
jk.Queue = function() {
	var first = null,
		last = null,
		size = 0;
};

jk.Queue.prototype.enqueue = function(o) {
	var node = new Node(o);
	if (this.last == null) {
		this.last = node;
		this.first = node;
		this.size = 1;
	} else {
		node.next = this.last;
		this.last.prev = node;
		this.last = node;
		this.size++;
	}
};

jk.Queue.prototype.dequeue = function() {
	var data = null;
	if (this.first == null) {
		return null;
	} else if (this.first === this.last) {
		data = this.first.data;
		this.first = null;
		this.last = null;
		this.size--;
	} else {
		data = this.first.data;
		this.first = this.first.prev;
		this.first.next = null;
		this.size--;
	};
	return data;
};

jk.Queue.prototype.length = function() {
	return this.size;
};

jk.Queue.prototype.contains = function(o, comparer) {
	if (typeof comparer != "function")
		return;
	var pointer = this.last;
	while (pointer != null) {
		if (comparer(o) == comparer(pointer.data))
			return true;
		else
			pointer = pointer.prev;
	}
	return false;
};

jk.Queue.prototype.printAll = function(printer) {
	if (typeof printer == "function") {
		var pointer = this.last;
		while (pointer != null) {
			console.log(printer(pointer.data));
			pointer = pointer.next;
		};
	};
};

}(window.jk = window.jk || {}));
