import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "signin",
  templateUrl: "signin.page.html",
  styleUrls: ["signin.page.scss"]
})
export class SigninPage {
  credentials = {
    email: "",
    password: ""
  };

  constructor(private router: Router) {}

  handleSubmit(form) {
    this.router.navigate(["albums"]);
  }
}
