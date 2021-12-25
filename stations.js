const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let goodStations = []
  for (const station of stations) {
    const name = station[0]
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20 && (type === 'school' || type === 'community centre')){
      goodStations.push(name)
    }
  }
  console.log(goodStations)
  return goodStations
}

chooseStations(stations);