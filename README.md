# ASG1-ID
# Hyrule Hub

Hyrule Hub is a responsive, interactive community platform designed for fans of The Legend of Zelda: Breath of the Wild. It serves as a central gathering place for players to explore game lore, share fan art, and access game guides.

The project mimics the in-game **Sheikah Slate interface** to provide an immersive user experience. It combines modern web design techniques like masonry grids and parallax scrolling with the ancient, technological aesthetic of the game. 

## Design Process

The design process focused heavily on the **"Sheikah Technology"** aesthetic found in the game. The target audience includes existing fans of the Zelda franchise who create and consume fan content, as well as new players looking for lore information. The goal was to create a site that feels like an extension of the game itself, using specific color palettes (Sheikah Blue, Gold, Dark Grey) and micro-interactions (glows, pulses) to reward user engagement.

### User Stories
* **As a fan artist**, I want to browse a gallery of artwork, so that I can see what other community members are creating.
* **As a lore enthusiast**, I want to click on different Champions, so that I can read their backstories without reloading the page.
* **As a mobile user**, I want to be able to navigate the site using a hamburger menu, so that I can access content on my phone.
* **As a new user**, I want to be prevented from logging in with empty credentials, so that I know I need to provide valid information.

### Wireframes
I used Figma to create the initial low-fidelity wireframes for the desktop and mobile layouts.
* [Link to Figma Wireframes](https://www.figma.com/design/UzkxOSOKmHvOR0twy3dDWu/ID-ASG1-AericaGanChaiTing-BOTW-Community-Hub-Web?node-id=0-1&t=4kn7qmvUmMiRpNII-1)

## Features

### Existing Features
* **Immersive Hero Section** - A full-screen parallax intro with the game logo and a "Memory Sparkle" interaction that guides users to the story.
* **Interactive World Gallery** - Allows users to click on different Champions (Mipha, Daruk, Revali, Urbosa) to dynamically update the information panel using JavaScript, without refreshing the page.
* **Community Masonry Grid** - A responsive, pinterest-style grid layout for the "Community Hub" that displays fan art of different aspect ratios neatly.
* **Sheikah Interaction States** - Custom "Hologram" hover effects on character cutouts and buttons that glow blue/gold to mimic the game's UI.
* **Form Validation** - The Login page and Newsletter footer include JavaScript validation to alert users if they try to submit empty or invalid data.
* **Responsive Navigation** - Features a custom JavaScript-toggled Hamburger menu for mobile devices.

### Features Left to Implement
* **Merch Store** - Currently a placeholder page; future updates will include a shopping cart system.
* **Live Backend** - Currently, the "Login" and "Subscribe" features simulate success; a future update would connect this to a real database.

## Technologies Used

* **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)**
    * The project uses HTML5 for the structural framework of the web pages.
* **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)**
    * The project uses CSS3 for styling, including Flexbox and Grid for layout, and Keyframes for animations (pulse, spin, fade-in).
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
    * The project uses Vanilla JavaScript for DOM manipulation (modal toggles, data injection, form validation).
* **[VS Code](https://code.visualstudio.com/)**
    * The IDE used to develop the project.
* **[GitHub](https://github.com/)**
    * Used for version control and hosting via GitHub Pages.

## Testing

I have tested the website manually across different scenarios to ensure functionality.

### Testing Scenarios

1.  **Login Form:**
    * Go to the "Login" page.
    * Try to submit the empty form and verify that an alert "ACCESS DENIED: Please enter both username and password" appears.
    * Try to submit the form with text and verify that a "ACCESS GRANTED" success message appears and redirects to the Hub.

2.  **Champion Gallery (World Page):**
    * Go to the "World" page.
    * Click on "Mipha". Verify that the panel slides down and displays Mipha's specific text.
    * Click on "Daruk". Verify that the text updates instantly to Daruk's info and the "Selected" glow state moves to him.

3.  **Newsletter Subscription:**
    * Scroll to the footer on any page.
    * Click "SUBSCRIBE" with an empty input. Verify the Toast Notification appears red with an error message.
    * Enter text and click "SUBSCRIBE". Verify the Toast Notification appears dark with a success message and fades away after 3 seconds.

4.  **Mobile Responsiveness:**
    * Open the site on a mobile device (or Inspector "iPhone SE" view).
    * Verify the Navigation Bar links disappear and are replaced by the "Hamburger" icon.
    * Click the Hamburger icon and verify the menu slides in from the right.
    * Verify the Masonry Grid in the Hub collapses from 3 columns to 1 column.

### Bugs Encountered
* **Video Aspect Ratio:** Initially, the YouTube trailer had large black bars on wider screens. This was fixed by using the `padding-bottom: 56.25%` CSS technique to force a 16:9 ratio.
* **Missing Images:** The gallery showed broken image icons because the file extensions in the HTML (`.png`) did not match the actual files (`.jpg`). This was resolved by renaming the files and updating the code.

## Credits

### Content
* The lore descriptions for the Champions and the game story were adapted from the [Zelda Wiki](https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild).

### Media
* **Official Artwork:** Character illustrations and wallpapers were obtained from the [Official Nintendo Gallery](https://www.nintendo.com/) and the [Zelda Wiki](https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild).
* **Icons:** The Sheikah Eye and Divine Beast symbols were sourced from community vectors on DeviantArt and formatted as transparent PNGs.
* **Fonts:**
    * *The Wild Breath of Zelda* by Chequered Ink (Logo Font).
    * *Hylia Serif* by ArtsyOmni (Body Text).

### Acknowledgements
* I received inspiration for the "Boxed Header" style and the background rune patterns from the official [Nintendo Breath of the Wild website], the Pinterest style for the fanart and interactive website main page style from the [Tomb Raider Website].