# Assignment: Selection Sort

# Objectives:

# Execute selection sort
# If you're given a list with a bunch of numbers and you're supposed to sort the numbers (with the smallest number on the left and the largest number on the right), how would you do this? There are numerous sorting algorithms to sort numbers in the list. We'll introduce one of the simplest sorting algorithm called selection sort.

# Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted. Here's an animation and a video of selection sort:

number=[8,5,2,6,9,3,1,4,0,7]
def SelectionSort(list):
    for i in range(len(list)):
        for j in range(i+1,len(list)):
            if list[i]>list[j]:
                list[i],list[j]=list[j],list[i]
    return list
print(SelectionSort(number))

