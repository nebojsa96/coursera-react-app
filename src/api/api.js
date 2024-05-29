const times = [
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
];
const dates = [
    "2024-06-01", 
    "2024-06-02", 
    "2024-06-03"
];

//This function accepts a date as a parameter and returns an array of available reservation times for the provided date 
export function fetchAPI(date) {
    return new Promise((resolve, reject) => {
        if(dates.includes(date)) {
            const dateIdx = dates.indexOf(date);
            console.log(times[dateIdx]);
            resolve(times[dateIdx]);
        }
        resolve([]);
    });
    
} 

// This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
export function submitAPI(formData) {
    return new Promise((resolve, reject) => {
        console.log(formData);
        if(formData.date && formData.time) {
            const dateIdx = dates.indexOf(formData.date);
            const timeIdx = times[dateIdx].indexOf(formData.time);
            times[dateIdx].slice(timeIdx, 1);
            resolve(true);
        }
        reject(false);
    });
}