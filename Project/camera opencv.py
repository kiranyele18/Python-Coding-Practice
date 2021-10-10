# -*- coding: utf-8 -*-
"""
Created on Sat Jun 19 15:23:19 2021

@author: Kiran
"""

import cv2
cam = cv2.VideoCapture(0)

while cam.isOpened():
    ret, frame = cam.read()
    if cv2.waitKey(10) == ord('q'):
        break
    cv2.imshow('Cow house',frame)