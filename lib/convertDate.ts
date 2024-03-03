export function convertDate() {
    const currentDate = new Date();

    const hours = addZero(currentDate.getHours());
    const minutes = addZero(currentDate.getMinutes());

    function addZero(num: number) {
        return (num < 10 ? '0' : '') + num;
    }

    const ampm = hours >= "12" ? 'PM' : 'AM';

    const timezoneOffset = currentDate.getTimezoneOffset();
    const sign = timezoneOffset > 0 ? '-' : '+';
    const absOffset = Math.abs(timezoneOffset);
    const hoursOffset = addZero(Math.floor(absOffset / 60));
    const formattedTimezoneOffset = 'GMT' + sign + hoursOffset;

    const formattedDateTime = hours + ':' + minutes + ' ' + ampm + ' ' + formattedTimezoneOffset;

    return formattedDateTime;
}