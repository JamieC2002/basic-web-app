export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  // Need to run npm run build after making changes.
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "Your Andrew ID is jiaming3"
    );
  }

  return "";
}
