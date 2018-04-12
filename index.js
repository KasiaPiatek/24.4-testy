/*const formatDate = (timeInSeconds) => {
  return `${timeInSeconds}s`;
}
*/

function formatDate(timeInSeconds){
            conts hours;
            const minutes;
            const seconds;
            hours = Math.floor(timeInSeconds/3600);
            minutes = Math.floor((timeInSeconds % 3600) / 60);
            seconds = Math.floor(timeInSeconds % 60);

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