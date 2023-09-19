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

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "jc"
    );
  }

  const largest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  
  if (largest) {
      const first: number = parseInt(largest[1]);
      const second: number = parseInt(largest[2]);
      const third: number = parseInt(largest[3]);
      return Math.max(first, second, third).toString();
  }

  return "";
}
