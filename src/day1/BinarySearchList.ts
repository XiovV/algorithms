export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const midpoint = Math.floor(lo + (hi - lo) / 2)
    const val = haystack[midpoint]

    if (val === needle) {
      return true;
    }

    if (val > needle) {
      hi = midpoint;
    } else {
      lo = midpoint + 1;
    }

  } while (lo < hi);

  return false;

}
