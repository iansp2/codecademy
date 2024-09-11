def merge_sort(items, comparison_function):
  if len(items) <= 1:
    return items

  middle_index = len(items) // 2
  left_split = items[:middle_index]
  right_split = items[middle_index:]

  left_sorted = merge_sort(left_split, comparison_function)
  right_sorted = merge_sort(right_split, comparison_function)

  return merge(left_sorted, right_sorted, comparison_function)

def merge(left, right, comparison_function):
  result = []

  while (left and right):
    if comparison_function(left[0], right[0]):
      result.append(left[0])
      left.pop(0)
    else:
      result.append(right[0])
      right.pop(0)

  if left:
    result += left
  if right:
    result += right

  return result