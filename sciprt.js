let currentVerse = null;
let isLoading = false;

// Popular and meaningful verses to randomly select from
const popularVerses = [
    { book: 'John', chapter: 3, verse: 16 },
    { book: 'Philippians', chapter: 4, verse: 13 },
    { book: 'Proverbs', chapter: 3, verse: 5 },
    { book: 'Psalm', chapter: 23, verse: 1 },
    { book: 'Romans', chapter: 8, verse: 28 },
    { book: 'Psalm', chapter: 46, verse: 10 },
    { book: 'Jeremiah', chapter: 29, verse: 11 },
    { book: 'Matthew', chapter: 11, verse: 28 },
    { book: 'Isaiah', chapter: 41, verse: 10 },
    { book: 'Psalm', chapter: 119, verse: 105 },
    { book: '2 Timothy', chapter: 1, verse: 7 },
    { book: 'Joshua', chapter: 1, verse: 9 },
    { book: 'Proverbs', chapter: 16, verse: 3 },
    { book: 'Matthew', chapter: 6, verse: 33 },
    { book: 'Romans', chapter: 12, verse: 2 },
    { book: '1 Corinthians', chapter: 13, verse: 4 },
    { book: 'Ephesians', chapter: 2, verse: 8 },
    { book: 'James', chapter: 1, verse: 5 },
    { book: 'Psalm', chapter: 34, verse: 18 },
    { book: 'Galatians', chapter: 5, verse: 22 }
];

async function generateVerse() {
    if (isLoading) return;

    isLoading = true;
    const btn = document.getElementById('generateBtn');
    const container = document.querySelector('.container');

    btn.disabled = true;
    btn.innerHTML = '<span>Loading</span><div class="spinner"></div>';
    container.classList.add('loading');

    try {
        // Select a random verse from our curated list
        const randomVerse = popularVerses[Math.floor(Math.random() * popularVerses.length)];

        // Fetch from Bible API
        const response = await fetch(
            `https://bible-api.com/${randomVerse.book}+${randomVerse.chapter}:${randomVerse.verse}`
        );

        if (!response.ok) throw new Error('Failed to fetch verse');

        const data = await response.json();
        currentVerse = {
            text: data.text.trim(),
            reference: data.reference
        };

        // Display the verse
        document.getElementById('verseText').textContent = currentVerse.text;
        document.getElementById('verseReference').textContent = currentVerse.reference;

        // Generate contextual explanation
        const explanation = generateExplanation(randomVerse.book, randomVerse.chapter);
        document.getElementById('explanationText').textContent = explanation;
        document.getElementById('explanation').style.display = 'block';

    } catch (error) {
        console.error('Error:', error);
        showNotification('Unable to fetch verse. Please try again.', true);
        document.getElementById('verseText').textContent = 'Unable to load verse. Please try again.';
        document.getElementById('verseReference').textContent = '';
        document.getElementById('explanation').style.display = 'none';
    } finally {
        isLoading = false;
        btn.disabled = false;
        btn.innerHTML = '<span>Generate New Verse</span>';
        container.classList.remove('loading');
    }
}

function generateExplanation(book, chapter) {
    const explanations = {
        'John': 'The Gospel of John emphasizes Jesus as the Son of God and the path to eternal life. This passage reveals the nature of God\'s love and His plan for humanity\'s salvation.',
        'Philippians': 'Paul\'s letter to the Philippians was written from prison, yet it overflows with joy and encouragement. This verse reminds us that our strength comes from Christ in all circumstances.',
        'Proverbs': 'The Book of Proverbs contains timeless wisdom for daily living. This passage encourages trust in God\'s guidance rather than relying solely on human understanding.',
        'Psalm': 'The Psalms are songs and prayers expressing the full range of human emotion before God. This psalm offers comfort, worship, and trust in God\'s faithful character.',
        'Romans': 'Paul\'s letter to the Romans is a theological masterpiece explaining salvation and Christian living. This passage reveals God\'s sovereignty and purpose in all things.',
        'Jeremiah': 'Jeremiah prophesied during difficult times, yet God\'s messages through him contain hope and promise. This verse assures us of God\'s good plans for His people.',
        'Matthew': 'Matthew\'s Gospel presents Jesus as the promised Messiah. His teachings offer rest, peace, and practical wisdom for those who follow Him.',
        'Isaiah': 'Isaiah prophesied about the coming Messiah and God\'s faithfulness to His people. This passage offers encouragement and strength in times of fear and uncertainty.',
        'Joshua': 'Joshua led Israel into the Promised Land with courage derived from God\'s presence. This verse reminds us that God is with us wherever we go.',
        '2 Timothy': 'Paul\'s final letter to Timothy contains urgent encouragement for faithful ministry. This passage addresses fear and reminds us of the spirit God has given us.',
        '1 Corinthians': 'Paul addresses various issues in the Corinthian church with wisdom and correction. This famous passage defines what true love looks like in action.',
        'Ephesians': 'Paul\'s letter to the Ephesians explains the believer\'s identity in Christ. This passage clarifies that salvation is a gift of grace, not something we earn.',
        'James': 'James offers practical wisdom for living out faith. This verse encourages believers to seek God\'s wisdom through prayer.',
        'Galatians': 'Paul defends salvation by grace and describes life in the Spirit. This passage lists the beautiful character qualities that the Holy Spirit produces in believers.'
    };

    return explanations[book] || 'This passage from Scripture offers timeless wisdom and encouragement for believers. God\'s Word is living and active, speaking to our hearts and guiding our paths.';
}

function copyVerse() {
    if (!currentVerse) {
        showNotification('Please generate a verse first!', true);
        return;
    }

    const textToCopy = `${currentVerse.text}\n\n- ${currentVerse.reference}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification('Verse copied to clipboard! ✓');
    }).catch(() => {
        showNotification('Failed to copy. Please try again.', true);
    });
}

function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'notification' + (isError ? ' error' : '');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Generate initial verse on load
window.onload = () => {
    setTimeout(generateVerse, 500);
};