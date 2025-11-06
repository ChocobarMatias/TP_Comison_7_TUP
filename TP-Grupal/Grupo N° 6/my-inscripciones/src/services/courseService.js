// src/services/coursesService.js

const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const getCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getData("courses"));
    }, 500);
  });
};

export const createCourse = (course) => {
  return new Promise((resolve, reject) => {
    const courses = getData("courses");
    const id = Date.now();
    const newCourse = { id, ...course };
    courses.push(newCourse);
    saveData("courses", courses);
    setTimeout(() => resolve(newCourse), 500);
  });
};
