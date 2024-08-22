#!/bin/sh
cd ../
mkdir output
cp -R ./newsfeed/* ./output
cp -R ./newsfeed/.storybook ./output
cp -R ./output ./newsfeed/