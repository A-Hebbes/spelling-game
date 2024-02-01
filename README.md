# There, Their, or They're Spelling Game 

The intention was to make an educational website using HTML, CSS, and JavaScript. This is a website tagetted at children but which can be used by any English language learner, to help practice their skills with the tricky there, their, or they're homophone. The aim of the site is to provide guidance on the spelling skill whilst also allowing the user to test their understanding of the use of the words in context. There is also a contact form on the website in case users have any comments for improvements which could be made. 

![Spelling Game Responsive Layout](assets/images/spelling-game-responsive.jpg)

## Contents
- [User Experience](#user-experience-ux)
    - [User Stories](#user-stories)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Programmes Used](#programmes-used)
- [Testing](#testing)
    - [Lighthouse](#lighthouse)
    - [Devices](#devices)
    - [Testing User Stories](#testing-user-stories)
    - [Fixed Bugs](#fixed-bugs)
    - [Functionality](#functionality)
    - [Future features](#future-features)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

## User Experience (UX)

- ### User Stories

1. As a user I want to test my use of their, there, or they're in a number of contexts. 
    
2. As a user I want to have support with the spellings of the target words so that I can see the words to embed the spelling, whilst practising the use of the words in context. 
     
3. As a user I want to know how well I did on the game. 
    
4. As a user I want to know how I am doing without looking at the score counter after each question. 
    

### Design 
 - #### Colour Scheme

 - The colour pallette was found on the [coolors](https://coolors.co/) site.
 - As the target users will be children the colours selected were bright and eye catching. 

 - #### Typography 
 - The **Comic Neue** font was used as the main font for the site. This font was used for its casual appearance, which would aid in appeal to younger users. 

 #### Wireframes 

[Spelling Game Wireframe](assets/images/spelling-game-wireframe.jpg)

## Features 

### Existing Features 

**Landing Page Image**

![Spelling Game Landing](assets/images/spelling-game-landing.jpg)

- The landing page is bright and colourful, a theme continued throughout the site. This provides an eye-catching hook for the site's main intended users, children. 

- The heading is clearly displayed at the top and introduces the nature of the quiz that is to follow.

- Below the heading further information is given on the purpose of the site. 


**Navigation Buttons**

![Navigation Buttons](assets/images/spelling-game-buttons.jpg)


- The buttons on the landing page allow the user to easily navigate the site. 

- The 'Play' button is at the top as this is the most important button for site use. This button directs the user to the game page. This is followed by the 'How to Play' button, this brings up a modal which gives a reminder of the knoweldge required and instructions on how to play. The final button is a 'Contact Us' button, which brings up a modal with a form which the user can fill in to provide feedback. 


**How To Play Modal**

INCLUDE IMAGE HERE ONCE YOU HAVE EDITED THE PAGE TEXT AND CENTRED HEADING
![rocks-off-about](https://github.com/A-Hebbes/Project-1-Rocks-Off/assets/148571629/b1f2c839-de1a-46d8-8c46-39a7e326ddff)

- The 'How To Play' modal gives a clear list of instructions on how to play the game. 

- There is a 'Refresh Your Understanding' section below the instructions which gives the user a quick recap of the skill to be used. 

- The 'X' in the top right corner of the modal hides the modal again and the user can see the landing page and press play to begin the game.



**Contact Us Modal**

![rocks-off-table](https://github.com/A-Hebbes/Project-1-Rocks-Off/assets/148571629/139f5b9b-61c4-4c30-91c5-fa0035ccdcba)

INCLUDE IMAGE HERE ONCE YOU HAVE MOVED THE SUBMIT Button TO CENTRE

- This modal is displayed when the contact us button is pressed on the home page.  

-  The user can indicate whether they are a teacher, student, or parent. This allows the responses to be used effectively. 

- There is a text area in which the user can fill out their comment. 

-There is no space for contact information of the user to be provided. This was a decision made based on safeguarding principles. As the site's main users are likely to be children, it would be inappropriate to request contact information.

**Game Page**

![Spelling Game Quiz Page](assets/images/spelling-game-quiz.jpg)

-The game page continues the colour theme from the home page and is laid out simply so that younger users are able to intuitively use the page. 

-The score at the top updates when a question is answered correctly. 

- The question updates each time an answer button is clicked. 

- The three answer buttons are laid out below the question and when clicked, will update the score if necessary. Also, the user will see either a tick or cross displayed after they click a button dependent on their success with the question. 

- At the bottom of the page is a 'Return Home' link which directs the user back to the home page. 

**Game End Modal**

![Game End Modal](assets/images/spelling-game-end.jpg)

- The 'Game End Modal' is displayed once the final question has been answered. 

- The user sees their final score and gets feedback based on their score. 

- There is a return home button at the bottom of the modal. The text is a darker colour than the rest of the modal to draw attention of the user. 


### Features left to implement 

- The site could be developed to include more quizzes and have more emphasis on teaching. 

- There could also be different sections of the site based upon the user's attainment level. 

- Another useful feature would be a top scores section, or a way for a user's top score to be saved so that they can try to beat their previous attempts. 

## Technologies Used
### Languages

- HTML
- CSS
- JavaScript

### Programmes Used

- Balsamiq
    -For Wireframes
- Git 
    - Used for version control
- Github
    - Used to store the repository for the project.
- Gitpod
    - The IDE used when coding the website. 
- Chrome Developer Tool
    - Used to check responsivity and to troubleshoot issues
- Am I Responsive
    - This site was used to check the responsiveness of the site (https://ui.dev/amiresponsive)
- Goodle Fonts
    - The fonts for the site were taken from Google Fonts


## Testing

The code was validated through the W3C HTML Validator, W3C CSS Validator, and JSHint. These were used to ensure that syntax errors or omissions were rectified prior to submission.
 - (https://validator.w3.org/)
 - (https://jigsaw.w3.org/css-validator/)
 - (https://jshint.com/)


HTML Validation
 - The HTML passed the validator with no issues. 

 CSS Validation
 - The CSS validator highlighted a couple of issues in relation to syntax, for example an extra bracket was included and needed removing. Following these changes the CSS passed the validator. 

JS HINT 
- JSHint highlighted a number of missing semi-colons and also a string that was being read as a variable because it did not have inverted commas around it. With these fixes made the JavaScript passed the validator. 

### Lighthouse 

The first lighthouse test came back with the following scores. 

![First Lighthouse Test Results](assets/images/spelling-game-lighthouse-1.png) 

Accessibility was improved by a changing of colours on the site to improve readability. The pink question boxes on the game page were made a darker shade and the text on question box and answer buttons was made into a brighter yellow. This provided better contrast and so improved readability. 

![Lighthouse Readability Issue](assets/images/spelling-game-colours.png) 

There was also an issue with the home button, which was a font-awesome home icon. Lighthouse flagged this as an issue in relation to aria-hidden. I tried a few fixes suggested online, for example placing hidden text so that a screen reader could still read the text and the icon could remain as the only visible feature of the button. These still did not improve the issue, so I replaced the icon with text. I will have to do some more work to figure out this problem and why it occured. 

![Lighthouse Aria Hidden Issue](assets/images/spelling-game-house.jpg) 

### Devices 
- The site was tested on both **Chrome** and **Safari**
- Devices used were iPhone SE, MacBook Air and iPad. 

### Testing User Stories

1. As a user I want to test my use of their, there, or they're in a number of contexts. 
    - There are ten questions, each is a sentence with one word missing. The questions are a mixture of direct speech, and declarative statments. 

2. As a user I want to have support with the spellings of the target words so that I can see the words to embed the spelling, whilst practising the use of the words in context. 
    - There are three button options and the target words are displayed throughout. 

3. As a user I want to know how well I did on the game. 
    - There is a score counter at the top of the game page which updates as the game is played. There is also a final score displayed on the game end modal. 

4. As a user I want to know how I am doing without looking at the score counter after each question. 
    - There is a green tick or red cross displayed after each answer guess, dependant upon the user's success with the question. 

### Fixed Bugs

- There was an error displaying in the console when the page was loaded. To rectify this I added an event listener to allow the DOM content to load prior to the running of the rest of the JavaScript. 

- There was an issue with the contact modal screen on modal devices, the page overflowed to the left of the screen but could not be accessed. Initially I was unsure what was causing the issue, but found it to be the textarea in the end. To fix this I changed the box-sizing in the media query, and this resolved the issue. 

### Functionality

- All buttons were tested and are accessible. 
- All buttons have been tested to ensure they react as expected when hovered over. 
- The game works as intended. 
- All modals work as intended and when teh user exits them, they return to the home page view as expected. 

### Future Features

- The inclusion of a progress bar, could be a good feature in the future. 
- Additional quizzes which test different skills would also enhance the site. 

## Deployment 

- The project was deployed to Github Pages and used the following steps: 

1. Sign in to GitHub and access the [repository](https://github.com/A-Hebbes/spelling-game)
2. Go to settings which can be found towards the top of the repository page. 
3. Once in settings, scroll down to Github Pages.
4. Select the source as main. 
5. Now click save and refresh the page. 


## Credits 

Code help and advice came from many sources. 

**Ollie Grubb**

Ollie has helped build my understanding of a variety of areas in relation to this project. He has helped in particular with the bug-fixing process. His guidance helped me to use the Dev Tools more effectively. His assistance has also been credited in the code. 
 

**Video Guides**

- Modals 
The use of modals was totally new to me and so the following video proved a useful introduction to their use(https://www.youtube.com/watch?v=KjQ8uvAt9kQ)

- General structure and approach 
The following video was a useful scaffold in the early stages of the project. It helped outline some key principles and gave inspiration for structure (https://www.youtube.com/watch?v=f4fB9Xg2JEY)


**Educational Sites and Fora**

Listed below are more sites that I used to gain understanding of issues I was having or insights into best practice. 

(https://coolors.co/)

(https://www.thoughtco.com/)

(https://stackoverflow.com/)

(https://www.w3schools.com/)

(https://forum.freecodecamp.org/)

(https://nekocalc.com/px-to-rem-converter)

(https://webflow.com/blog/fonts-for-web-design)



### Content

  
- Font Awesome (https://fontawesome.com/)
- Google Fonts (https://fonts.google.com/)
