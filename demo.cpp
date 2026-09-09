#include<iostream>
using  namespace std;

class sample{
   int data;
   sample* next;

   sample(int val)
   {
    data=val;
    next=NULL;
   }
};
