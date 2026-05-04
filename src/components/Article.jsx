function Article({ title, date = "January 1, 1970", preview, readTime }) {
  // Bonus: minutes to read emoji display
  function getEmojis(minutes) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      return "🍱".repeat(boxes) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {readTime && <span>{getEmojis(readTime)}</span>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;