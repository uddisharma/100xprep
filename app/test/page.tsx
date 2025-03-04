'use client';
import { EmailTypes, MessagetoService } from '@/types/email';
import React from 'react';
import { toast } from 'sonner';

const Page: React.FC = () => {

  const pushToQueue = async () => {
    try {
      const response = await fetch('/api/redis/push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            type: EmailTypes.INTERVIEW_CONFIRMATION,
            data: {
              intervieweeName: 'Deepak Sharma',
              intervieweeEmail: 'uddibhardwaj2001@gmail.com',
              interviewerName: 'Amit Bhandari',
              interviewerEmail: 'amitbhandari108@gmail.com',
              date: '22/09/2024',
              time: '10:00 AM',
              link: 'https://example.com'
            },
          } as MessagetoService
        }),
      });

      if (response.ok) {
        toast.success("Pushed to Redis Queue");
        return
      } else {
        const errorData = await response.json();
        alert(`Failed to push message to queue: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error pushing to queue:', error);
      alert('Failed to push message to queue');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={pushToQueue} style={{ padding: '10px 20px', border: "2px solid white" }}>
        Push to Redis Queue
      </button>
    </div>
  );
};

export default Page;