// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAOdemic is Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant SPONSOR_ROLE = keccak256("SPONSOR_ROLE");
    bytes32 public constant DAO_ROLE = keccak256("DAO_ROLE");

    uint256 public grantSupply;

    struct Grant {
        uint256 amount;
        address sponsor;
        string name;  
    }

    mapping(address => uint256[]) public userGrants;

    Grant[] public grants;

    IERC20 public daotoken;

    constructor(address _daotoken) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(DAO_ROLE, msg.sender);
        daotoken = IERC20(_daotoken);
    }

    function EarnRewards(uint256 _amount) public {
        daotoken.mint(msg.sender, _amount);
    }

    function CreateGrant(uint256 _amount, string memory _name) public returns (bool) {
        grantSupply++;
        Grant storage grant = grants[grantSupply];
        grant.amount = _amount;
        grant.sponsor = msg.sender;
        grant.name = _name;
        return true;
    }

    function ConfirmGrant(uint256 _id, address _user) public returns (bool) {
        require(msg.sender == grants[_id].sponsor, 'not a sponsor');
        userGrants[_user].push(_id);
        return true; 
    }

    function GetUserGrants(address _user) public view returns (uint256[] memory) {
        return userGrants[_user];
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }
}