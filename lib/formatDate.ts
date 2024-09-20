export const FormatDate = (dateObj: number | Date) => {
    return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(dateObj);
}