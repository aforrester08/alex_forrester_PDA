### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
#need to require_relative the Card.rb class
class CardGame


  def checkforAce(card) #no capital on 'A' and should be underscores between each word
    if card.value = 1 #should be two equals for an equivalence
      return true
    else
      return false #here we can remove the 'else' statement and put 'return false' outside the 'if' function
    end
  end

  dif highest_card(card1 card2) #'def' is mispelled, should be comma between the two arguments in the brackets
  if card1.value > card2.value  #all lines in this class need indented properly
    return card #card1
  else
    return card2 #as above we can out this line outside the if function, removing the else statement
  end
end #indent this end statement
end #this end should be at the very bottom, its the end statement for the class itself

def self.cards_total(cards)
  total #total should be set to 0 here so integers can be added
  for card in cards
    total += card.value
    return "You have a total of" + total #this line should be placed outside the for loop,
    # otherwise the string will be printed every time an integer is added and not the total at the end
    #total should als0 be subbed for #{total}
  end
end
```
