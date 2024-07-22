function getFirstNElements(arr, n) {
    if (n <= 0) {
      return [];
    } else if (n > arr.length) {
      return arr;
    } else {
      return arr.slice(0, n);
    }
}

