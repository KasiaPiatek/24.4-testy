/*const formatDate = (timeInSeconds) => {
  return `${timeInSeconds}s`;
}
*/

function formatDate(timeInSeconds){

            const hours = Math.floor(timeInSeconds/3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = Math.floor(timeInSeconds % 60);

            let result = '';

            if (hours!=0){
       			result = result + hours + 'h ';
            }
            if (minutes!=0) {
            	result = result + minutes + 'm ';
            }
            if (seconds!=0) {
            	result = result + seconds + 's ';
            }
            return result;
           
           }




module.exports = formatDate;


/* 


function Time(times){
            var houres;
            var minutes;
            var seconds;
            houres = Math.floor(times/3600);
            minutes = Math.floor((times % 3600) / 60);
            seconds = Math.floor(times % 60);


console.log('Uptime:~ ' + houres + ":" +  minutes + ":" + seconds);
     
};

*/