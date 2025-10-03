Daily Verse - Bible Inspiration Generator
A minimalist, elegant web application that displays random Bible verses with contextual explanations. Built with vanilla JavaScript and featuring a refined, aesthetic UI design.
Show Image
✨ Features

Random Bible Verses - Fetches verses from a curated selection of meaningful Scripture passages
Live API Integration - Uses the Bible API to retrieve authentic biblical text
Contextual Explanations - Provides background and meaning for each verse
Copy to Clipboard - Easy sharing of verses
Responsive Design - Works beautifully on desktop, tablet, and mobile devices
Minimalist Aesthetic - Clean, elegant UI with subtle animations
No Dependencies - Pure vanilla JavaScript, HTML, and CSS

🚀 Demo
Live Demo (Add your GitHub Pages link here)
📸 Screenshots
Desktop View
Show Image
Mobile View
Show Image
🛠️ Technologies Used

HTML5 - Semantic markup
CSS3 - Modern styling with animations and transitions
Vanilla JavaScript - No frameworks or libraries
Bible API - Free REST API for Bible verses (bible-api.com)

📦 Installation

Clone the repository:

bashgit clone https://github.com/thotcher/daily-verse.git

Navigate to the project directory:

bashcd daily-verse

Open index.html in your browser:

bash# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
Or simply drag and drop the index.html file into your browser.
🌐 Deployment
GitHub Pages

Push your code to GitHub
Go to repository Settings → Pages
Select the branch (usually main) and root directory
Click Save
Your site will be available at https://thotcher.github.io/daily-verse/

Other Hosting Options
This is a static site that can be hosted anywhere:

Netlify - Drag and drop deployment
Vercel - Connect your GitHub repo
Cloudflare Pages - Fast global CDN
Any web server - Just upload the HTML file

📖 Usage

Generate Verse - Click "New Verse" to fetch a random inspirational Bible verse
Read Context - Scroll down to understand the background and meaning
Copy Verse - Click "Copy" to save the verse to your clipboard
Share - Paste the verse anywhere you'd like to share inspiration

🎨 Customization
Color Scheme
The color palette can be modified in the CSS section:
css/* Main colors */
background: #faf9f7;     /* Warm off-white */
text: #2c2c2c;           /* Dark gray */
accent: #5a5550;         /* Muted brown */
highlight: #d7b491;      /* Soft tan */
Font Choices
Change the typography by modifying these CSS properties:
cssbody {
    font-family: 'Georgia', 'Times New Roman', serif;
}

button, .header p {
    font-family: 'Segoe UI', sans-serif;
}
Adding More Verses
To expand the verse collection, edit the popularVerses array in the JavaScript:
javascriptconst popularVerses = [
    { book: 'John', chapter: 3, verse: 16 },
    { book: 'Psalm', chapter: 23, verse: 1 },
    // Add more verses here
];
🔌 API Reference
This project uses the Bible API:
GET https://bible-api.com/{book}+{chapter}:{verse}
Example:
GET https://bible-api.com/John+3:16
Features:

Free to use, no API key required
Returns verses in JSON format
Supports multiple Bible translations
CORS enabled for client-side requests

🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a new branch (git checkout -b feature/improvement)
Make your changes
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/improvement)
Open a Pull Request

Ideas for Contributions

 Add more Bible verses to the collection
 Support for multiple Bible translations
 Dark mode toggle
 Share to social media functionality
 Verse of the day based on date
 Search functionality for specific verses
 Bookmarking favorite verses
 Offline support with service workers

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Bible API - For providing free access to Scripture
Typography - Georgia and Segoe UI fonts
Design Inspiration - Minimalist web design principles

📧 Contact
Project Link: https://github.com/thothcher/daily-verse
🌟 Show Your Support
If you found this project helpful, please give it a ⭐️!

Made with ❤️ and Scripture