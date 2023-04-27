// https://www.codewars.com/kata/5e16ffb7297fe00001114824

// DESCRIPTION:
// You work in the best consumer electronics corporation, and your boss wants to find out
// which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// return the three product names with the highest revenue (amount * price).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

// SOLUTION:

function top3(products, amounts, prices) {
  const revenues = products.map((product, i) => {
    return {
      name: product,
      revenue: amounts[i] * prices[i],
      index: i,
    };
  });
  const sorted = revenues.sort((a, b) => {
    if (b.revenue - a.revenue === 0) {
      return a.index - b.index;
    }
    return b.revenue - a.revenue;
  });

  return sorted.slice(0, 3).map((product) => product.name);
}
