export const EmailTypes = {
  INTERVIEW_REQUEST: "INTERVIEW_REQUEST",
  INTERVIEW_CONFIRMATION: "INTERVIEW_CONFIRMATION",
  INTERVIEW_SCHEDULED: "INTERVIEW_SCHEDULED",
  INTERVIEW_CANCEL: "INTERVIEW_CANCEL",
};

export type MessagetoService =
  | {
      type: typeof EmailTypes.INTERVIEW_REQUEST;
      data: {
        intervieweeName: string;
        interviewerName: string;
        intervieweeEmail: string;
        interviewerEmail: string;
        date: string;
        time: string;
        link: string;
      };
    }
  | {
      type: typeof EmailTypes.INTERVIEW_CONFIRMATION;
      data: {
        intervieweeName: string;
        interviewerName: string;
        intervieweeEmail: string;
        interviewerEmail: string;
        date: string;
        time: string;
        link: string;
      };
    };
