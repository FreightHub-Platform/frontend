import { useEffect, useState } from "react";
import { getNotification, markAsReadAllNotification, markAsReadNotification } from "../../../utils/notification";

const Notification = ({ updateNotificationCount }) => {
  const [notificationArray, setNotificationArray] = useState([]);
  const [notReadCount, setNotReadCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      
      try {
        const notify = { userId: localStorage.getItem("id") };
        const notificationData = await getNotification(notify, localStorage.getItem("jwt"));
        console.log(notificationData);

        const reversedNotificationData = notificationData.reverse();

        // Count unread notifications
        const unreadCount = notificationData.filter((n) => !n.read).length;
        setNotReadCount(unreadCount);

        // Update the count in the parent component
        updateNotificationCount(5);

        setNotificationArray(reversedNotificationData);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    
    fetchNotifications();
  }, []);

  const markAsRead = async (index) => {
    const id = notificationArray[index].id;
    try {
      const notifyId = { id: id };
      const notify = { userId: localStorage.getItem("id") };
      await markAsReadNotification(notifyId, localStorage.getItem("jwt"));
      const updatedNotifications = await getNotification(notify, localStorage.getItem("jwt"));

      // Update state and count
      setNotificationArray(updatedNotifications);
      const unreadCount = updatedNotifications.filter((n) => !n.read).length;
      setNotReadCount(unreadCount);
      updateNotificationCount(unreadCount);
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllRead = async () => {
    try {
      const notify = { userId: localStorage.getItem("id") };
      await markAsReadAllNotification(notify, localStorage.getItem("jwt"));
      const updatedNotifications = await getNotification(notify, localStorage.getItem("jwt"));

      // Update state and count
      setNotificationArray(updatedNotifications);
      setNotReadCount(0);
      updateNotificationCount(0);
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

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
    <div className="w-full">
      <div>
        <div className="bg-card text-card-foreground h-min w-full pt-7 pb-6 px-5 bg-slate-100 rounded-2xl">
          <div>
            <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">Notifications</p>
            <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
              {notReadCount ? `You have ${notReadCount} unread messages.` : ""}
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
                  {notification.read ? "" : <div className="w-2 h-2 mt-1 me-4 rounded-full bg-blue-500"></div>}
                </div>
                <div>
                  <p className="text-zinc-950 dark:text-white font-medium mb-1">{notification.message}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {calculateTime(notification.notificationTime)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex w-full max-w-full mt-5 items-center justify-center rounded-lg py-2 text-base font-medium"
            onClick={markAllRead}
          >
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
