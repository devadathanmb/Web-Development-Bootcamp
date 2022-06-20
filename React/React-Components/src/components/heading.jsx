//This is needed for all react component
import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}
//Default Exports: Default exports are useful to export only a single object, function, variable.
//During the import, we can use any name to import.
//Named Exports: Named exports are useful to export several values.
//During the import, it is mandatory to use the same name of the corresponding object.

//This is a default export
export default Heading;

//This is a named export
// export {Heading as pageHeading};
