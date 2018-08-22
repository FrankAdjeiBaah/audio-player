// Rendering dom Function
const renderDom = () => {
	const player = document.querySelector('.player');
	let background = createEl('div');
	background.classList.add('player-background');

	function createEl(text){
		return document.createElement(text);
	}
}




renderDom();