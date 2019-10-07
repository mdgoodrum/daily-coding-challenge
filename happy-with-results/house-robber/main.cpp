#include<stdio.h>
#include <vector>

using namespace std;

int rob(vector<int>& nums) {
    if (nums.size() >= 2) {
        int include = nums[0];
        int exclude = 0;
        int newExclude;

        for (int i = 1; i < nums.size(); i++) {
            newExclude = include > exclude ? include : exclude;
            include = exclude + nums[i];
            exclude = newExclude;
        }

        return include > exclude ? include : exclude;
    } else if (nums.size() == 1) {
        return nums[0];
    }
    return 0;
}

int main() 
{ 
  vector<int> vect;  
  vect.push_back(5); 
  vect.push_back(5); 
  vect.push_back(10);
  vect.push_back(100); 
  vect.push_back(10); 
  vect.push_back(5);
  printf("%d", rob(vect)); 
  return 0; 
} 

//https://leetcode.com/problems/house-robber/