export const substractingDaysFromToday = (howManyDays: number): string => {
    const date = new Date();
    date.setDate(date.getDate() - howManyDays);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
} 