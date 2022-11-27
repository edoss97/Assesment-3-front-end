console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('click', () => { alert('Submitted Successfully')})

let form1 = document.querySelector('#picture1');

form1.addEventListener('mouseover', () => {alert('nice hair!')});