"use client"

import { useEffect, useState } from "react";

const Notification = () => {

  const [notificationArray, setNotificationArray] = useState([
    {
      date: "2024-11-09T11:00:00",
      body: "Your order #12345 has been successfully processed and is on its way.",
      read: false,
    },
    {
      date: "2024-11-08T14:30:00",
      body: "Your profile information has been updated successfully.",
      read: true,
    },
    {
      date: "2024-11-07T09:45:00",
      body: "You have a new message from support regarding your recent inquiry.",
      read: false,
    },
    {
      date: "2024-11-06T17:20:00",
      body: "Reminder: Your payment for order #67890 is due in 2 days.",
      read: false,
    },
    {
      date: "2024-11-05T12:10:00",
      body: "Your subscription to Premium Service has been activated.",
      read: true,
    },
    {
      date: "2024-11-04T16:00:00",
      body: "We detected an issue with your last payment. Please review your billing details.",
      read: false,
    },
    {
      date: "2024-11-03T18:30:00",
      body: "You have been successfully logged out of all active sessions for security purposes.",
      read: true,
    },
    {
      date: "2024-11-02T08:00:00",
      body: "Your new feature request has been received and is under review by our development team.",
      read: false,
    },
    {
      date: "2024-11-01T15:15:00",
      body: "Your recent request for a product demo has been scheduled for tomorrow at 10:00 AM.",
      read: true,
    },
    {
      date: "2024-10-31T11:45:00",
      body: "Your subscription will be renewed automatically in 5 days. No action required.",
      read: true,
    },
  ]);

  const [notReadCount, setNotReadCount] = useState(0)

  useEffect(() => {
    const unreadCount = notificationArray.filter((notification) => !notification.read).length;
    setNotReadCount(unreadCount);
  }, [notificationArray]);

  const markAsRead = (index) =>{
    const updatedNotfications = [...notificationArray]
    updatedNotfications[index].read = true
    setNotificationArray(updatedNotfications)
  }

  const markAllRead = () => {
    const updateNotification = [...notificationArray]
    updateNotification.forEach(item => item.read = true)
    setNotificationArray(updateNotification)
  }

  const calculateTime = (notificationDate) => {
    const notificationTime = new Date(notificationDate).getTime();
    const currentTime = new Date().getTime();

    const timeDifference = currentTime - notificationTime;

    const millisecondsInMinute = 60 * 1000;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
    const millisecondsInWeek = 7 * millisecondsInDay;
    const millisecondsInMonth = 30 * millisecondsInDay; 

    const minutes = Math.floor(timeDifference / millisecondsInMinute);
    const hours = Math.floor(timeDifference / millisecondsInHour);
    const days = Math.floor(timeDifference / millisecondsInDay);
    const weeks = Math.floor(timeDifference / millisecondsInWeek);
    const months = Math.floor(timeDifference / millisecondsInMonth);

    if (minutes < 60) {
      return `${minutes} minute(s) ago`;
    } else if (hours < 24) {
      return `${hours} hour(s) ago`;
    } else if (days < 7) {
      return `${days} day(s) ago`;
    } else if (weeks < 4) {
      return `${weeks} week(s) ago`;
    } else if (months < 12) {
      return `${months} month(s) ago`;
    } else {
      return `${Math.floor(months / 12)} year(s) ago`; 
    }
  };

  return (
    <>
      <div className="w-full">
        <div>
          <div className="bg-card text-card-foreground h-min w-full pt-7 pb-6 px-5 bg-slate-100 rounded-2xl">
            <div>
              <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
                Notifications
              </p>
              <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
                {
                  notReadCount ? `You have ${notReadCount} unread messages.` : ""
                }  
              </p>
            </div>

            <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto shadow-inner custom-scrollbar-horizontal bg-slate-100 p-2">
              {notificationArray.map((notification, index) => (
                <div
                  key={index}
                  className="relative mx-auto flex w-full max-w-full p-2 dark:border-zinc-800 border shadow-sm rounded-lg bg-white cursor-pointer hover:bg-slate-200 duration-700"
                  onClick={() => markAsRead(index)}
                >
                  <div className={notification.read ? "ps-5" : ""}>
                    {notification.read ? (
                      ""
                    ) : (
                      <div className="w-2 h-2 mt-1 me-4 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div>
                    <p className="text-zinc-950 dark:text-white font-medium mb-1">
                      {notification.body}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                      {calculateTime(notification.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex w-full max-w-full mt-5 items-center justify-center rounded-lg py-2 text-base font-medium"
              onClick={markAllRead}
            >
              Mark all as read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

