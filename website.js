// data inserted into html using JS
const internInfo = {
    name: 'Cathy El-Halal',
    role: 'Development Intern',
    history: ['Cathy El-Halal is currently a junior doing a double major in Computer Science and Business at Wheaton College, MA. Cathy has a great interest in full-stack development and artificual intelligence.','Some of the technologies Cathy has been working with:'],
    languages: ['C++', 'Python', 'SQL', 'MIPS', 'JavaScript', 'CSS', 'HTML', 'Shell Script'],
    credits: ['Built and Designed by Cathy El-Halal', 'All rights reserved. ©']
};


// insert name into h3
const data = document.getElementById("metadata");
const name = document.createElement('div');
name.id = 'name';
name.innerText = internInfo.name;
data.appendChild(name);

// insert role name into h4
const role = document.createElement('div');
role.id = 'role';
role.innerText = internInfo.role;
data.appendChild(role);

// insert texts (history)
var parg = document.getElementById('description');
internInfo.history.forEach((el)=>{
    var div = document.createElement('div');
    div.innerText = el;
    parg.appendChild(div);
    var newLine = document.createElement('br');
    parg.appendChild(newLine);
})

// insert ul of languages
var languages = document.getElementById('list');
internInfo.languages.forEach((el)=>{
    const li = document.createElement('li');
    li.innerText= el;
    languages.appendChild(li);
});

// insert credits
var final = document.getElementById('footer');
internInfo.credits.forEach((el)=>{
    var newLine = document.createElement('br');
    final.appendChild(newLine);
    var foot = document.createElement('footer');
    foot.innerText = el;
    final.appendChild(foot);
})