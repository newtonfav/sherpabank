export default function formatTransactionTime(createdAt: Date) {
  const now = new Date();
  const diffInMinutes = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60)
  );
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 60) {
    // Less than 1 hour
    return diffInMinutes === 1 ? "1 min ago" : `${diffInMinutes} mins ago`;
  }

  if (diffInHours < 24) {
    // Less than 1 day
    const formattedTime = createdAt.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${diffInHours} ${
      diffInHours > 1 ? "hr" : "hrs"
    } ago, ${formattedTime}`;
  }

  if (diffInDays < 2) {
    // Less than 2 days
    const formattedTime = createdAt.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${diffInDays} day ago, ${formattedTime}`;
  }

  // More than 2 days, show full date
  return createdAt.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
