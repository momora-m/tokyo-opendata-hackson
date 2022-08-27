#!/bin/bash

BATCH_DIR=$HOME/git/tokyo-opendata-hackson/backend/

cd $BATCH_DIR
python batch/qcsv2json.py
