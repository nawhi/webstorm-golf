import test from "ava";

test('parseTimeRange', t => {
  t.deepEqual(parseTimeRange('08.00-21.00'), [new Time(8), new Time(21)]);
  t.deepEqual(parseTimeRange('14.30 - 18.00'), [new Time(14, 30), new Time(18)]);
  t.deepEqual(parseTimeRange('21.00 - 08.00'), [new Time(21), new Time(8)]);
  t.deepEqual(parseTimeRange('3.00-8.00'), [new Time(3), new Time(8)]);
  t.deepEqual(parseTimeRange('8:30-13:45'), [new Time(8, 30), new Time(13, 45)]);
  t.deepEqual(parseTimeRange('8-12'), [new Time(8), new Time(12)]);
  t.deepEqual(parseTimeRange('8am-1pm'), [new Time(8), new Time(13)]);
  t.deepEqual(parseTimeRange('8.00 to 15.00'), [new Time(8), new Time(15)]);
  t.deepEqual(parseTimeRange('we gone done passed a non date'), null);
})

class Time {
  constructor(public readonly hour: number, public readonly minute: number = 0) {
  }
}

function parseTimeRange(raw: string): [Time, Time] | null {
  return null;
}
