#!/bin/bash

export NODE_ENV='production'
screen -dmS "eth_web" bash -c "export NODE_ENV=production && ember s -e prod -p 8049 --ssl true"
