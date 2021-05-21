/*
something when you have to use a third part library that is
written in JavaScript, its implements the *.d.ts (definition file)
to give information about what does the methods written in js
example:

    import lodash from 'lodash';

lodash is a js library that doesn't have implementation in ts
but has a package definition to give information about how to
use the library and make it compatible with typescript
solution:

    npm install --save-dev @types/lodash

in other cases where this package doesn't exists, you will have to use
the keyword 'declare' to tell ts the variable/package exists, in the root
folder [src] create a file [decs.d.ts]
example:

    declare module 'lodash'
 */
