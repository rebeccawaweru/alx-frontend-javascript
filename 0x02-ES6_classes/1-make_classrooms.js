import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const numbers = [19, 20, 34];
  for (const n of numbers) {
    const room = new ClassRoom(n);
    array.push(room);
  }
  return array;
}
