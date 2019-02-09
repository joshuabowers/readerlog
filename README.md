# ReaderLog
*An app for tracking your reading habits.*

## Premise
1. You have a lot of books. You sometimes forget that you've read some of them. You want to ensure that any given book you might be interested in reading is one you haven't already read.
2. You want to know how much time it takes you to read books. You might be curious to see how you compare to other people---the relative speed at which you read. At the very least, you might be interested in comparing the amount you read between months or years.
3. You are interested in approximating how long it might take to read a new book.

## Features
1. **Book Search**: using a book lookup API (e.g. Google Books), allow users to locate books they wish to add into their library. Bonus points for matching exact editions or formats.
2. **User Library**: the collection of books a user claims to have. Books within a library can have various mutually exclusive states: *unread*, *read*, *wishlist*, *abandoned*.
3. **Currently Read Books**: a subset of a user library is the books they are currently reading. Users can read multiple books at once.
4. **Session Management**: users can opt in to a keeping track of the amount of time they have spent reading a given book; this is ideally kept track of in *sessions*, which start when the user picks up the book to start reading, and end when the user puts down the book to stop. The total time a user has spent reading that book is the sum of the difference between the start and end times for each session. Sessions can also keep track of which page the user is on.
5. **User Stats**: a series of charts can be generated to allow users to visualize their reading habits. There would be charts for each book (e.g. pages read per session, with average) as well as for account wide metrics (e.g. pages read per year). Global charts, accumulating data from all users, would ideally also be available.
6. **Lifecycles**: Each book within a user's library that has been read will have an associated lifecycle object: this would be a collection of the sessions from when the user started the book to when they either finished or abandoned it.

## User Experience
*Above all else: KISS! A muddy UI makes for an unintuitive UX.*

1. Search results, libraries, and currently read books loan themselves quite naturally to grid-based layouts. These should be presented as cleanly as possible: a cover image with title underneath. Preferably, the titles would be vertically base aligned with each other. Grid system should be flexible: ideally, using the now standard CSS3 Grids with polyfills.
    1. Subtle context-specific alterations to the grid view would exist.
        1. Library and currently read books would have a small (e.g. ~5px) progress bar along the bottom of a book to indicate progress through that work. Completed books could alter the color of this bar to green, and it would run the length of the cover image; incomplete books would have a blue color and span a percentage of the length dependent upon page count/session-progress. If the user has not supplied page metrics in sessions, the bar would fill the length but have a stripped pattern. If the book is marked as **abandoned** the color would be red.
        2. Search results and library would have search and sort functionality: the user can enter text into a search bar to cull the books they are looking at, while the sort functionality would arrange the grid to match the ordering. Search should cover titles and authors. Sorting would replace the title text with whatever sort category is selected (e.g. from a selection box). Default sort: title, ascending.
    2. Clicking on a cover/title tile will open context-specific information about that book. This would likely animate the grid view to the left, while the details get animated in from the right. This would also update a breadcrumb list kept at the top of the UI. The details view would contain a means (obvious button is obvious) to go back to grid view.
        1. **Search results**:
            1. **alternate editions**: a list of known other editions of that book.
            2. **related books**: for other books by that author, in that series, or of that genre.
            3. **simplified global stats**: how many others have read that book, average completion time, rating, etc.
            4. **add to library**: prominent button to add the book to the user's library. Button would animate/change color/text to suggest completion. Upon success, the user can click a link to manage a session for that book.
        2. **library**:
            1. User specific stats for that book would be displayed, if the book has been started. The user can click a button to view global stats.
            2. If the book is not currently being read, there will be a large button to tell the system the user wishes to begin logging the book. (NOTE: Major Implication: book sessions should be tied to a lifecycle object for each book; if a user wants to reread a book at some point in the future, they should not lose historical data.) If the book had been previously read, the new lifecycle button would be marked **Reread**, rather than **Read**.
            3. If the book is currently being read, there would be three buttons: **Finish**, **Abandon**, **Start/End Session**. The first two mark the book's state to either **read** or **abandoned**; the latter toggle would immediately start or stop a reading session.
            4. If the book has lifecycles, there would be a section of session logs available.
        3. **currently reading**:
            1. A prominent button to Start or End the current session.
            2. A spinner for inputing the current page number. For **Start**, this should default to either 1 or the previous session's page number. For end, this should default to the start page number for the session.
            3. A checkbox would exist next to the button: if unchecked, the start/end time will be the current timestamp; if checked, it would reveal a time/date selection for the user to specify (roughly) when they began or stopped reading.
            4. A smaller button to view the book within the user's library.
            5. Clicking Start or End would toggle the button state and provide a nearby notification that the session began/ended.
2. If User is currently not logged in:
    1. UI Features a **Get Started** section that details some concepts about the app. This would be a mini tutorial on how to use the system. Would have a link to create an account.
    2. Three top books currently being read globally?
    3. Log in link in the site header.
3. If User is currently logged in:
    1. Site header
        1. **User account name**: clicking brings up settings and stats for the user.
        2. **Log out** button.
        3. **Search button**: clicking toggles a search box, fixed under the site header. Search box defaults to hidden, unless the user has no books in their library. Search button is hidden if looking at account information. Search box docks right-hand side of the header.
        4. **Breadcrumb** bar: fixed, docks left-hand side of the header. Hidden if at top level. Otherwise, animates in, shows a separated list of locations leading back up to top.
    2. App presents the user with a unified library grid view: this contains a searched and sorted list of books of interest to the user. Search will collate both the user's library and an API search of books which match the user's query. Any _current reads_ books which match the current search query will be filtered to the top of the list. Books would be grouped together by sort method. (In the case of _current reads_, those would be grouped under **Current**, and sorted to the top of the groups.) Group headers would sticky under site header. If a search query has not been entered, no API search is performed, and the results will only be from the user's library. _Note: Abandoned books sort into the broader library, and not into **Current**._
4. When a user signs up, there should exist a wizard to walk them through book discovery. This should help them get books into their library, as well as orient them through using the app after the sign up is complete.
    1. Multi-stage wizard:
        1. **email / password**. Do we want user names? Real name info? Email sufficient? Does the site provide social interaction? If so, abstracting emails would be desirable.
        2. **Favorite Genre**: to give some idea of the types of books users can discover.
        3. **Favorite Author**
        4. **Favorite Book**

## Models

1. **User**: has a library and server sessions.
2. **Library**: has a set of books, (along with views on those books: **current_reads**, **available**, **wishlist**), and aggregate reading stats.
3. **Book**: has a set of lifecycles, reading stats for that book, cover image url, title, authors array, genre, status (**unread**, **wishlist**, **read**, **abandoned**).
4. **Lifecycle**: a set of sessions, start and end dates, reading stats for that lifecycle.
5. **Session**: Describes a duration of time and number of pages read of a given book. Belongs to a Lifecycle. _Note: This will likely need to be renamed something else, to avoid either a reserved name clash in Rails, or to avoid a clash with the obvious name for when a User is logged in._
    - _Addendum: looking back at code for the predecessor app which inspired this, **Session**, as defined here, was referred to at **Event**, which makes just as much sense as anything. So, they'll be called **Event**._

## Components

1. **Library**
2. **Header**
    1. **LoggedInHeader**
    2. **LoggedOutHeader**
3. **Book**
    1. **BookTile**
    2. **BookDetail**
4. **SearchBar**

## Technology

### Backend
1. **Rails**: for hosting the app, providing API endpoints for the frontend, acting as websocket host, providing database access, and various other functions.
2. **ActionCable**: primary means for communication with the frontend. _Question: Is this even really needed? The app doesn't really need a significant amount of responsiveness, and JSON responses on a standard rails Controller would likely have minimal overhead. Need to consider._
3. **MongoDB**: for keeping all the data. ALL OF IT. OM NOM NOM NOM. Will likely want to think about doing some map/reduce aggregation to form custom data for global statistics.
4. **Book Search**: unless something else comes along, Google's Books API should be more than sufficient for the app's needs. There are some branding/usage constraints that will need to be incorporated into the project.

### Frontend
1. **React**: this should help form a responsive, clean, agile, animated, user-centric, frontend-centric experience.
2. **Redux**: for keeping various data to feed into the react components. Also should help with app responsiveness.
3. **Charts**: again, unless something comes along vastly better, look into using Google's Charts API. Again, branding/usage constraints.
4. **Mobile-friendly**: responsive design with modern CSS should help mitigate a mobile friendly design. Primary idea is to do some light media/browser sniffing in CSS to alter things for mobile environments. Preference would be towards collapsing grids into smaller columns or rows and scaling up the size of many of the interactive aspects of the site, buttons in particular.
