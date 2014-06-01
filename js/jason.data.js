(function(jk, undefined) {

/*
 * Queue
 */
jk.Queue = function() {
	var first = null,
		last = null,
		size = 0;
};

var QueueNode = function(o) {
	this.data = o;
	this.prev = null;
	this.next = null;
};

jk.Queue.prototype.enqueue = function(o) {
	var node = new QueueNode(o);
	if (this.last == null) {
		this.last = node;
		this.first = node;
		this.size = 1;
	} else {
		node.next = this.last;
		this.last.prev = node;
		this.last = node;
		this.size++;
	};
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
	console.log('This function has been deprecated.');

	if (typeof comparer != "function")
		return;

	var pointer = this.last;
	while (pointer != null) {
		if (comparer(o) == comparer(pointer.data))
			return true;
		else
			pointer = pointer.next;
	};
	return false;
};

jk.Queue.prototype.printAll = function(print) {
	if (typeof print == "function") {
		var pointer = this.last;
		while (pointer != null) {
			console.log(print(pointer.data));
			pointer = pointer.next;
		};
	};
};

/*
 * Binary Search Tree

jk.BinarySearchTree = function(c) {
	var root = null,
		comparer = c;
};

var TreeNode = function(o) {
	this.data = o;
	this.left = null;
	this.right = null;
	this.depth = 0;
	this.parent = null;
};

jk.BinarySearchTree.prototype.findLeftmostLeaf = function(n) {
	var leaf = n.left;
	while (true) {
		if (leaf.right == null)
			break;
		else
			leaf = leaf.right;
	};
	return leaf;
};

jk.BinarySearchTree.prototype.findRightmostLeaf = function(n) {
	var leaf = n.right;
	while (true) {
		if (leaf.left == null)
			break;
		else
			leaf = leaf.left;
	};
	return leaf;
};



jk.BinarySearchTree.prototype.insert = function(o) {
	var node = new TreeNode(o);
	if (this.root == null) {
		this.root = node;
	} else {
		var pointer = this.root;
		while (true) {
			node.parent = pointer;
			node.depth++;
			if (this.comparer(node.data) < this.comparer(pointer.data)) {
				if (pointer.left != null) {
					pointer = pointer.left;
					continue;
				} else {
					pointer.left = node;
					break;
				};
			} else {
				if (pointer.right != null) {
					pointer = pointer.right;
					continue;
				} else {
					pointer.right = node;
					break;
				};
			};
		};
	};
};

jk.BinarySearchTree.prototype.delete = function(o) {
	
};
 */
}(window.jk = window.jk || {}));
