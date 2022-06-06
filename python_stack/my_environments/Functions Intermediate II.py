# Update Values in Dictionaries and Lists
print('--------------1--------------')

x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0]=15
print (x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]["last_name"]= 'Bryant'
print (students)

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0]='Andres'
print(sports_directory)

# Change the value 20 in z to 30
z[0]["y"]= 30
print(z)

################################
# Iterate Through a List of Dictionaries
# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:
print('--------------2--------------')
studentss= [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(studentss):
    for x in studentss:
        return(studentss)
print(iterateDictionary(studentss))


# Get Values From a List of Dictionaries
# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:Michael, John, Mark, KB
print('--------------3--------------')
def iterateDictionary2(key_name, studentss):
    for x in studentss:
        print(x[key_name])
print("------first names------")
iterateDictionary2('first_name', studentss)

# And iterateDictionary2('last_name', students) should output: Jordan, Rosales, Guillen, Tonel
print("------last names------")
iterateDictionary2('last_name', studentss)


# Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:
print('--------------4--------------')
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    for x in dojo:
        print(len(dojo[x]), x.upper())
        for i in dojo[x]:
            print(i)

print (printInfo(dojo))
