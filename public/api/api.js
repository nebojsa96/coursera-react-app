const possibleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const bookingData = [
    {
        date: "2024-05-31",
        time: "18:00",
        guests: 4,
        occasion: "Birthday"
    }
]

//This function accepts a date as a parameter and returns an array of available reservation times for the provided date 
function fetchAPI(dateString) {
    return new Promise((resolve, reject) => {
        const dateNow = new Date(getDateString(new Date()));
        const date = new Date(dateString);
        if(date < dateNow) {
            reject(false);
        }
        let reservedBookings = bookingData.filter(b => b.date === dateString);
        let availableTimes = [...possibleTimes];
        if(reservedBookings.length > 0) {
            let reservedTimes = reservedBookings.map(b => b.time);
            availableTimes = possibleTimes.filter(ptime => !reservedTimes.includes(ptime));
        } 
        resolve(availableTimes);
    });
    
} 

// This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
function submitAPI(formData) {
    return new Promise((resolve, reject) => {
        if(formData.date && formData.time) {
            const bookingIdx = bookingData.indexOf(formData.date);
            if(bookingIdx === -1 || bookingData[bookingIdx].time !== formData.time) {
                bookingData.push(formData);
                resolve(true);
            } else {
                reject(false);
            }
        }
        reject(false);
    });
}

function getDateString(date) {
    return date.toISOString().split('T')[0];
}

function getTimeString(date) {
    return date.toTimeString().split(' ')[0].slice(0, 5);
}