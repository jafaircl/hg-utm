import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
