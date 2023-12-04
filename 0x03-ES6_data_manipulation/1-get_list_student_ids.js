export default function getListStudentIds(list) {
  let array = [];
  if (Array.isArray(list)) {
    array = list.map((l) => l.id);
  }
  return array;
}
