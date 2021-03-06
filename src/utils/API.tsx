import axios from "axios";
import { store } from "./Store";

const apiUrl = "https://bragdonilyes.pythonanywhere.com/";

/*********** Student calls ***************************************************/

export const getStudents = async () => {
  try {
    const res = await axios.get(apiUrl + "users/students/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });

    store.students = res.data;
  } catch (error) {
    return;
  }
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
  axios({
    method: "post",
    url: apiUrl + "users/student/add/",
    data: {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
      birthday: birthday,
      birthPlace: birthPlace,
      promo: promo,
      currentYear: currentYear,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function () {
      getStudents();
    })
    .catch(function (response) {
      console.log(response)
    });
};

export const deleteStudent = async (id: number) => {
  try {
    const res = await axios
      .delete(apiUrl + `users/student/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${store.isAuth.token}`,
        },
      })
    console.log(res.data)
  } catch (error) {
    return;
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
  axios({
    method: "post",
    url: apiUrl + "users/professor/add/",
    data: {
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
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function (response) {
      getProffessors();
    })
    .catch(function (response) {

    });
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
    const res = await axios
      .patch(
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
      )
    console.log(res.data)
    getProffessors();
  } catch (error) {
    return;
  }
};

export const deleteProfessor = async (id: number) => {
  try {
    const res = await axios
      .delete(apiUrl + `users/professor/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${store.isAuth.token}`,
        },
      })
    console.log(res.data)
    getProffessors();
  } catch (error) {
    return;
  }
};

export const getProffessors = async () => {
  try {
    const res = await axios
      .get(apiUrl + "users/professors/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${store.isAuth.token}`,
        },
      })

    store.teachers = res.data;

  } catch (error) {
    return;
  }
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


    store.isAuth.state = true;

    switch (res.data.token.slice(-1)) {
      case "0":
        store.isAuth.access = "0";
        break;
      case "1":
        store.isAuth.access = "1";
        break;
      default:
        store.isAuth.access = "2";
        break;
    }
    let token = res.data.token.substring(0, res.data.token.length - 1);
    store.isAuth.token = token;
    store.isAuth.id = res.data.userId;

    localStorage.setItem("Auth", JSON.stringify(store.isAuth));
    window.location.reload();
  } catch (error) {
    return;
  }
};

/*********** Promotions *******************************************************/

export const getPromotions = async () => {
  try {
    const res = await axios.get(apiUrl + "promo/promos/", {
      headers: {
        "Content-Type": "application/json",
      },
    });


    store.promos = res.data;
  } catch (error) {
    return;
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
  axios({
    method: "post",
    url: apiUrl + "promo/add/",
    data: {
      cycle: cycle,
      year: year,
      specialityName: specialityName,
      description: description,
      minTeamMembers: minTeamMembers,
      maxTeamMembers: maxTeamMembers,
      maxTeamsInProject: maxTeamsInProject,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function (response) {

    })
    .catch(function (response) {

    });
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
    console.log(res.data)

  } catch (error) {
    return;
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
  axios({
    method: "patch",
    url:
      apiUrl +
      `promo/modify/${id}/
    `,
    data: {
      cycle: cycle,
      year: year,
      specialityName: specialityName,
      description: description,
      minTeamMembers: minTeamMembers,
      maxTeamMembers: maxTeamMembers,
      maxTeamsInProject: maxTeamsInProject,
    },
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function (response) {

    })
    .catch(function (response) {

    });
};

export const deletePromotion = async (id: number) => {
  try {
    const res = await axios.delete(apiUrl + `promo/modify/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    console.log(res.data)
  } catch (error) {
    return;
  }
};

/*********** Project calls ***************************************************/

export const addProject = async (data: FormData) => {
  axios({
    method: "post",
    url: apiUrl + "pfe/add/",
    data: data,
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function (response) {

    })
    .catch(function (response) {

    });
};

export const getProjects = async () => {
  try {
    const res = await axios.get(apiUrl + "pfe/projects/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });


    store.projects = res.data;
  } catch (error) {
    return;
  }
};

export const getProject = async (id: number) => {
  try {
    const res = await axios.get(apiUrl + `pfe/modify/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    console.log(res.data)

  } catch (error) {
    return;
  }
};

export const modifyProject = async (id: number, data: FormData) => {
  axios({
    method: "patch",
    url: apiUrl + `pfe/modify/${id}`,
    data: data,
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: `Token ${store.isAuth.token}`,
    },
  })
    .then(function (response) {

    })
    .catch(function (response) {

    });
};

export const deleteProject = async (id: number) => {
  try {
    const res = await axios.delete(apiUrl + `pfe/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    console.log(res.data)

  } catch (error) {
    return;
  }
};

export const handleProject = async (id: number, status: string) => {
  try {
    const res = await axios.patch(apiUrl + `pfe/evaluate/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      status: status,
    });
    console.log(res.data)

  } catch (error) {
    return;
  }
};

export const acceptedProject = async () => {
  try {
    const res = await axios.get(apiUrl + "pfe/acceptedprojects/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    console.log(res.data)

  } catch (error) {
    return;
  }
};

/*********** Team calls ******************************************************/

export const addTeam = async (name: string) => {
  try {
    const res = await axios.post(apiUrl + "users/teams/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
      name: name,
    });
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
  }
};

/*********** Invites calls ***************************************************/

export const getInvites = async () => {
  try {
    const res = await axios.get(apiUrl + `users/invited/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${store.isAuth.token}`,
      },
    });
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
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
    console.log(res.data)

  } catch (error) {
    return;
  }
};
