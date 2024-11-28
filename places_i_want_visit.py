#Create a list of 5 places i want to visit
places = ["United States" ,"Japan" ,"Tokyo" ,"Bali", "Morocco"]

#Print the list of places in original order
print("Original list of places:")
print(places)

#Print the list in alphabetical order without modifying the original list
print("\nAlphabetical order:")
print(sorted.(places))

#Show that he original list is unchanged
print("\nOriginal list after sorted():")
print(places)

#Print the list in reverse alphabetical order without modifying the original list
print("\nReverse alphabetical order:")
print(sorted(places, reverse=True))

#Show that he original list is unchanged
print("\nOriginal list after reverse sorted():")

#Reverse the order of the list and print it 
places.reverse()
print("\nList restored to original order after the reverse():")
print(places)

#Permanently sort the list in alphabetical order and print it
places.sort()
print("\nList after sort() in reverse alphabetical order:")
print(places)

#Permanently sort the list in alphabetical order and print it
places.sort(reverse=True)
print("\nList after sort() in reverse alphabetical order:")
print(places)
