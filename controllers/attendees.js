const allPeople = require('../models/people.js');



// Create a function which is a "controller", it
// handles a request, writing the response.
function listAttendees(request, response) {
  // Store the value of the `q` GET parameter in the
  // `query` variable.
    const query = request.query.q;
    var queryFilterlist = allPeople.filter(function(people){
            if(query != undefined)
            {
              return people.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
            else
            return people;
    });
    
    const contextData = {
        title: 'List of attendees',
        peopleMatchignQuery: queryFilterlist,
    };
    response.render('attendees', contextData);
}



module.exports = {
    listAttendees,
};
