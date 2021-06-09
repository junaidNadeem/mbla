#!/bin/bash

echo "Running Linter"
yarn lint
if [ $? -eq 0 ]
then
  echo "Linting Successful"
else
  echo "ERROR: Lint failed"
  exit 1
fi

echo "Creating project build"
yarn build
if [ $? -eq 0 ]
then
  echo "Build Successful"
else
  echo "ERROR: build failed"
  exit 1
fi

read -p "Enter deployment token: " token

echo "Switching project to dev"
firebase use dev --token "$token"

echo "Starting deployment to dev"
firebase deploy --only hosting --token "$token"

echo "Deployment Successful!"