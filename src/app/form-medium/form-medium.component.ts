import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-medium',
  templateUrl: './form-medium.component.html',
  styleUrls: ['./form-medium.component.scss']
})
export class FormMediumComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
