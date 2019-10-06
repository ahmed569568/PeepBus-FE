import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  imageSrc: string | ArrayBuffer;
  form: FormGroup;
  constructor() {}

  readURL(event: Event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {}
}
