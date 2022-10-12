#!/bin/bash
ssh -L 8080:stload.se.ifmo.ru:8080 s288867@helios.cs.ifmo.ru -p 2222 -oHostKeyAlgorithms=+ssh-dss