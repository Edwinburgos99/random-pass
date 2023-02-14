import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  length: any;
  useUpperCase: any;
  useSpecialCharacters: any;
  password: any;
  showCopied = false;

  ngOnInit() {
    this.password = "";
    this.length = 15;
    this.showCopied = false;
  }
  generatePassword() {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*_-,.";
    let password = "";
    let charSet = lowerCaseChars;

    if (this.useUpperCase) {
      charSet += upperCaseChars;
    }
    if (this.useSpecialCharacters) {
      charSet += specialChars;
    }

    for (let i = 0; i < this.length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    this.password = password;
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    this.showCopied = true;
    setTimeout(() => {
      this.showCopied = false;
    }, 500);
  }


}
