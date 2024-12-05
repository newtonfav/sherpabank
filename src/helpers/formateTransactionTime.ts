export default function formatTransactionTime(
  createdAt: Date,
  currentTime: Date
) {
  const diffInMinutes = Math.floor(
    (currentTime.getTime() - createdAt.getTime()) / (1000 * 60)
  );
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 60) {
    return diffInMinutes === 1 ? "1 min ago" : `${diffInMinutes} mins ago`;
  }

  if (diffInHours < 24) {
    const formattedTime = createdAt.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${diffInHours} ${
      diffInHours === 1 ? "hr" : "hrs"
    } ago, ${formattedTime}`;
  }

  if (diffInDays < 2) {
    const formattedTime = createdAt.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${diffInDays} day${
      diffInDays === 1 ? "" : "s"
    } ago, ${formattedTime}`;
  }

  return createdAt.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
