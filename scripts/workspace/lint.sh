#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src ━━━━━━━"
yarn lerna run lint --stream --concurrency 1
