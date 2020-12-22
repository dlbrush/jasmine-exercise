it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 5})).toEqual("188.71");
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 6582, years: 6, rate: 3})).toEqual("100.00");
});

it("should handle floating point inputs", function() {
  expect(calculateMonthlyPayment({amount: 4890.82, years: 4, rate: 7.8})).toEqual("118.94");
});

it("should return 0 when principal is 0", function() {
  expect(calculateMonthlyPayment({amount: 0, years: 70, rate: 25})).toEqual("0.00");
});