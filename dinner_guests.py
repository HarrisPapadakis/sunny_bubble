#List of guest
guests = ["Michael Jordan" ,"Lebron James" ,"Scottie Pipen" ,"Steph Curry"]

#Adding new guests
guests.insert(0,"Mel Gibson")
guests.insert(2,"Lana Rhodes")
guests.append("Mia Khalifa")

#Notify all guests for adding  new guests
print("Great news!I found i bigger dinner table.Here 's the updated guest list:")
for guest in guests:
        print(f"{guest}, you are invited to dinner!")

#Using the len() function to determine the number of guests
guests = ["Mel Gibson" , "Michael Jordan" ,"Lebron James" , "Lana Rhodes" ,"Scottie Pipen" ,"Steph Curry", "Mia Khalifa"]
print(f"\nNumber of guests invited to dinner: {len(guests)}")        
