const button = document.getElementById('get-content');
const factElement = document.getElementById('this-content');

        button.addEventListener('click', () => {
            
            factElement.textContent = '';

            
            fetch('https://catfact.ninja/fact')
                .then(response => {
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                   
                    return response.json();
                })
                .then(data => {
                   
                    factElement.textContent = data.fact;
					factElement.classList.add('text');
                })
                .catch(error => {
                    
                    factElement.textContent = 'Error: ' + error.message;
                    factElement.classList.add('error');
                });
        });