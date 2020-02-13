import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  public formData: any = {
    title: "",
    logo: "../../assets/Group 1logo.svg"
  };

  public formName = {
    underwriter: false,
    csr: false,
    lineManager: false,
    contractor: true
  };

  constructor() {
    if (this.formName["underwriter"]) {
      this.formData.title = "Underwriter";
    } else if (this.formName["lineManager"]) {
      this.formData.title = "Line Manager";
    } else if (this.formName["contractor"]) {
      this.formData.title = "Contractor";
    } else {
      this.formData.title = "CSR";
    }
  }

  getFormDetails() {
    return {
      formName: this.formName,
      formData: this.formData
    };
  }
}
