export type InterviewType = {
  id: string;
  intervieweeId: string;
  interviewerId: string;
  scheduledAt: Date;
  accepted_For_Time?: Date;
  techstack?: string[];
  isCompleted: boolean;
  rating?: number;
  feedback?: string;
  allRating?: JSON;
};

export type InterviewRequest = {
  date: string;
  startTime: string;
  endTime: string;
  techstacks: string[];
  experience: string;
};
