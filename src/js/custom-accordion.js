let accordionBlock = document.querySelector('.custom-accordion');

if(accordionBlock){

	let accordionCardsHead = accordionBlock.querySelectorAll('button');
	let accordionCardsContent = accordionBlock.querySelectorAll('article');
	
	for(let i= 0; i < accordionCardsHead.length; i++){
	
		accordionCardsHead[i].addEventListener('click', function(e){
			
			let accordionBtnArr = accordionBlock.querySelectorAll('button');
			for(let item of accordionCardsHead){
				if(item !== e.target){
					item.setAttribute('data-state', 'hide');
					item.nextElementSibling.classList.remove('show');
					
				}
				else{
					console.log(item.nextElementSibling);
					let thisAttrValue = item.getAttribute('data-state');
					console.log(thisAttrValue);
					let thisSibling = item.nextElementSibling
					if(thisAttrValue == 'hide'){
						item.setAttribute('data-state', 'show');
						thisSibling.classList.add('show');
					}
					else{
						item.setAttribute('data-state', 'hide');
						item.nextElementSibling.classList.remove('hide');
						thisSibling.classList.remove('show');
					}
				}
			}
			
		})
	}
}