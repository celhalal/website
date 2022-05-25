// data inserted into html using JS
const internInfo = {
    name: 'Cathy El-Halal',
    role: 'Development Intern',
    history: 'Cathy El-Halal is currently a junior doing a double major in Computer Science and Business at Wheaton College, MA. Cathy has a great interest in full-stack development and artificual intelligence.',
    langList: 'Some of the technologies Cathy has been working with:',
    languages: ['C++', 'Python', 'SQL', 'MIPS', 'JavaScript', 'CSS', 'HTML', 'Shell Script']
};

// insert name into h3
let title = document.getElementById('name');
let h3 = document.createElement('h3');
h3.innerText = internInfo.name;
title.appendChild(h3);

// inster role name into h4
let role = document.getElementById('title');
let h4 = document.createElement('h4');
h4.innerText = internInfo.role;
title.appendChild(h4);

// insert history & language List into h5
let strings = document.getElementById('parg1');
let h5 = document.createElement('h5');
h5.innerText = internInfo.history;
strings.appendChild(h5);





// insert ul of languages
let list = document.getElementById('teck-stack');
internInfo.languages.forEach((el)=>{
    let li = document.createElement('li');
    li.innerText = el;
    list.appendChild(li);
});