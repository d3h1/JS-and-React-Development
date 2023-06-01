let x, y, z;
let d = new Date();

// Two differnet ways
y = Intl.DateTimeFormat('default', { month: 'long'}).format(d) //
x = d.toLocaleString('default', { month: 'short' }); // Shortens the month

// Long Date Object
z = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
})

console.log(x, y, z);