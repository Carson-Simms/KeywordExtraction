# Three potential keyword extraction solutions

## Simple Extraction using frequency

This solution is located underneath the simpleKeywordEnv directory. I personally ran and tested it by using a web server ( I use Simple Web Server ) and running the simpleKeywordEnv Directory. 

Example SS: 

![image](https://github.com/Carson-Simms/KeywordExtraction/assets/143337976/de3582ce-9988-4821-b0d5-0fe00e512797)

After running the directory, you can navigate to localhost/<port> and see the very simple html where you can paste in the job description and run the extraction.

## Compromise Library

Located in the compromiseKeywordEnv directiory. This solution uses the Compromise library to do the extraction. It is ran the same way as the simple extraction.

## NLP.js

Located in the nlpKeyWordEnv directiory. This is a work in progress, but it is a much more sophisticated library that uses data learning to give better extractions. This solution would require much more setup due to the training that would need to be done.
