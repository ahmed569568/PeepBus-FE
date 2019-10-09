import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { CredentialsService } from '@app/core';
import { MapService } from '@app/shared/services/map.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  imageSrc: string | ArrayBuffer;
  form: FormGroup;
  imageFieldName: string;
  userID: number;

  lat = 51.678418;
  lng = 7.809007;

  mapConfigs = {
    field: 'points',
    type: 'single',
    drawing: true,
    drawingType: 'Point'
  };

  constructor(
    private fb: FormBuilder,
    private api: ApiRequestService,
    private credentials: CredentialsService,
    private mapService: MapService
  ) {}

  ngOnInit() {
    this.userID = this.credentials.credentials ? this.credentials.credentials.id : null;
    this.initForm();
    this.fetchAddress();
  }

  fetchAddress() {
    this.mapService.getLocation.subscribe(data => {
      if (data.location) {
        this.form.controls.address.setValue(data.location.display_name);
        this.form.controls.lng.setValue(data.coords[0]);
        this.form.controls.lat.setValue(data.coords[1]);
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      school_name: [''],
      school_email: [''],
      website: [''],
      image: [''],
      phone: [''],
      address: [{ value: '', disabled: true }],
      lat: [''],
      lng: ['']
    });
  }

  uploadPhoto(event: any, field: string) {
    this.imageFieldName = field;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.convertImage.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  convertImage(readerEvt: any) {
    const binaryString = readerEvt.target.result;
    if (this.imageFieldName) {
      this.imagePath(null, btoa(binaryString));
    }
    this.form.controls[this.imageFieldName].setValue(btoa(binaryString));
  }

  imagePath(prefix: string, value: any) {
    if (value.length < 100) {
      return (this.imageSrc = prefix + value);
    } else {
      return (this.imageSrc = 'data:image/png;base64,' + value);
    }
  }

  submit() {
    console.log(this.form.value);
    this.api.post(`clientsetting/${this.userID}/update`).subscribe(resp => console.log(resp));
  }
}
