export const getDateBeforeDays = (beforeDaysCount) => {
  let currDate = new Date();
  currDate.setDate(currDate.getDate() - beforeDaysCount);

  return currDate.toISOString().split('T')[0];
};