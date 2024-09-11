import time
import sys

class TreeNode:
    def __init__(self, story_piece=None):
        self.story_piece = story_piece
        self.choices = []
    
    def add_child(self, child_node):
        self.choices.append(child_node)
    
    def traverse(self):
        story_node = self
        type_text(story_node.story_piece)

def type_text(text, delay=0.01):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()  # Move to the next line after typing the text