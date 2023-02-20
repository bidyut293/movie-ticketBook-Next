import { eachDayOfInterval, addDays } from 'date-fns';

export const dateListHandle = () => {
  return eachDayOfInterval({ start: new Date(), end: addDays(new Date(), 9) });
};
