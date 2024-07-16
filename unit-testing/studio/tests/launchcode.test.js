// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
   // Write your unit tests here!

  test("Check Organization Name", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("Check executive director name", function () {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  test("Check percentage cool employees", function () {
    expect(launchcode.percentageCoolEmployees).toEqual('100');
  });

  test("Check Programs offered contains Web Development", function () {
    expect(launchcode.programsOffered[0]).toEqual('Web Development');
  });

  test("Check Programs offered contains Data Analysis", function () {
    expect(launchcode.programsOffered[1]).toEqual('Data Analysis');
  });

  test("Check Programs offered contains Lift Off", function () {
    expect(launchcode.programsOffered[2]).toEqual('Liftoff');
  });

  test("Check whether the size of Programs offered array is 3", function () {
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("Check if the launchOutput method returns a string", function () {
    expect(typeof launchcode.launchOutput(3)).toBe("string");
  });
  
  test("When passed a number that is ONLY divisible by 2, launchOutput returns 'Launch!'", function () {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("When passed a number that is ONLY divisible by 3, launchOutput returns 'Code!'", function () {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("When passed a number that is ONLY divisible by 5, launchOutput returns 'Rocks!'", function () {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", function () {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function () {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function () {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });

});