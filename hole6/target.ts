import test from "ava";

test('parseTimeRange', t => {
  t.deepEqual(parseTimeRange('08.00-21.00'), [new Time(8, 0), new Time(21, 0)]);
  t.deepEqual(parseTimeRange('14.30 - 18.00'), [new Time(14, 30), new Time(18, 0)]);
  t.deepEqual(parseTimeRange('21.00 - 08.00'), [new Time(21, 0), new Time(8, 0)]);
  t.deepEqual(parseTimeRange('3.00-8.00'), [new Time(3, 0), new Time(8, 0)]);
  t.deepEqual(parseTimeRange('8:30-13:45'), [new Time(8, 30), new Time(13, 45)]);
  t.deepEqual(parseTimeRange('8-12'), [new Time(8, 0), new Time(12, 0)]);
  t.deepEqual(parseTimeRange('8am-1pm'), [new Time(8, 0), new Time(13, 0)]);
  t.deepEqual(parseTimeRange('8.00 to 15.00'), [new Time(8, 0), new Time(15, 0)]);
  t.deepEqual(parseTimeRange('we gone done passed a non date'), null);
})

class Time {
  constructor(public readonly hour: number, public readonly minute: number) {
  }
}

function parseTimeRange(raw: string): [Time, Time] | null {
  return null;
}
