# Assumptions & Decisions

## Data Fetching (SWR + Axios)

    I went with SWR and Axios because it's a powerful combo for handling remote data. SWR makes it really easy to manage loading and error states out of the box. Specifically, I used its onLoadingSlow and revalidateOnReconnect options to handle the "slow connection" and "reconnect" requirements mentioned in the challenge.

## Search and Filtering Strategy

    I decided to handle filters in two different ways to keep the app fast:

    User ID: This filter happens at the API level. It’s more efficient to ask the server for a specific user's posts than to download everything.

    Title Search: I did this on the client side. Since we already have the posts, searching through them in the browser feels instant for the user, with no extra loading spinners.

## State Management (URL Params)

    Instead of using complex global states or Context, I used URL Search Params. I believe the URL should be the "source of truth". This way, if you refresh the page or share the link with someone else, the filters and the current page stay exactly where you left them.

## Debouncing

    To avoid spamming the API every time someone types a single letter, I added a debounce logic. This ensures that the app only triggers a new fetch or updates the URL once the user has stopped typing for 500ms. It makes the UI feel much smoother.

## Pagination

    Since the API returns a lot of posts, I added a simple pagination system. It’s better for the browser to render 10 cards at a time than 100.

    - Optimistic Pagination (current issue): Since the API does not provide a header with the total amount of records, I implemented an optimistic navigation logic. If the current page returns the maximum number of items (10), the "Next" button remains enabled. If the next page is empty, the UI handles it by showing the "No posts found" state.

## Feedback & UX

    Sonner (Toasts): I used Sonner to show a quick warning if the connection is taking too long (more than 3 seconds). It’s a nice way to let the user know what’s happening.

    Skeletons: I added Skeleton cards to show the layout while the data is still loading, which feels much more professional than a blank screen or a simple "Loading..." text.

## Tests

    Implemented some simple tests using Jest to enssure the cards correct render and as well give some consistency to the project by installing the necessary librarys to test whenever its needed.
