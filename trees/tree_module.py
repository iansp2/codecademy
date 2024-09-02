import random

class TreeNode:
	def __init__(self, value):
		self.value = value
		self.children = []
	
	def __repr__(self):
		return self.value	

	def add_child(self, child_node):
		print("Adding " + child_node.value)
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