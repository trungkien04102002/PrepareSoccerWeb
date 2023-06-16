function printTest() {
    console.log('Hello world! 12345678910')
}

var CronJob = require('cron').CronJob;
var job = new CronJob(
    '* * * * * *',
    printTest,
    null,
    true,
    'America/Los_Angeles'
);