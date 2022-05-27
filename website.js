// Name: Cathy El-Halal
// Project name: Internship Startup
// Purpose: to put in practice all the articles Daniel sent and apply my knowledge 
//          of using Git (meeting with Ed).
// Created a website to introduce myself using JavaScript, CSS, and HTML.


// Created an object with arrays that contain information about myself
// More efficient to store it this way for asy access and reduce the amount of variables
const internInfo = {
    name: 'Cathy El-Halal',
    role: 'Development Intern',
    history: ['Cathy El-Halal is currently a junior doing a double major in Computer Science and Business at Wheaton College, MA. Cathy has a great interest in full-stack development and artificual intelligence.','Some of the technologies Cathy has been working with:'],
    languages: ['C++', 'Python', 'SQL', 'MIPS', 'JavaScript', 'CSS', 'HTML', 'Shell Script'],
    credits: ['Built and Designed by Cathy El-Halal', 'All rights reserved. ©']
};


// insert my name into a newly created div (nested in the metadata div)
const data = document.getElementById("metadata");   // metadata is a div in my HTML
const name = document.createElement('div');         // create a div inside the metadata div
name.id = 'name';                                   // assign an id to the new element for CSS purposes
name.innerText = internInfo.name;
data.appendChild(name);                             // insert it in the HTML (web)

// insert my role name into a newly created div (nested in the metadata div, under the div we created above)
const role = document.createElement('div');       
role.id = 'role';                                   
role.innerText = internInfo.role;
data.appendChild(role);

// insert texts (history) in the description div in the HTML
var parg = document.getElementById('description');
internInfo.history.forEach((el)=>{
    var div = document.createElement('div');    // for every element, a new div will be created
    div.innerText = el;
    parg.appendChild(div);                      // add el to the HTML (web), in this case, el represents internInfo.history[i]
    var newLine = document.createElement('br'); // new line in HTML (/n)
    parg.appendChild(newLine);                  // need to append it to actually display
})

// insert ul of languages
var languages = document.getElementById('list');
internInfo.languages.forEach((el)=>{
    const li = document.createElement('li');    // for every list number, a new li will be created
    li.innerText= el;                           // add el to the HTML (web), in this case, el represents internInfo.languages[i]
    languages.appendChild(li);                  // need to append it to actually display
});

// insert credits
var final = document.getElementById('footer');
internInfo.credits.forEach((el)=>{
    var newLine = document.createElement('br'); // new line in HTML (/n) then append it
    final.appendChild(newLine);
    var foot = document.createElement('footer');
    foot.innerText = el;
    final.appendChild(foot);                    // need to append it to actually display
});

// Function to alert the user that they are moving to another page when they click the infor logo on the top left corner.
//       'About', or 'Infor Business Development' (which are all linked to different webpages).
const alertMessage = () => {
    alert("Switching Webpages");
};


