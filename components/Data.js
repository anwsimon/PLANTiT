import { getDatabase, ref, set } from '@firebase/database';

function storeTimeWatered(plantName) {
  const database = getDatabase()
  set(ref(db, 'plants/' + plantName), {
    needsWater: false,
  });
}
export default storeTimeWatered
