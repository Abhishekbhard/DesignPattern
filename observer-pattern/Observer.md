## Observer Pattern:-

With the observer pattern we can subscribe the **object**, the observer , to another object, called <strong>Observable</strong>.

An observable object usually contain 3 important parts:-

- **Observer**:- An array of observer that will get notifies whenever an event occour.
- **Sbscribe()** :- A method in order to add observer to observer list
- **unsubscribe()**:- A method to remove observer from the observer list.
- **notify()**:- A method to notify all the observer whenever a event occour.
