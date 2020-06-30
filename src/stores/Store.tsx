import { observable } from "mobx";

class Variables {
  @observable searchList = "";
  @observable isAuth = {
    state: false,
    access: "admin",
    token: "",
    id: "",
  };
  @observable page = "Authentication";
  @observable Notifications = [
    {
      Desciption: "Team invite",
      Icon: "addCircleOutline",
    },
    {
      Desciption: "Another notification",
      Icon: "addCircleOutline",
    },
    {
      Desciption: "Send The Report",
      Icon: "megaPhoneOutline",
    },
  ];
}
export const store = new Variables();
