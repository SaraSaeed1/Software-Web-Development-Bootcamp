number=[8,5,2,6,9,3,1,4,0,7]
def SelectionSort(list):
    for i in range(len(list)):
        for j in range(i+1,len(list)):
            if list[i]>list[j]:
                list[i],list[j]=list[j],list[i]
    return list
print(SelectionSort(number))

