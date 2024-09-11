from tree_module import TreeNode
from collections import deque

def bfs(root_node, target_value):
    frontier_path = deque()
    initial_path = [root_node]    
    frontier_path.appendleft(initial_path)

    while frontier_path:
        current_path = frontier_path.pop()
        current_node = current_path[-1]

        if current_node.value == target_value:
            return current_path
        
        for child in current_node.children:
            new_path = current_path.copy()
            new_path.append(child)
            frontier_path.appendleft(new_path)

    return None

sample_root_node = TreeNode("Home")
docs = TreeNode("Documents")
photos = TreeNode("Photos")
sample_root_node.children = [docs, photos]
my_wish = TreeNode("WishList.txt")
my_todo = TreeNode("TodoList.txt")
my_cat = TreeNode("Fluffy.jpg")
my_dog = TreeNode("Spot.jpg")
docs.children = [my_wish, my_todo]
photos.children = [my_cat, my_dog]

