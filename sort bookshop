import csv
import time

import bubble_sort
import merge_sort
import quick_sort

def load_books(filename):
  """Load books from csv file
  This code loads the current book shelf data from the csv file
  """
  bookshelf = []
  with open(filename) as file:
      shelf = csv.DictReader(file)
      for book in shelf:
          # add your code here
          book['author_lower'] = book['author'].lower()
          book['title_lower'] = book['title'].lower()
          bookshelf.append(book)
  return bookshelf

bookshelf = load_books('books_small.csv')

def by_title_ascending(book_a, book_b):
   return book_a['title_lower'] > book_b['title_lower']

def by_author_ascending(book_a, book_b):
   return book_a['author_lower'] > book_b['author_lower']

def by_total_length(book_a, book_b):
   book_a_total = len(book_a['title_lower']) + len(book_a['author_lower'])
   book_b_total = len(book_b['title_lower']) + len(book_b['author_lower'])
   return book_a_total > book_b_total

# sort1 = bubble_sort.bubble_sort(bookshelf, by_title_ascending)
# bookshelf_v1 = bookshelf.copy()
# sort2 = bubble_sort.bubble_sort(bookshelf_v1, by_author_ascending)
# bookshelf_v2 = bookshelf.copy()
# quick_sort.quicksort(bookshelf_v2, 0, len(bookshelf_v2)-1, by_author_ascending)
# bookshelf_v3 = bookshelf.copy()
# quick_sort.quicksort(bookshelf_v3, 0, len(bookshelf_v3)-1, by_total_length)

bookshelf_large_v1 = load_books('books_large.csv')
bookshelf_large_v2 = bookshelf_large_v1.copy()
bookshelf_large_v3 = bookshelf_large_v1.copy()

# To improve the code below, I can create a time_sort function
start_time = time.time()
bubble_bookshelf = bubble_sort.bubble_sort(bookshelf_large_v1, by_total_length)
end_time = time.time()
duration = end_time - start_time
print(f"Bubble sort took {duration} seconds")

start_time = time.time()
merge_bookshelf = merge_sort.merge_sort(bookshelf_large_v2, by_total_length)
end_time = time.time()
duration = end_time - start_time
print(f"Merge sort took {duration} seconds")

start_time = time.time()
quick_sort.quicksort(bookshelf_large_v3, 0, len(bookshelf_large_v3) - 1, by_total_length)
end_time = time.time()
duration = end_time - start_time
print(f"Quick sort took {duration} seconds")