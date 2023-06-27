import { VoteType } from 'src/streamers/types/types';

export const isCorrectValueForVote = (vote: VoteType) => {
  let isValid = false;
  switch (vote) {
    case 'upvote':
      isValid = true;
      break;
    case 'downvote':
      isValid = true;
      break;
    default:
      break;
  }
  return isValid;
};
