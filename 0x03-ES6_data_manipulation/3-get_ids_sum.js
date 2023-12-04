export default function getStudentIdsSum(list) {
  return list.reduce((acc, c) => acc + c.id, 0);
}
