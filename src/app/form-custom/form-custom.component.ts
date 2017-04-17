import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-custom',
  templateUrl: './form-custom.component.html',
  styleUrls: ['./form-custom.component.scss']
})
export class FormCustomComponent implements OnInit {

  constructor(private fs: FormService) { }

  ngOnInit() {
  }

}
