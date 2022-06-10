number=[8,5,2,6,9,3,1,4,0,7]

def InsertionSort(list):
    for i in range(len(list)):
        key = list[i]
        j = i-1
        while j >= 0 and key < list[j] :
                list[j + 1] = list[j]
                j -= 1
        list[j + 1] = key
    return list

print ("The list before Insertion Sort:")
print(number)
print("")
print("The list after Insertion Sort:")
print(InsertionSort(number))