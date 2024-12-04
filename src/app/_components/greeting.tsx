export default function Greeting() {
  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="mb-8 text-2xl font-medium tabletPortrait:text-xl">
      {greeting} 👋🏼
    </div>
  );
}
