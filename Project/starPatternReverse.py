# -*- coding: utf-8 -*-
"""
Created on Tue Jul 13 13:12:22 2021

@author: Kiran
"""

def starPatternReverse():
    
    n = int(input("Enter Number : " ))
    for i in range(n,0,-1):
        for j in range(i,0,-1):
            print("*",end = " ")
        print()
starPatternReverse()
