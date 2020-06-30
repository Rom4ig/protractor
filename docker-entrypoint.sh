#!/bin/bash
#set -e

if [ "$3" = 'some' ]; then
    exec npm test --spec ./specs/login-spec.js
fi

exec "$@"