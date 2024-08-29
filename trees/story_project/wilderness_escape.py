import storyline
import tree_node

tree_node.type_text("Once upon a time…")

nodes_to_visit = [storyline.story_root]

while nodes_to_visit:
    current_node = nodes_to_visit.pop(0)
    current_node.traverse()

    if not current_node.choices:
        print("The end")
        break
    
    choice = 0
    while choice not in [1, 2]:
        try:
            choice = int(input("What do you choose, 1 or 2? "))
        except ValueError:
            print("Please enter a valid number.")
    
    nodes_to_visit.append(current_node.choices[choice - 1])
