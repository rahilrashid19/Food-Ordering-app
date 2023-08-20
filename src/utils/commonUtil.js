export function filterData(searchText, resturants) {
  const flterData = resturants.filter((res) => {
    return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
  });
  return flterData;
}
