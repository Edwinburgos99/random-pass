import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  length: number = 15;
  useLowerCase: boolean = true;
  useUpperCase: boolean = false;
  useSpecialCharacters: boolean = false;
  useNumbers: boolean = false;
  password: string = "";
  showCopied: boolean = false;
  lowerCaseChars: string = "abcdefghijklmnopqrstuvwxyz";
  upperCaseChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  specialChars: string = "!@#$%^&*_-,.";
  numberChars: string = "0123456789";
  charSet: string = this.lowerCaseChars;

  ngOnInit() {
  }
  generatePassword() {

    this.charSet =
      (this.useLowerCase ? this.lowerCaseChars : '') +
      (this.useUpperCase ? this.upperCaseChars : '') +
      (this.useSpecialCharacters ? this.specialChars : '') +
      (this.useNumbers ? this.numberChars : '');

    this.password = ''

    this.password = this.charSet ?
      Array(this.length).fill(0)
        .map(() => this.charSet
          .charAt(
            Math.floor(Math.random() * this.charSet.length)
          )).join('')
      : '';

  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    this.showCopied = true;
    setTimeout(() => {
      this.showCopied = false;
    }, 1000);
  }


}
