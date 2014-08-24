(function(jk, undefined) {

var Node = function(o) {
	// for linear data structures
	this.data = o;
	this.prev = null;
	this.next = null;
	// for trees
	this.key = o;
	this.parent = null;
	this.left = null;
	this.right = null;
};

/*
 * ArrayList
 */
jk.ArrayList = function() {
	var first = null,
		last = null,
		size = 0;
};

jk.ArrayList.prototype.add = function(o) {
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

jk.ArrayList.prototype.get = function(index) {
	if (index >= this.size || index < 0) {
		return null;
	} else {
		var pointer = this.last;
		for (var i = this.size - 1; i > index; i--)
			pointer = pointer.prev;
		return pointer.data;
	}
};

jk.ArrayList.prototype.remove = function(o, comparer) {
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

jk.ArrayList.prototype.contains = function(o, comparer) {
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

jk.ArrayList.prototype.length = function(o) {
	return this.size;
};

jk.ArrayList.prototype.printAll = function(printer) {
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

/*
 * Stack
 */
jk.Stack = function() {
	var first = null,
		last = null,
		size = 0;
};

jk.Stack.prototype.push = function(o) {
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

jk.Stack.prototype.pop = function() {
	var data = null;
	if (this.last == null) {
		return null;
	} else if (this.first === this.last) {
		data = this.last.data;
		this.first = null;
		this.last = null;
		this.size--;
	} else {
		data = this.last.data;
		this.last = this.last.prev;
		this.last.next = null;
		this.size--;
	};
	return data;
};

jk.Stack.prototype.length = function() {
	return this.size;
};

jk.Stack.prototype.contains = function(o, comparer) {
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

jk.Stack.prototype.printAll = function(printer) {
	if (typeof printer == "function") {
		var pointer = this.last;
		while (pointer != null) {
			console.log(printer(pointer.data));
			pointer = pointer.next;
		};
	};
};

/*
 * BianrySearchTree
 */
jk.BianrySearchTree = function() {
	var root = null;
}

jk.BianrySearchTree.prototype.search = function(startNode, key) {
	while (startNode != null && startNode.key != key) {
        if (key < startNode.key)
            startNode = startNode.left;
        else
            startNode = startNode.right;
    }
    return startNode;
}

jk.BianrySearchTree.prototype.searchMinimum = function(startNode) {
	while (startNode != null && startNode.left != null)
		startNode = startNode.left;
	return startNode;
}

jk.BianrySearchTree.prototype.searchSuccessor = function(startNode) {
	if (startNode.right != null)
		return this.searchMinimum(startNode.right);
	var pointer = startNode.parent;
	while (pointer != null && startNode == pointer.right) {
		
	}
}

jk.BianrySearchTree.prototype.insert = function(key) {
	var newNode = new Node(key);
	var prevPointer = null;
	var pointer = this.root;
	while (pointer != null) {
		prevPointer = pointer;
		if (key < pointer.key)
			pointer = pointer.left;
		else
			pointer = pointer.right;
	}
	newNode.parent = prevPointer;
	if (prevPointer == null) // Tree is empty
		this.root = newNode;
	else if (key < prevPointer.key)
		prevPointer.left = newNode;
	else
		prevPointer.right = newNode;
}

jk.BianrySearchTree.prototype.transplant = function(u, v) {
	if (u.parent == null) // u is root
		this.root = v;
	else if (u == u.parent.left)
		u.parent.left = v;
	else
		u.parent.right = v;
	if (v != null)
		v.parent = u.parent;
}

jk.BianrySearchTree.prototype.delete = function(key) {
	var node = this.search(this.root, key);
	if (node == null)
		return false;
	if (node.left == null)
		this.transplant(node, node.right);
	else if (node.right == null)
		this.transplant(node, node.left);
	else {
		var successor = searchSuccessor(node);
		if (successor.parent != node) {
			this.transplant(successor, successor.right);
			successor.right = node.right;
			successor.right.parent = successor;
		}
		this.transplant(node, successor);
		successor.left = node.left;
		successor.left.parent = node;
	}
	return true;
}

/*
jk.BianrySearchTree.prototype.getRoot = function() {
	return this.root;
}
*/
}(window.jk = window.jk || {}));
