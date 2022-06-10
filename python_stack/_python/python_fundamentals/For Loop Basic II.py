
# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
print("----------1---------")
def  biggie_size(list):
    for i in range(len(list)):
        if list[i] > 0:
            list[i]='big'
    return list
print (biggie_size([-1, 3, 5, -5]))


# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
print("----------2---------")
def count_positives (list):
    count =0
    for i in range(len(list)):
        if list[i]>0:
            count +=1
    list[len(list)-1]=count
    return list
print(count_positives([-1,1,1,1]))
print(count_positives([1,6,-4,-2,-7,-2]))


# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
print("----------3---------")
def sum_total(list):
    sum=0
    for i in range(len(list)):
        sum= list[i]+sum
    return sum
print(sum_total([1,2,3,4]))
print(sum_total([6,3,-2]))


# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5
print("----------4---------")
def average(list):
    sum=0
    for i in range(len(list)):
        sum= list[i]+sum
    return sum/len(list)
print(average([1,2,3,4]))


# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
print("----------5---------")
def length (list):
    count = 0
    for i in list:
        count+=1
    return count
print(length([37,2,1,-9]))
print(length([]))


# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
print("----------6---------")
def minimum(list):
    if len(list) == 0:
        return False
    for i in range(len(list)):
        min=list[0]
        if(list[i]<min):
            min=list[i]
    return min
print (minimum([37,2,1,-9]))
print (minimum([]))


# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
print("----------7---------")
def maximum(list):
    if len(list) == 0:
        return False
    for i in range(len(list)):
        max=list[0]
        if(list[i]>max):
            max=list[i]
    return max
print (maximum([37,2,1,-9]))
print (maximum([]))



# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
print("----------8---------")
def ultimate_analysis(list):
    _dict = {
            'sumTotal': [0],
            'average': [0],
            'minimum': [0],
            'maximum': [0],
            'length': [0]}
    _dict.update({"sumTotal" : sum_total(list)})
    _dict.update({"average" : average(list)})
    _dict.update({"minimum" : minimum(list)})
    _dict.update({"maximum" : maximum(list)})
    _dict.update({"length" : length(list)})
    return _dict
print (ultimate_analysis([37,2,1,-9]))


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
print("----------9---------")
def reverse_list(list):
    return list[::-1]
print(reverse_list([37,2,1,-9]))