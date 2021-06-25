let mainImgs = document.querySelector('.screen-img img')
let belowImgs = document.querySelectorAll('.ice-cream .below-img')
let branches = document.querySelector('.navbar .nav')
let getColumn = document.querySelector('.row .column')

//addEventListeners
//branches popup
document.addEventListener('click',e=>{
    if(e.target.className == 'branch'){
        let popup = document.createElement('div')
            popup.className = 'popup'
        let popupContainer = document.createElement('div')
            popupContainer.className = 'container'
        document.body.appendChild(popup)
        popup.appendChild(popupContainer)
        let branchesArea = ['Cairo','Giza','Sohag','Assuit','Alexandria','Aswan','Suez','faiyum']
        let branchesName = ['Al-abd-1','Al-abd-2','Sohag-ice','F.I.C','Alex-cream','Al-abd-3','Ice-cream pro','Faiyum-Ice-cream']
        for(let i = 0; i < 8;i++){
            let labels = document.createElement('label')
            let labelsName = document.createTextNode(branchesArea[i]+" : ")
            let names = document.createElement('span')
            let namesContent = document.createTextNode(branchesName[i])
            labels.appendChild(labelsName)
            names.appendChild(namesContent)
            popupContainer.appendChild(labels)
            popupContainer.appendChild(names)
        }
        let closeBtn = document.createElement('span')
            closeBtn.className = 'close'
        let closeBtnContent = document.createTextNode('X')
        closeBtn.appendChild(closeBtnContent)
        popupContainer.appendChild(closeBtn)
    }
    //close branches popup
    if(e.target.className == 'close'){
        document.querySelector('.popup').remove()
    }
})
//add img to screen-img 
document.addEventListener('click',e=>{
    e.preventDefault()
    if(e.target.className == 'below-img'){
        //exchange showing src with clicked element 
        mainImgs.src = e.target.src
        e.target.classList.add('active')
    }
    //demand
    if(e.target.className == 'demand-btn'){
        let demandPopup = document.createElement('div')
            demandPopup.className = 'demand-popup'
        let demandPopupContainer = document.createElement('div')
            demandPopupContainer.className = 'container'
        let demandHeader = document.createElement('h3')
        let demandHeaderContext = document.createTextNode('Buying form')
        document.body.appendChild(demandPopup)
        demandPopup.appendChild(demandPopupContainer)
        demandHeader.appendChild(demandHeaderContext)
        demandPopupContainer.appendChild(demandHeader)
        let inputTypes = ['text','number','number','text']
        let inputLabels = ['Name','Number','Quantity','Type']
        let inputPlaceholder = ['your name...','your number...','hom many quantity you want...','like:watermelon,peach...']
        for(let i = 0;i < 4 ;i++){
            let demandLabels = document.createElement('label')
            let demandLabelsContext = document.createTextNode(inputLabels[i])
            let demandInputs = document.createElement('input')
                demandInputs.type = inputTypes[i]
                demandInputs.placeholder = inputPlaceholder[i]
            demandLabels.appendChild(demandLabelsContext)
            demandPopupContainer.appendChild(demandLabels)
            demandPopupContainer.appendChild(demandInputs)
        }
        let demandCloseBtn = document.createElement('button')
            demandCloseBtn.className = 'demand-close'
        let demandCloseBtnTxt = document.createTextNode('X')
        let demandBuyBtn = document.createElement('button')
            demandBuyBtn.className = 'demand-buy'
        let demandBuyBtnTxt = document.createTextNode('Buy')
        demandCloseBtn.appendChild(demandCloseBtnTxt)
        demandPopupContainer.appendChild(demandCloseBtn)
        demandBuyBtn.appendChild(demandBuyBtnTxt)
        demandPopupContainer.appendChild(demandBuyBtn)
    }
    //close demand popup 
    if(e.target.className == 'demand-close'){
        document.querySelector('.demand-popup').remove()
    }
})

//setInterval changing-p-color     (important method)
var i =0;
const changeColor = ()=>{
    let getInfoParagraph = document.querySelector('.info p')
    let colors = ['mintcream','silver','lavender','yellow','plum']
    getInfoParagraph.style.color = colors[i]
    i = (i + 1) % colors.length;//queue 
}
setInterval(changeColor,2000)

//jquery

//add and remove active class on img
$(()=>{
    $('.below-img').on('click',()=>{
        $('.below-img').removeClass('active').$(this).addClass('active')
    })
    $('.nav').on('click',()=>{
        $(this).addClass('action')
        $('.nav').removeClass('action')
        
       
    })
})

