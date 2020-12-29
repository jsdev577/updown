// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract UpDown {
  uint Up=0;
  uint Down=1;
  
  struct Result {
    uint winner;
    uint loser;
  }
  Result result;
  bool biddingOpen = false;

  mapping (uint => uint ) public bets;
  mapping(address => mapping(uint => uint)) public betsPerGambler;
  
  address payable public owner;
   constructor() public {
    owner = msg.sender; 
  }

  uint time;
  uint gameIndex;

  function startGame(uint _time) public returns(uint) {
    require(owner == msg.sender, "Only Owner");
    biddingOpen = true;
    time = block.timestamp + _time;
    gameIndex++;
    return (gameIndex);
  }
  
  function getBalance () public view returns (uint){
      return address(this).balance;
  }

  function placeBet(uint _side )  public payable {
    require(biddingOpen  == true, 'bidding is finished');
    require(block.timestamp <= time, "Times Up");
    bets[_side] += msg.value;
    betsPerGambler[msg.sender][_side] += msg.value;
  }

  uint bonus;

  function setBonus(uint _bonus) public {
      require(owner == msg.sender, "Only Owner");
      bonus = _bonus;
  }

  function withdrawGain() external payable {
    uint gamblerBet = betsPerGambler[msg.sender][result.winner];
    require(gamblerBet > 0, 'you do not have any winning bet');  
    require(biddingOpen  == false, 'bidding not finished yet');
    uint gain = gamblerBet + bets[result.loser] * gamblerBet * bonus / (bets[result.winner]*100);
    uint ownergain = bets[result.loser] * gamblerBet * (100-bonus) / (bets[result.winner]*100);
    betsPerGambler[msg.sender][Up] = 0;
    betsPerGambler[msg.sender][Down] = 0;
    msg.sender.transfer(gain);
    owner.transfer(ownergain);
  }

  function reportResult(uint _winner, uint _loser) public {
    require(owner == msg.sender, 'only Owner');
    result.winner = _winner;
    result.loser = _loser;
    biddingOpen  = false;
  }
  
}