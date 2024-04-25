
        
        const timerElement = document.getElementById('timer');

       
        let seconds = 60;

      
        function updateTimer() {
			
           
			
            timerElement.textContent = seconds;

            
			
            seconds--;
	
            if (seconds < 0) {
                clearInterval(timerInterval);
            }
        }

      
		
        const timerInterval = setInterval(updateTimer, 1000);
    