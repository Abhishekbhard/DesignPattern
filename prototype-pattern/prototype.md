### Prototype Chain:-

When we try to access a property that not direclty available on the object, javascript recursively walks down
to all the objects that \_\_proto\_\_ point to untils it's find the property.

### Object.create():-

Object.create() method let us create new object, to which we can explicitly pass the value of its prototype.
