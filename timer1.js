

const args = process.argv;

process.stdout.write('hello from timer1.js... \n');
args.splice(0,2);

//console.log(args);

const alarm = (time) => {
  //console.log(time);
  for(let i = 0; i < time.length; i++){
    if(time[i] === "" || time[i] <= 0 || isNaN(time[i])) {
      i += 1;
    }
    setTimeout(() => {
    process.stdout.write(`Alarm at ${time[i]} seconds \n`);
    process.stdout.write('\x07');
    }, 1000 * i)
  }
}

alarm(args);
