GOGS 121 Group G - ASSIGNMENT 2 
===============================  

MEMBER CONTRIBUTION
-------------------
**Amr Kahhaleh**: Finished part 1a. Made the d3 look pretty. Worked on hoverover bar + the tip over each bar. Fixed a bug that was causing the x-axis labels to get cutoff. Worked on the website. Heroku deployment.

**Andrew Jabasa**: bootstrap work, heuristics/readme

**David Liberman**: Finished part 1b and helped people get up to pace with the SQL side of things. Worked on foundation SQL and d3.js here and there--formatting and adding specificity to the querry.

**Jean Park**: Added SQL query and integrated into the bar chart in index.js. Also included added functionality on mouseover. Worked with d3 and SQL

**Mark Hwang**: Set up webpage, bootstrap and bootstrap theme, filled out heuristics/readme


SIX DESIGN PRINCIPLES
---------------------

**Discoverability/Signifiers** - Are users able to easily find the points of the application that they are interested in?
The points of the application that the user--a police officer stationed somewhere in San Diego--would be interested in would be the regions that have the most crime. Our graph is ordered by regions in terms of crime frequency, so the communities with the highest crime rates appear on the left of the graph.

**Learnability** - Are users able to easily learn and remember how to interact with your application?
Users are able to easily learn how to use our application from the header that describes the purpose of our app, and it is easy to remember how to interact with our graph since the user just needs to hover over a bar to interact with it.

**Feedback** - Is there strong evidence of user feedback for actionable items?
Hovering over a bar immediately displays more information and highlights the currently selected bar.

**Natural Mapping/Mental Metaphors** - Is there strong evidence of providing natural mappings or relatable metaphors that help the user navigate the application?
The bars provide an accurate visual representation of the proportion of crimes in each region. 
When a user hovers over a bar, it changes color and shows more information, so the user knows precisely which data point they are viewing

**Constraints** - Does the application have deliberate constraints to guide the flow of user interaction?
There is a constraint on the number of regions shown so that the information is not too overwhelming and the graph is not too large. This constrains the amount of information that is visible, but ensures that only the more significant data points are featured

**Error Prevention/Recovery** - Is there strong evidence of error prevention and error recovery so that the user won’t be left confused when something unexpected happens?
The graph is clearly labeled for each axis so the user does not misinterpret the graph. Also, hovering over the bars gives the total crimes for each region, making it easy to understand and interpret the information accurately.

DESIGN DECISIONS
----------------
Bootstrap theme: We wanted to use a simple yet informative design that had a nice header image (aesthetically pleasing) and Bootstrap has templates for doing so. 

Interactive bar chart (d3 and d3tips): We chose this graph to visualize our data because it was intuitive to understand and easy to compare between the different regions. It also provides an accurate and understandable representation of our data. Police officers can clearly see which areas contain the most crime and can easily compare each of the regions. If a user wants to find more precise information, they can simply hover over each bar. This gives the users more accurate information, but only if they want to see it. 

