import Modal from './modal.js';

const modal = Modal();

// eslint-disable-next-line no-undef
const modalTitle = document.querySelector('.modal h2');
// eslint-disable-next-line no-undef
const modalDescription = document.querySelector('.modal p');
// eslint-disable-next-line no-undef
const modalButton = document.querySelector('.modal button');


//Pegar todos os botões que existe com a classe check
// eslint-disable-next-line no-undef
const checkButtons = document.querySelectorAll('.actions a.check'); 

checkButtons.forEach(button => {
	//adicionar a escuta
	button.addEventListener('click', handleClick);
});


/*Quando o botão delete for clicado ele abre a modal */
// eslint-disable-next-line no-undef
const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach(button => {
	button.addEventListener('click', (event) => handleClick(event, false));
});

function handleClick(event, check = true){
	event.preventDefault();
	const text = check ? 'Marcar como lida' : 'Excluir';
	const slug = check ? 'check' : 'delete';
	// eslint-disable-next-line no-undef
	const roomId = document.querySelector('#room-id').dataset.id;
	const questionId = event.target.dataset.id;

	// eslint-disable-next-line no-undef
	const form = document.querySelector('.modal form');
	form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

	modalTitle.innerHTML= `${text} esta pergunta`;
	modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
	modalButton.innerHTML= `Sim, ${text.toLowerCase()}`;
	check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    
	//abrir modal
	modal.open();
}

// import Modal  from './modal.js';

// const modal = Modal()

// const modalTitle = document.querySelector('.modal h2');
// const modalDescription = document.querySelectorAll('.modal p');
// const modalButton = document.querySelector('.modal button')

// // Pegar todos os botões que existem como a classe check
// const checkButtons = document.querySelectorAll('.actions a.check');

// // checkButtons.forEach(button => {
// //   // Adicinar a escuta
// //   button.addEventListener('click', event =>{

// //     modalTitle.innerHTML = 'Marcar como lida'

// //   // Abrir modal
// //     modal.open()
// //   });
// // });

// checkButtons.forEach(button => {
//   button.addEventListener('click', handleClick)
// })

// // Quando o botão delete for clicado ele abre a modal
// const deleteButton = document.querySelectorAll('.actions a.delete');

// // deleteButton.forEach(button => {
//      // Adicinar a escuta
// //   button.addEventListener('click', event => {

// //     modalTitle.innerHTML = 'Excluir essa pergunta'

// //     modal.close
// //   })
// // });

// deleteButton.forEach(button => {
//   button.addEventListener('click', handleClick)
// })

// function handleClick(event) {
//   // abrir modal
//   modal.open()
// }