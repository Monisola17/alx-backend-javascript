const getListStudentIds = (studentArray) => {
  let listStudentIds = [];
  if (!Array.isArray(studentArray)) {
    return listStudentIds;
  }
  listStudentIds = studentArray.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
