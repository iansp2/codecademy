import random

class TreeNode:
	def __init__(self, value):
		self.value = value
		self.children = []

	def add_child(self, child_node):
		print("Adding " + str(child_node.value))
		self.children.append(child_node)
		
	def remove_child(self, child_node):
		print("Removing " + str(child_node.value) + " from " + self.value)
		self.children = [child for child in self.children if child is not child_node]

	def traverse(self):
		print("Traversing...")
		nodes_to_visit = [self]
		while nodes_to_visit:
			current_node = nodes_to_visit.pop(0)
			nodes_to_visit.extend(current_node.children)
			print(current_node.value)

def create_binary_tree(n):
	if n <= 0:
		return None
	
	root = TreeNode(random.randint(1, 100))
	nodes = [root]

	for _ in range(1, n):
		new_node = TreeNode(random.randint(1, 100))
		while True:
			parent_node = random.choice(nodes)
			if len(parent_node.children) < 2:
				parent_node.add_child(new_node)
				break
		nodes.append(new_node)
	
	return root

test_tree = create_binary_tree(8)
test_tree.traverse()