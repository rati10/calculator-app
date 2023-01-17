

//js styling

const dataMainText = document.querySelector('[data-main-text]')
const dataNumbers = document.querySelectorAll('[data-number]')
const dataDelete = document.querySelector('[data-delete]')
const dataOperation = document.querySelectorAll('[data-operation]')
const dataReset = document.querySelector('[data-reset]')
const dataEquals = document.querySelector('[data-equals]')


let isClicked = false
const arr = []
const arr1 = []
const arr2 = []
const operations = ['+', '-', 'x', '/']
dataNumbers.forEach(number => {
  number.addEventListener('click', () => {
    
    if(isClicked === true) {
      arr.length = 0
      arr1.length = 0
      arr2.length = 0
      dataMainText.innerText = '0'
      isClicked = false
    } else {
      if(operations.some(op => dataMainText.innerText.includes(op))) {
        if(number.innerText === '.' && arr2.includes('.') || arr2.length > 11) return
        arr2.push(number.innerText)
      } else  {
        if(number.innerText === '.' && arr1.includes('.') || arr1.length > 11) return
        arr1.push(number.innerText)
      }
      arr.push(number.innerText)
      dataMainText.innerText = arr.join('')
      isClicked = false
    }

    })
  })


dataReset.addEventListener('click', () => {
  arr.length = 0
  arr1.length = 0
  arr2.length = 0
  dataMainText.innerText = '0'
  isClicked = false
})

dataOperation.forEach(operation => {
  operation.addEventListener('click', () => {
    if(isClicked === true) {
      arr.length = 0
      arr1.length = 0
      arr2.length = 0
      dataMainText.innerText = '0'
      isClicked = false
    } else  {

      if(operations.some(op => dataMainText.innerText.includes(op)) || dataMainText.innerText === '0' || dataMainText.innerText.slice(-1) === '.') return
      arr.push(operation.innerText)
      dataMainText.innerText = arr.join('')
    }
  })
})

dataDelete.addEventListener('click', () => {
  arr.pop()
  
  if (dataMainText.innerText.length > 1) {
    dataMainText.innerText = arr.join('')
  } else {
    dataMainText.innerText = '0'
  }
})

dataEquals.addEventListener('click', () => {

  isClicked = true

  let arr1Number = parseFloat(arr1.join(''));
  let arr2Number = parseFloat(arr2.join(''));
  arr1.length = 0
  arr2.length = 0
  let operation = ''
  operations.forEach(op => {
    if(dataMainText.innerText.includes(op)) {
      operation = op
    }
  })
  let result;
  let resultToString;
  switch (operation) {
    case '+':
      result = arr1Number + arr2Number
      resultToString = result.toString()
      if (resultToString.length > 10) {
        dataMainText.innerText = result.toFixed(1)
      } else {
        dataMainText.innerText = result
      }
      break;
    case '-':
      result = arr1Number - arr2Number
      resultToString = result.toString()
      if (resultToString.length > 10) {
        dataMainText.innerText = result.toFixed(1)
      } else {
        dataMainText.innerText = result
      }
      break;
    case 'x':
      result = arr1Number * arr2Number
      resultToString = result.toString()
      if (resultToString.length > 10) {
        dataMainText.innerText = result.toFixed(1)
      } else {
        dataMainText.innerText = result
      }
      break;
    case '/':
      result = arr1Number / arr2Number
      resultToString = result.toString()
      if (resultToString.length > 10) {
        dataMainText.innerText = result.toFixed(1)
      } else {
        dataMainText.innerText = result
      }
      break;
    default:
      break;
  }
  arr1.length = 0
  arr2.length = 0
  
});


//css styling

const toggleSpan = document.querySelector('.toggle-btn span');
const body = document.querySelector('body');
//togglebtn is actually toggle btn container
const toggleBtn = document.querySelector('.toggle-btn');
const flexHeader = document.querySelector('.flex-header');
const mainContent = document.querySelector('.main-content');
const mainContentNumbers = document.querySelector('.main-content-numbers');
const grid = document.querySelector('.grid');
const gridItem = document.querySelectorAll('.grid-item');



const item7 = document.querySelector('.item-7');
const item8 = document.querySelector('.item-8');
const item9 = document.querySelector('.item-9');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item0 = document.querySelector('.item-0');
const itemDot = document.querySelector('.item-dot');
const itemDivision = document.querySelector('.item-division');
const itemPlus = document.querySelector('.item-plus');
const itemMinus = document.querySelector('.item-minus');
const itemX = document.querySelector('.item-x');
const itemDel = document.querySelector('.item-del');
const reset = document.querySelector('.item-reset');
const itemEquals = document.querySelector('.item-equals');



//styling changing themes
let toggleCondition = 'theme1';
toggleSpan.addEventListener('click', function() {
  if (toggleCondition === 'theme1') {
    toggleCondition = 'theme2';
    toggleSpan.style.transform = 'translateX(170%)';
    toggleSpan.addEventListener('mouseover', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange-hover)';
    });
    toggleSpan.addEventListener('mouseout', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange)';
    });
    toggleSpan.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange)';
    body.style.backgroundColor = 'var(--theme-2-bg-main)';
    toggleBtn.style.backgroundColor = 'var(--theme-2-bg-keypad)';
    flexHeader.style.color = 'var(--theme-2-text-yellow)';
    mainContent.style.backgroundColor = 'var(--theme-2-bg-screen)';
    mainContentNumbers.style.color = 'var(--theme-2-text-yellow)';
    grid.style.backgroundColor = 'var(--theme-2-bg-keypad)';
    gridItem.forEach((item) => {
      item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'var(--theme-2-key-bg-yellow-hover)';
      })
      item.addEventListener('mouseout', function() {
        item.style.backgroundColor = 'var(--theme-2-key-bg-yellow)';
      })
      item.style.backgroundColor = 'var(--theme-2-key-bg-yellow)';
      item.style.color = 'var(--theme-2-text-yellow)';
    });
    itemDel.addEventListener('mouseover', function() {
      itemDel.style.backgroundColor = 'var(--theme-2-key-bg-cyan-hover)';
    })
    itemDel.addEventListener('mouseout', function() {
      itemDel.style.backgroundColor = 'var(--theme-2-key-bg-cyan)';
    })
    itemDel.style.backgroundColor = 'var(--theme-2-key-bg-cyan)';
    itemDel.style.color = 'var(--theme-2-text-white)';
    reset.addEventListener('mouseover', function() {
      reset.style.backgroundColor = 'var(--theme-2-key-bg-cyan-hover)';
    })
    reset.addEventListener('mouseout', function() {
      reset.style.backgroundColor = 'var(--theme-2-key-bg-cyan)';
    })
    reset.style.backgroundColor = 'var(--theme-2-key-bg-cyan)';
    reset.style.color = 'var(--theme-2-text-white)';
    itemEquals.addEventListener('mouseover', function() {
      itemEquals.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange-hover)';
    })
    itemEquals.addEventListener('mouseout', function() {
      itemEquals.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange)';
    })
    itemEquals.style.backgroundColor = 'var(--theme-2-key-bg-toggle-orange)';
    itemEquals.style.color = 'var(--theme-2-text-white)';



  } else if (toggleCondition === 'theme2') {
    toggleCondition = 'theme3';
    toggleSpan.style.transform = 'translateX(340%)';
    toggleSpan.addEventListener('mouseover', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan-hover)';
    });
    toggleSpan.addEventListener('mouseout', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan)';
    });
    toggleSpan.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan)';
    body.style.backgroundColor = 'var(--theme-3-bg-main)';
    toggleBtn.style.backgroundColor = 'var(--theme-3-bg-keypad-creen-toggle)';
    flexHeader.style.color = 'var(--theme-3-text-yellow)';
    mainContent.style.backgroundColor = 'var(--theme-3-bg-keypad-creen-toggle)';
    mainContentNumbers.style.color = 'var(--theme-3-text-yellow)';
    grid.style.backgroundColor = 'var(--theme-3-bg-keypad-creen-toggle)';
    gridItem.forEach((item) => {
      item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'var(--theme-3-key-bg-violet-very-dark-hover)';
      })
      item.addEventListener('mouseout', function() {
        item.style.backgroundColor = 'var(--theme-3-key-bg-violet-very-dark)';
      })
      item.style.backgroundColor = 'var(--theme-3-key-bg-violet-very-dark)';
      item.style.color = 'var(--theme-3-text-yellow)';
      item.style.boxShadow = '0px 5px 0px 0px var(--theme-3-key-shadow-magenta-Dark)';
    });
    itemDel.addEventListener('mouseover', function() {
      itemDel.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark-hover)';
    })
    itemDel.addEventListener('mouseout', function() {
      itemDel.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark)';
    })
    itemDel.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark)';
    itemDel.style.color = 'var(--theme-3-text-white)';
    itemDel.style.boxShadow = '0px 5px 0px 0px var(--theme-3-key-shadow-magenta-Vivid)';
    reset.addEventListener('mouseover', function() {
      reset.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark-hover)';
    })
    reset.addEventListener('mouseout', function() {
      reset.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark)';
    })
    reset.style.backgroundColor = 'var(--theme-3-key-bg-violet-dark)';
    reset.style.color = 'var(--theme-3-text-white)';
    reset.style.boxShadow = '0px 5px 0px 0px var(--theme-3-key-shadow-magenta-Vivid)'
    itemEquals.addEventListener('mouseover', function() {
      itemEquals.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan-hover)';
    })
    itemEquals.addEventListener('mouseout', function() {
      itemEquals.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan)';
    })
    itemEquals.style.backgroundColor = 'var(--theme-3-key-bg-toggle-cyan)';
    itemEquals.style.color = 'var(--theme-3-text-blue)';
    itemEquals.style.boxShadow = '0px 5px 0px 0px var(--theme-3-key-shadow-cyan)'; 
    


  } else if (toggleCondition === 'theme3') {
    toggleCondition = 'theme1';
    toggleSpan.style.transform = 'translateX(0%)';
    toggleSpan.addEventListener('mouseover', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red-hover)';
    });
    toggleSpan.addEventListener('mouseout', function() {
      toggleSpan.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red)';
    });
    toggleSpan.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red)';
    body.style.backgroundColor = 'var(--theme-1-bg-main)';
    toggleBtn.style.backgroundColor = 'var(--theme-1-bg-keypad)';
    flexHeader.style.color = 'var(--theme-1-text-white)';
    mainContent.style.backgroundColor = 'var(--theme-1-bg-screen)';
    mainContentNumbers.style.color = 'var(--theme-1-text-white)';
    grid.style.backgroundColor = 'var(--theme-1-bg-keypad)';
    gridItem.forEach((item) => {
      item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'var(--theme-1-key-bg-orange-hover)';
      })
      item.addEventListener('mouseout', function() {
        item.style.backgroundColor = 'var(--theme-1-key-bg-orange)';
      })
      item.style.backgroundColor = 'var(--theme-1-key-bg-orange)';
      item.style.color = 'var(--theme-1-text-blue)';
      item.style.boxShadow = '0px 5px 0px 0px var(--theme-1-key-shadow-orange)'
    });
    itemDel.addEventListener('mouseover', function() {
      itemDel.style.backgroundColor = 'var(--theme-1-key-bg-blue-hover)';
    })
    itemDel.addEventListener('mouseout', function() {
      itemDel.style.backgroundColor = 'var(--theme-1-key-bg-blue)';
    })
    itemDel.style.backgroundColor = 'var(--theme-1-key-bg-blue)';
    itemDel.style.color = 'var(--theme-1-text-white)';
    itemDel.style.boxShadow = '0xp 5px 0px 0px var(--theme-1-key-shadow-blue)';
    reset.addEventListener('mouseover', function() {
      reset.style.backgroundColor = 'var(--theme-1-key-bg-blue-hover)';
    })
    reset.addEventListener('mouseout', function() {
      reset.style.backgroundColor = 'var(--theme-1-key-bg-blue)';
    })
    reset.style.backgroundColor = 'var(--theme-1-key-bg-blue)';
    reset.style.color = 'var(--theme-1-text-white)';
    reset.style.boxShadow = '0xp 5px 0px 0px var(--theme-1-key-shadow-blue)'
    itemEquals.addEventListener('mouseover', function() {
      itemEquals.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red-hover)';
    })
    itemEquals.addEventListener('mouseout', function() {
      itemEquals.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red)';
    })
    itemEquals.style.backgroundColor = 'var(--theme-1-key-bg-toggle-red)';
    itemEquals.style.color = 'var(--theme-1-text-white)';
    itemEquals.style.boxShadow = '0xp 5px 0px 0px var(--theme-1-key-shadow-red)'
  }
})


