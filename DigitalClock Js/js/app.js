const container = document.querySelector('.digitalClock');

const getTime = () => {
    const hours = new Date().getHours();
    const minuts = new Date().getMinutes();
    const seconds = new Date().getSeconds();        
    container.textContent = `${hours}:${minuts}:${seconds<10? 0+seconds : seconds} ${hours>12?'PM':'AM'}`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        getTime();
    }, 1000)
}
)