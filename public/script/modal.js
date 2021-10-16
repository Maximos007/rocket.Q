export default function Modal(){

	// eslint-disable-next-line no-undef
	const modalWrapper = document.querySelector('.modal-wrapper');
	// eslint-disable-next-line no-undef
	const cancelButton = document.querySelector('.button.cancel');

	cancelButton.addEventListener('click', close);

	function open(){
		//funcionalidade de atribuir a classe active para a modal
		modalWrapper.classList.add('active');
	}
	function close(){
		//funcionalidade de remover a classe active da modal
		modalWrapper.classList.remove('active');
	}

	return{
		open,
		close
	};
}

// export default function Modal() {

//   const modalWrapper = document.querySelector('.modal-wrapper');
//   const cancelButton = document.querySelector('.button.cancel');

//   cancelButton.addEventListener('click', close)

// 	function open() {
// 		// Funcinalidade de atribuir a classe active para o modal
// 		modalWrapper.classList.add('active');
// 	}

// 	function close(){
// 		// Funcinalidade de remover a classe active do modal
//     modalWrapper.classList.remove('active')
// 	}

// 	return {
// 		open,
// 		close
// 	};
// };