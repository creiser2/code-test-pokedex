Pokedex - Carl Reiser


# Design Decisions
- I used React Router for basic routing. The router feeds prop info from root, so you cannot just jump to a specific "/001" without error. I could fix this to use a callback from the root to get the data, but it feels hacky.

# Searching & filter
- I decided to use a hash map for the filters. Keys are added to the map when boxes are checked. Keys are removed from the map when they are unchecked. In the filter itself, we iterate over the keys and see if they are in the JSON strengths & weaknesses accordingly.
