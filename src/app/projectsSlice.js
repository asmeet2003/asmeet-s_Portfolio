// // https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   projects: [],
//   mainProjects: [],
// };

// export const projectsSlice = createSlice({
//   name: "projects",
//   initialState,
//   reducers: {
//     setProjects: (state, action) => {
//       state.projects = action.payload;
//     },
//     setMainProjects: (state, action) => {
//       state.mainProjects = action.payload;
//     },
//   },
// });

// export const selectProjects = (state) => state.projects.projects;
// export const selectMainProjects = (state) => state.projects.mainProjects;
// export const { setProjects, setMainProjects } = projectsSlice.actions;

// export default projectsSlice.reducer;
// src/app/projectsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  mainProjects: [
    {
      id: "vegStore",
      name: "Veg Store",
      description: "A full-stack e-commerce application for buying vegetables.",
      image: "link_to_vegStore_image", // Replace with the actual image link
      html_url: "https://github.com/asmeet2003/vegStore",
      homepage: "link_to_vegStore_demo" // Replace with the actual demo link
    }
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setMainProjects: (state, action) => {
      state.mainProjects = action.payload;
    },
  },
});

export const selectProjects = (state) => state.projects.projects;
export const selectMainProjects = (state) => state.projects.mainProjects;
export const { setProjects, setMainProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
