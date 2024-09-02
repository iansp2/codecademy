from collections import deque
from tree_module import TreeNode


def dfs(root_node, target_value):
    paths_to_visit = deque([[root_node]])

    while paths_to_visit:
        current_path = paths_to_visit.popleft()
        current_node = current_path[-1]
        if current_node.value == target_value:
            return current_path
        else:
            for child in current_node.children:
                new_path = current_path.copy()
                new_path.append(child)
                paths_to_visit.appendleft(new_path)
    
    return None

node0 = TreeNode('a')
node1 = TreeNode('b')
node2 = TreeNode('c')
node3 = TreeNode('d')
node4 = TreeNode('e')
node5 = TreeNode('f')
node6 = TreeNode('g')

node0.add_child(node1)
node0.add_child(node2)

node1.add_child(node3)
node2.add_child(node4)

node3.add_child(node5)
node5.add_child(node6)

print(dfs(node0, 'g'))

def dfs_recursive(root_node, target_value):
    if root_node.value == target_value:
        return root_node
    #For each child of the input node, recursively call this function and return the first non-null value returned by a recursive call.
    for child in root_node.children:
        potential_node = dfs_recursive(child, target_value)
        if potential_node.value is not None:
            return potential_node
    #If this root node has no children, or the recursive calls did not return any node, then return null.
    return None

# print(dfs_recursive(node0, 'g'))