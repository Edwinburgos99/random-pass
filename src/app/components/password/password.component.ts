import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  length: number = 15;
  useUpperCase: boolean = false;
  useSpecialCharacters: boolean = false;
  password: string = "";
  showCopied: boolean = false;
  lowerCaseChars: string = "abcdefghijklmnopqrstuvwxyz";
  upperCaseChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  specialChars: string = "!@#$%^&*_-,.";
  charSet: string = this.lowerCaseChars;

  ngOnInit() {
  }
  generatePassword() {

    if (this.useUpperCase) {
      this.charSet += this.upperCaseChars;
    }
    if (this.useSpecialCharacters) {
      this.charSet += this.specialChars;
    }

    for (let i = 0; i < this.length; i++) {
      this.password += this.charSet.charAt(Math.floor(Math.random() * this.charSet.length));
    }
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    this.showCopied = true;
    setTimeout(() => {
      this.showCopied = false;
    }, 1000);
  }


}
