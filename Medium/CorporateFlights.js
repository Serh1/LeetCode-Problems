var corpFlightBookings = function (bookings, n) {
  let answer = Array(n).fill(0);
  for (book = 0; book < bookings.length; book++) {
    booking = bookings[book];
    for (let flight = booking[0]; flight <= booking[1]; flight++) {
      answer[flight - 1] += booking[2];
    }
  }
  return answer;
};

console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
);
