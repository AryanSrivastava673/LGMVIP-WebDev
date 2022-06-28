// let storedEvents = [];

function storeValues(e) {
    e.preventDefault();
  
    const newEventDetails = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      website: document.getElementById('website').value,
    }
    storedEvents.push(newEventDetails);
    
    console.log('storedEvents', storedEvents);
    
    document.getElementById("students").innerHTML = "";
    storedEvents.forEach(function(student) {
      document.getElementById("students").insertAdjacentHTML( 'beforeend', "<li>" + "<div>Name: " + student.name + "</div>" + "<div>Email: " + student.email + "</div>" + "<div>GitHub: " + student.website + "</div>" + "</li>");
    });

}
