const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Position of click in DOM
        const x = e.clientX
        const y = e.clientY

        // Position of box in DOM
        const buttonTop = e.target.offsetTop                
        const buttonLeft = e.target.offsetLeft     

        // How we get coordinates inside the box to render the circle
        const xInside = x - buttonLeft;           
        const yInside = y - buttonTop; 
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        
        // !NEED TO USE REGULAR FUNCTION -- NOT ARROW
        this.appendChild(circle)
        
        // We need this to remove the class after 1 second so it doenst overflow the dom
        setInterval(() => {
            circle.remove()
        }, 500);
    })
})