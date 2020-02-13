import { RoleService } from "./../role.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public formName: any;
  constructor(public role: RoleService) {}

  ngOnInit() {
    this.formName = this.role.getFormDetails().formName;
  }
}
