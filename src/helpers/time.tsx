const timeFormatter = (newDate: Date) => {
    return {
        hours: newDate.getHours() > 9 ? newDate.getHours().toLocaleString() : "0" + newDate.getHours().toLocaleString(),
        minutes: newDate.getMinutes() > 9 ? newDate.getMinutes().toLocaleString() : "0" + newDate.getMinutes().toLocaleString(),
        seconds: newDate.getSeconds() > 9 ? newDate.getSeconds().toLocaleString() : "0" + newDate.getSeconds().toLocaleString()    
    }
}

  export { timeFormatter }