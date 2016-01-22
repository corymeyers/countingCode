describe('countUpBy', function() {
  it("will count up by ones to limit", function() {
    expect(countUpBy(1, 1)).to.eql([1]);
  });
  it("will count up by 2s to limit", function() {
    expect(countUpBy(2, 6)).to.eql([2,4,6]);
  });
});

// we need two inputs:
// input: 30
// count by: 1
//
// output: 1, 2, 3, 4...
