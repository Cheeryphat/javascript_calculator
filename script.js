//1.  Select all buttons, the input display, and the result display
const buttons = document.querySelectorAll('button');
const input = document.querySelector('.input');
const result = document.querySelector('#result');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const totalButton = document.querySelector('#total')

//2.  Add a click event listener by looping with Foreach
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;//3. Get the clicked button value 

    //4. if Total('=') button is clicked try to calculate the inputs with Eval()
    if (value === totalButton.value) {
      try {
        const calculation = eval(input.textContent);
        result.textContent = calculation;//5. Show the result on the screen
      } catch (error) {
        result.textContent = 'Error'; //6. Show error if evaluation fails
      }
     
    } else if (value === clearButton.value) {// 7. If the clear ('C') button is clicked change input to 0 and result to empty
      input.textContent = '0';
      result.textContent = '';
    
    } else if (value === deleteButton.value) {// 8. If the delete('DEL') button is clicked remove last character or return to 0 after deletion
      input.textContent = input.textContent.slice(0, -1) || 0 ;
            
    }else if(value === '%'){//9. percentage button evaluation
        const displayPercent = parseFloat(input.textContent)
        input.textContent = displayPercent/100 ;
        result.textContent='';
        
    }else {//10. for other buttons
      if (input.textContent === '0') {
        input.textContent = value;

      } else {
        //10. Otherwise, add the new value to the input display to avoid changing current input
        input.textContent += value;
      }
    }
  });
});