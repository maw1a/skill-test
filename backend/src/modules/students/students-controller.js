const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  //write your code
  const { name, className, section, roll } = req.query;
  const students = await getAllStudents({ name, className, section, roll });
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  //write your code
  const payload = req.body;
  const message = await addNewStudent(payload);
  res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  //write your code
  const { id: userId } = req.params;
  const payload = req.body;
  const message = await updateStudent({ ...payload, userId });
  res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  //write your code
  const { id: userId } = req.params;
  const detail = await getStudentDetail(userId);
  res.json({ detail });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  //write your code
  const { id: userId } = req.params;
  const { reviewerId, status } = req.body;
  const message = await setStudentStatus({ userId, reviewerId, status });
  res.json(message);
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
