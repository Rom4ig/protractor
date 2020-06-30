#!/bin/bash

if [ "$1" = 'regression' ]; then
    exec npm test -- --spec ./specs/regression/*
fi
if [ "$1" = 'smoke' ]; then
    exec npm test -- --spec ./specs/smoke/*
fi

exec "$@"