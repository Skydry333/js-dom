//! task 1
///*
    const ul_list = document.body.firstElementChild.children;
    console.log(ul_list[0].textContent, ul_list[4].textContent, ul_list[1].textContent, ul_list[3].textContent, ul_list[2].textContent);
//*/

/*
    const ul_list = document.getElementById('list');
    const ul_list_1 = ul_list.firstElementChild;
    const ul_list_2 = ul_list.lastElementChild;
    const ul_list_3 = ul_list_1.nextElementSibling;
    const ul_list_4 = ul_list_2.previousElementSibling;
    const ul_list_5 = ul_list_4.previousElementSibling;

    console.log(ul_list_1.textContent, ul_list_2.textContent, ul_list_3.textContent, ul_list_4.textContent, ul_list_5.textContent)
*/

//! task 2
/*
    const heder = document.querySelector('h1');
    const first_p = document.querySelector('#myDiv').firstElementChild;
    const third_p = document.querySelector('#myDiv').children[2];
    const ul_list = document.querySelector('#myList');
    const lists = ul_list.children;
    const last_element = document.querySelector('span');


    heder.style.backgroundColor = 'rgb(142, 218, 132)';
    first_p.style.fontWeight = 'bold';
    first_p.nextElementSibling.style.color = 'red';
    third_p.style.textDecoration = 'underline';
    third_p.nextElementSibling.style.fontStyle = 'italic';
    ul_list.style.listStyle = 'none';
    for(item of lists){
        item.style.display='inline';
    }
    last_element.style.display = 'none';
*/

//! task 3
/*
    const button = document.querySelector('.button');
    const div = document.querySelector('.my_button');

    button.addEventListener("mouseenter", function (event) {
        div.insertAdjacentHTML(
            'beforeend',
            `<p>Mouse on me!</p>`
        );
    });
    button.addEventListener("mouseleave", function (event) {
        div.insertAdjacentHTML(
            'beforeend',
            `<p>Mouse is not on me!</p>`
        );
    });
    button.addEventListener("mousedown", function (event) {
        div.insertAdjacentHTML(
            'beforeend',
            `<p>I was pressed!</p>`
        );
    });
*/