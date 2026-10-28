# PrepSphere

Exam-prep web app (static HTML/CSS/JS, no build step).

## Run
Open the folder in VS Code and use **Live Server** on `index.html` (port 5501), or:

    python3 -m http.server 5501

then visit http://localhost:5501

## Structure
    prepsphere/
    |-- index.html                 Entry point (redirects to pages/home.html)
    |-- README.md
    |-- .gitignore
    |-- .vscode/settings.json      Live Server port 5501
    |-- pages/                     All screens (links between them are relative)
    |   |-- home.html              Dashboard
    |   |-- study-books.html       Study books
    |   |-- analysis.html          Analysis (incl. mock-test performance card)
    |   |-- notes.html             Notes
    |   |-- PYQ.html               Previous year questions
    |   |-- mock-test.html         Mock test
    |   |-- history.html           Mock test history
    |   |-- wishlist.html, achievement.html, notifications.html
    |   |-- View.html              Book / paper viewer
    |   `-- section.html           Settings, Premium, Help, Downloads
    `-- assets/
        `-- js/
            |-- navigation-fix.js  Shared navigation, theme (PSTheme), layout layer
            |-- ps-data.js         Shared data helpers
            |-- question-bank.js   Question bank used by mock-test.html
            `-- back.js            Back-button helper (currently not referenced)

CSS is still inline in each page (kept intact). Fonts load from Google Fonts.

## Mock test flow
1. Pick a type: Full Syllabus, Chapter, Subject, Random, Daily Challenge.
2. Configure it (questions, difficulty, time), take it, submit.
3. The result is saved automatically and shows in History and Analysis.

Test codes look like JEE-MAIN-FULL-T01, NEET-PHY-CHE-T02, JEE-MAIN-RND-1SI19.

## Question sources (assets/js/question-bank.js)
PYQ (from PYQ.html + papers added on the PYQ page), Study Books (BOOK array), Practice (MOCK array + GEN templates).

## localStorage keys
- `ps_exam` selected exam
- `ps_theme` light / dark
- `ps_mock_history` saved mock tests
- `ps_pyq_papers` papers added on the PYQ page
