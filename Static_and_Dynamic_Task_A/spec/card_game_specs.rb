require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class TestCardGame < MiniTest::Test


  def test_check_for_ace__true()
    card_game = CardGame.new()
    ace = Card.new('Hearts', 1)
    result = card_game.check_for_ace(ace)
    assert_equal(true, result)
  end

  def test_check_for_ace__false()
    card_game = CardGame.new()
    ace = Card.new('Hearts', 2)
    result = card_game.check_for_ace(ace)
    assert_equal(false, result)
  end

  def test_highest_card()
    card_game = CardGame.new()
    card1 = Card.new("Spades", 6)
    card2 = Card.new("Spades", 3)
    result = card_game.highest_card(card1, card2)
    assert_equal(card1, result)
  end

  def test_cards_total
    card_game = CardGame.new()
    card1 = Card.new("Spades", 6)
    card2 = Card.new("Spades", 3)
    card3 = Card.new("Hearts", 10)
    cards = [card1, card2, card3]
    result = CardGame.cards_total(cards)
    assert_equal("You have a total of 19", result)
  end

end
