function delay(value) {
    return new Promise(function(resolve, reject) {
      
        if (typeof value !== 'number') {
            reject('The argument is not a number');
        } else {
           
            setTimeout(function() {
               
                resolve(value * 2);
            }, 5000);
        }
    });
}


delay(30)
    .then(function(result) {
	console.log('Resolved:', result);})
    .catch(function(error) {
        console.error('Rejected:', error);
    });

delay('Vasya')
    .then(function(result) {
        console.log('Resolved:', result);
    })
    .catch(function(error) {
        console.error('Rejected:', error); 
    });







/*

function delay(value) {
    return new Promise((resolve, reject) => {
        
        if (typeof value !== 'number') {
            reject('The argument is not a number');
        } else {
            
            setTimeout(() => {
                
                resolve(value * 2);
            }, 5000);
        }
    });
}


delay(30)
    .then(result => {
        console.log('Resolved:', result); 
    })
    .catch(error => {
        console.error('Rejected:', error);
    });

delay('Vasya')
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error); 
    });
	
	*/