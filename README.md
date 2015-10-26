# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# How you can make it run?
* Fork or clone this repository.
* Open index.html in your browser. 

# What my code test?

1. Testing that each feed in the allFeeds object has a URL defined and that the URL is not empty.
2. Testing that each feed in the allFeeds object has a name defined and that the name is not empty.
3. Testing that the menu element is hidden by default.
4. Testing that the menu changes visibility when the menu icon is clicked.
5. Testing that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. Testing that when a new feed is loaded by the loadFeed function; the content actually changes.
