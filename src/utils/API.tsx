import axios from "axios";
import { store } from "../stores/Store";

const url = "http://localhost:3000/";
const studentsUrl = "http://localhost:3000/student";
const teachersUrl = "http://localhost:3000/teacher";
const promotionUrl = "http://localhost:3000/promotion";
const teamUrl = "http://localhost:3000/team";
const invitesUrl = "http://localhost:3000/invites"; //all invites
const inviteUrl = "http://localhost:3000/invite"; //forinvitestudent
const invitedUrl = "http://localhost:3000/invited";

const apiUrl = "http://bragdonilyes.pythonanywhere.com/";

/*********** Student calls ***************************************************/

export const getStudents = () => {
  return axios.get(url + "users/students/all");
};

export const addStudent = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  birthday: string,
  birthPlace: string,
  promo: number,
  currentYear: string
) => {
  try {
    const res = await axios.post(apiUrl + "users/student/add/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      birthday: birthday,
      birthPlace: birthPlace,
      promo: promo,
      currentYear: currentYear,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const getStudent = async (id: number) => {
  try {
    const res = await axios.get(apiUrl + `users/student/invite/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const getInvites = async () => {
  try {
    const res = await axios.get(apiUrl + `users/invited/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const handleInvites = async (
  id: number,
  acccepted: string,
  rejected: string,
  sender: number,
  receiver: number
) => {
  try {
    const res = await axios.put(apiUrl + `users/invites/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      acccepted: acccepted,
      rejected: rejected,
      sender: sender,
      receiver: receiver,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const inviteStudent = async (id: number) => {
  try {
    const res = await axios.post(apiUrl + `users/student/invite/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const deleteStudent = (id: number) => {
  return axios.delete(apiUrl + `users/student/delete/${id}`);
};

export const modifyStudent = async (
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  birthday: string,
  birthPlace: string,
  promo: number,
  currentYear: string
) => {
  try {
    const res = await axios.patch(apiUrl + `users/student/modify/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      birthday: birthday,
      birthPlace: birthPlace,
      promo: promo,
      currentYear: currentYear,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const getStudentTeam = async () => {
  try {
    const res = await axios.get(apiUrl + "users/myteam/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

/*********** Professor calls ***************************************************/

export const addProfessor = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  birthday: string,
  birthPlace: string,
  speciality: string,
  grade: string,
  currentYear: string
) => {
  try {
    const res = await axios.post(apiUrl + "users/professor/add/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      birthday: birthday,
      birthPlace: birthPlace,
      speciality: speciality,
      grade: grade,
      currentYear: currentYear,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const modifyProfessor = async (
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  birthday: string,
  birthPlace: string,
  speciality: string,
  grade: string,
  currentYear: string
) => {
  try {
    const res = await axios.patch(
      apiUrl +
        `users/professor/modify/${id}/
    `,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${store.isAuth.token}`,
        },
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
        birthday: birthday,
        birthPlace: birthPlace,
        speciality: speciality,
        grade: grade,
        currentYear: currentYear,
      }
    );
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const deleteProfessor = (id: number) => {
  return axios.delete(apiUrl + `users/professor/delete/${id}`);
};

export const getProffessors = () => {
  return axios.get(url + "users/professors/all");
};

/*********** Authentication ***************************************************/

export const userLogin = async (email: string, password: string) => {
  try {
    const res = await axios.post(apiUrl + "users/login/", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    });
    // .then();
    console.log(res.data);
    localStorage.setItem("Token", JSON.stringify(res.data));
    store.isAuth.state = true;
    // Check permissions from the token
    switch (res.data.token.slice(-1)) {
      case "0":
        store.isAuth.access = "0";
        break;
      case "1":
        store.isAuth.access = "1";
      default:
        store.isAuth.access = "2";
        break;
    }
    store.isAuth.token = res.data.token;
    store.isAuth.id = res.data.userId;

    localStorage.setItem("Auth", JSON.stringify(store.isAuth));
    window.location.reload();
  } catch (error) {
    return console.log(error.response.request);
  }
};

/*********** Promotions ***************************************************/

export const getPromotions = async () => {
  try {
    const res = await axios.get(apiUrl + "promo/promos/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then();
    console.log(res.data);
    store.promos = res.data;
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const addPromotion = async (
  cycle: string,
  year: string,
  specialityName: string,
  description: string,
  minTeamMembers: number,
  maxTeamMembers: number,
  maxTeamsInProject: number
) => {
  try {
    const res = await axios.post(apiUrl + "promo/add/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      cycle: cycle,
      year: year,
      specialityName: specialityName,
      description: description,
      minTeamMembers: minTeamMembers,
      maxTeamMembers: maxTeamMembers,
      maxTeamsInProject: maxTeamsInProject,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const setupPromotion = async (
  id: number,
  cycle: string,
  year: string,
  specialityName: string,
  description: string,
  minTeamMembers: number,
  maxTeamMembers: number,
  maxTeamsInProject: number
) => {
  try {
    const res = await axios.put(apiUrl + `promo/setup/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      minTeamMembers: minTeamMembers,
      maxTeamMembers: maxTeamMembers,
      maxTeamsInProject: maxTeamsInProject,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const modifyPromotion = async (
  id: number,
  cycle: string,
  year: string,
  specialityName: string,
  description: string,
  minTeamMembers: number,
  maxTeamMembers: number,
  maxTeamsInProject: number
) => {
  try {
    const res = await axios.patch(
      apiUrl +
        `promo/modify/${id}/
    `,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${store.isAuth.token}`,
        },
        cycle: cycle,
        year: year,
        specialityName: specialityName,
        description: description,
        minTeamMembers: minTeamMembers,
        maxTeamMembers: maxTeamMembers,
        maxTeamsInProject: maxTeamsInProject,
      }
    );
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const getStudentPromo = async () => {
  try {
    const res = await axios.post(apiUrl + "users/students", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const deletePromotion = (id: number) => {
  return axios.delete(apiUrl + `promo/${id}`);
};
/**************************************************************/

export const addTeam = async (name: string) => {
  try {
    const res = await axios.post(apiUrl + "users/teams/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      name: name,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const getCurrentTeam = async (id: number) => {
  try {
    const res = await axios.get(apiUrl + `users/team/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

export const validateTeam = async (id: number, readiness: boolean) => {
  try {
    const res = await axios.post(apiUrl + `users/team/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      readiness: readiness,
    });
    // .then();
    console.log(res.data);
  } catch (error) {
    return console.log(error.response.request);
  }
};

/*****************************************************/

/********************************************* */
